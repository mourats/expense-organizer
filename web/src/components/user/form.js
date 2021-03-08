import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { observer } from 'mobx-react';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import { fieldsToObject } from '../../util/util';
@observer
class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actionType, store } = this.props;

    return (
      <Modal
        title={actionType === 'edit' ? 'Editar Registro' : 'Novo Registro'}
        visible={store.isModalVisible}
        onCancel={store.changeModalVisible}
        footer={null}
      >
        <Form
          {...layout}
          onFinish={() => store.save(actionType, store.changeModalVisible)}
          initialValues={store.object}
          onFieldsChange={(_, allFields) =>
            store.updateObject(fieldsToObject(allFields))
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
