import React from 'react';
import UserForm from './form';
import PropTypes from 'prop-types';

const EditUser = (props) => {
  return (
    <>
      <UserForm
        actionType='edit'
        id={props.match.params.id}
        history={props.history}
      />
    </>
  );
};

EditUser.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default EditUser;
