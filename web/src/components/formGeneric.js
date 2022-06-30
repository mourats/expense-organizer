import React from 'react';
import { observer } from 'mobx-react';

@observer
class FormGeneric extends React.Component {
  constructor(props, urlGoBack) {
    super(props);
    this.urlGoBack = urlGoBack;
  }

  componentDidMount() {
    const { id, actionType } = this.props;
    this.store.initialize(id, actionType);
  }

  _goBack() {
    this.props.history.push(this.urlGoBack);
  }
}

FormGeneric.displayName = 'FormGeneric';

export default FormGeneric;
