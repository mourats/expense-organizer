import React from 'react';
import PaymentTypeForm from './form';
import PropTypes from 'prop-types';

const EditPaymentType = (props) => {
  return (
    <>
      <PaymentTypeForm
        actionType='edit'
        id={props.match.params.id}
        history={props.history}
      />
    </>
  );
};

EditPaymentType.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default EditPaymentType;
