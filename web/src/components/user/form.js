import React from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { observer } from 'mobx-react';
import UserFormStore from '../../stores/user/form';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import FormGeneric from '../formGeneric';

@observer
class UserForm extends FormGeneric {
  constructor(props) {
    super(props);
    this.store = new UserFormStore();
  }

  render() {
    if (this.store.loading) return <Spin />;

    return (
      <Form
        {...layout}
        onFinish={this.onFinish}
        validateMessages={validateMessages}
        className='scrollable'
        layout='vertical'
      >
        <Form.Item
          name={['user', 'nome']}
          label='Nome'
          rules={[{ required: true }]}
        >
          <Input placeholder='Digite o nome' />
        </Form.Item>
        <Form.Item
          name={['user', 'sobrenome']}
          label='Sobrenome'
          rules={[{ required: true }]}
        >
          <Input placeholder='Digite o sobrenome' />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[{ type: 'email' }]}
        >
          <Input placeholder='Digite o email' />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button className='btn' type='primary' htmlType='submit'>
            Salvar
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

UserForm.displayName = 'UserForm';

export default UserForm;
