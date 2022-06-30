import React from 'react';
import { Button, Form, Input, Modal, Spin } from 'antd';
import { observer } from 'mobx-react';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import { fieldsToObject } from '../../util/util';
import UserIndexStore from '../../stores/user/index';

@observer
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.store = new UserIndexStore();
  }

  componentDidMount() {
    const { id, actionType } = this.props;
    this.store.initialize(id, actionType);
  }

  render() {
    if (this.store.object) {
      return (
        <Form
          {...layout}
          onFinish={() => this.store.save()}
          initialValues={this.store.object}
          onFieldsChange={(_, allFields) =>
            this.store.updateObject(fieldsToObject(allFields))
          }
          validateMessages={validateMessages}
          layout='vertical'
        >
          <Form.Item name='nome' label='Nome' rules={[{ required: true }]}>
            <Input placeholder='Digite o nome' />
          </Form.Item>
          <Form.Item
            name='sobrenome'
            label='Sobrenome'
            rules={[{ required: true }]}
          >
            <Input placeholder='Digite o sobrenome' />
          </Form.Item>
          <Form.Item name='email' label='Email' rules={[{ type: 'email' }]}>
            <Input placeholder='Digite o email' />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button
              data-cy='submit-button'
              className='btn'
              type='primary'
              htmlType='submit'
            >
              Salvar
            </Button>
          </Form.Item>
        </Form>
      );
    } else {
      return <Spin />
    }
  }
}

UserForm.displayName = 'UserForm';

export default UserForm;
