import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function GraveYard({ dearlyBeloved }) {
  return (
    <div className='Graveyard'>
      <h2>GRAVE YARD</h2>
      {dearlyBeloved.map((student) => (
      <GraveStone key={student.id}
        firstName={student.firstName}
        lastName={student.lastName}
      />
      ))}
    </div>
  );
}

GraveYard.propTypes = {
  dearlyBeloved: PropTypes.array.isRequired
};

export default GraveYard;
