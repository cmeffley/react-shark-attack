import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import SharkTank from '../components/SharkTank';
import GraveYard from '../components/GraveYard';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const [living, dead] = followTheLight();
    setLiveStudents(living); // OPTION: can pass livingStudents function instead of the declared taco (living)
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <Button
        className='shark-btn'
        color='info'
        onClick={handleClick}
        disabled={liveStudents.length <= 0}
      >SHARK ATTACK
      </Button>
      <SharkTank liveStudents={liveStudents}/>
      <GraveYard deadStudents={deadStudents}/>
    </div>
  );
}

export default App;
