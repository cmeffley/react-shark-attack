import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

function LiveStudent({
  firstName,
  lastName
}) {
  return (
    <div className='liveStudent'>
      <Card>
        <CardTitle>{firstName} {lastName}</CardTitle>
      </Card>
    </div>
  );
}

LiveStudent.propTypes = {
  firstName: PropTypes.array.isRequired,
  lastName: PropTypes.array.isRequired
};

export default LiveStudent;
