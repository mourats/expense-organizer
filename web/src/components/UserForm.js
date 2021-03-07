import React from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { observer } from 'mobx-react';
import UserFormStore from '../stores/UserFormStore';

@observer
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.store = new UserFormStore();
    this.onFinish = this.onFinish.bind(this);
    this.store.load();
  }

  onFinish = (values) => {
    this.store.save(values);
  };

  render() {
    const validateMessages = {
      required: '${label} é obrigatório!',
      types: {
        email: '${label} não é válido!',
        number: '${label} não um número válido!',
      },
      number: {
        range: '${label} deve ser entre ${min} e ${max}',
      },
    };

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 30 },
    };

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
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button className='btn' type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

UserForm.displayName = 'UserForm';

export default UserForm;
