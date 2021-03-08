import React from 'react';
import { Button, Form, Input, Spin, Modal } from 'antd';
import { observer } from 'mobx-react';
import UserFormStore from '../../stores/user/form';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import FormGeneric from '../formGeneric';
import { objectToFields, fieldsToObject } from '../../util/util';

@observer
class UserForm extends FormGeneric {
  constructor(props) {
    super(props);
    this.store = new UserFormStore();
  }

  render() {
    if (this.store.loading) return <Spin />;
    const { isModalVisible, changeModalVisible, actionType } = this.props;
    debugger;
    const cu = objectToFields(this.store.object);

    if (this.store.loading) return <Spin />;

    return (
      <Modal
        title={actionType === 'edit' ? 'Editar Registro' : 'Novo Registro'}
        visible={isModalVisible}
        onCancel={changeModalVisible}
        footer={null}
      >
        <Form
          {...layout}
          onFinish={this.onFinish}
          onFieldsChange={(changedFields, allFields) =>
            (this.store.object = fieldsToObject(allFields))
          }
          validateMessages={validateMessages}
          layout='vertical'
        >
          <Form.Item
            initialValue={this.props.object.nome}
            name={['nome']}
            label='Nome'
            rules={[{ required: true }]}
          >
            <Input placeholder='Digite o nome' />
          </Form.Item>
          <Form.Item
            initialValue={this.props.object.sobrenome}
            name={['sobrenome']}
            label='Sobrenome'
            rules={[{ required: true }]}
          >
            <Input placeholder='Digite o sobrenome' />
          </Form.Item>
          <Form.Item
            initialValue={this.props.object.email}
            name={['email']}
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
      </Modal>
    );
  }
}

UserForm.displayName = 'UserForm';

export default UserForm;
