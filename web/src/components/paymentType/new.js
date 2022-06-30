import React from 'react';
import PaymentTypeForm from './form';
import PropTypes from 'prop-types';

const NewPaymentType = (props) => {
  return (
    <>
      <PaymentTypeForm
        actionType='new'
        history={props.history}
      />
    </>
  );
};

NewPaymentType.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default NewPaymentType;
