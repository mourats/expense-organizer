import React from 'react';
import { observer } from 'mobx-react';

@observer
class FormGeneric extends React.Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
  }

  onFinish = (values) => {
    this.store.save(values, this.props.actionType);
  };

  componentDidMount() {
    this.store.initialize(this.props.id);
  }
}

FormGeneric.displayName = 'FormGeneric';

export default FormGeneric;
