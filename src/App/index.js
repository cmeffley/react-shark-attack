import React from 'react';
import { Button } from 'reactstrap';
import SharkTank from '../components/SharkTank';
import GraveYard from '../components/GraveYard';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    followTheLight();
  };

  return (
    <div className='App'>
      <Button className='shark-btn' color='info' onClick={handleClick}>SHARK ATTACK</Button>
      <SharkTank livingStudents={livingStudents}/>
      <GraveYard dearlyBeloved={dearlyBeloved}/>
    </div>
  );
}

export default App;
