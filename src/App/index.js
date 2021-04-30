import React, { useState, useEffect } from 'react';
import SharkTank from '../components/SharkTank';
import { students } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [liveStudent, setLiveStudent] = useState([]);
  console.warn(liveStudent);
  useEffect(() => {
    setLiveStudent(students);
  }, []);

  return (
    <div className='App'>
      <SharkTank />
    </div>
  );
}

export default App;
