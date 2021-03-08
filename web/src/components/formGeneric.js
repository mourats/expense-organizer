import React from 'react';
import { observer } from 'mobx-react';

@observer
class FormGeneric extends React.Component {
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
  }

  onFinish = () => {
    this.store.save(this.props.actionType, this.props.changeModalVisible);
  };

  componentDidMount() {
    this.store.initialize(this.props.object);
  }
}

FormGeneric.displayName = 'FormGeneric';

export default FormGeneric;
