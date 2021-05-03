import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

function GraveStone({
  firstName,
  lastName
}) {
  return (
    <div className='graveStone'>
      <Card body id='deadCard' className='card m-3'>
        <CardTitle>{firstName} {lastName}</CardTitle>
      </Card>
    </div>
  );
}

GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;
