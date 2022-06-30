import React from 'react';
import IncomeForm from './form';
import PropTypes from 'prop-types';

const EditIncome = (props) => {
  return (
    <>
      <IncomeForm
        actionType='edit'
        id={props.match.params.id}
        history={props.history}
      />
    </>
  );
};

EditIncome.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default EditIncome;
