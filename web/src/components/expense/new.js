import React from 'react';
import ExpenseForm from './form';
import PropTypes from 'prop-types';

const NewExpense = (props) => {
  return (
    <>
      <ExpenseForm
        actionType='new'
        history={props.history}
      />
    </>
  );
};

NewExpense.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default NewExpense;
