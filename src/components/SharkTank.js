import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

function SharkTank({ liveStudents }) {
  return (
    <div className='sharkTank'>
      {liveStudents.map((student) => ( // Creating a new array inside the shark tank of all live students
        <LiveStudent key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}
    </div>
  );
}

SharkTank.propTypes = {
  liveStudents: PropTypes.array.isRequired,
  color: PropTypes.string
};

export default SharkTank;
