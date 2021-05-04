import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import SharkTank from '../components/SharkTank';
import GraveYard from '../components/GraveYard';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);
  const [image, setImage] = useState(false);

  useEffect(() => {
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const [living, dead] = followTheLight();
    setLiveStudents(living); // OPTION: can pass livingStudents function instead of the declared taco (living)
    setDeadStudents(dead);
    setImage(true);
  };

  return (
    <div className='App'>
      {image ? <Button size='lg' color='warning' onClick={() => setImage(false)}>IT&apos;S SAFE, Everyone Back in the Water</Button>
        : <Button
        className='shark-btn'
        color='danger'
        onClick={handleClick}
        disabled={liveStudents.length <= 0}
      >Careful, there could be a <strong>SHARK ATTACK!</strong>
      </Button>}
    <div className='sharkImage'>
      {image && <img src='https://www.surfertoday.com/images/stories/greatwhiteshark7.jpg' alt='Shark Attack' />}
    </div>
      <h2><strong>SHARK TANK</strong></h2>
      <SharkTank liveStudents={liveStudents}/><br />
      <h2 id='graves'><strong>GRAVE YARD</strong></h2>
      <GraveYard deadStudents={deadStudents}/>
    </div>
  );
}

export default App;
