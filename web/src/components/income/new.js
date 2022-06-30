import React from 'react';
import IncomeForm from './form';
import PropTypes from 'prop-types';

const NewIncome = (props) => {
  return (
    <>
      <IncomeForm
        actionType='new'
        history={props.history}
      />
    </>
  );
};

NewIncome.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default NewIncome;
