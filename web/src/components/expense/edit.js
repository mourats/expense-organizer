import React from 'react';
import ExpenseForm from './form';
import PropTypes from 'prop-types';

const EditExpense = (props) => {
  return (
    <>
      <ExpenseForm
        actionType='edit'
        id={props.match.params.id}
        history={props.history}
      />
    </>
  );
};

EditExpense.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default EditExpense;
