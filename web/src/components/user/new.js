import React from 'react';
import UserForm from './form';
import PropTypes from 'prop-types';

const NewUser = (props) => {
  return (
    <>
      <UserForm
        actionType='new'
        history={props.history}
      />
    </>
  );
};

NewUser.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default NewUser;
