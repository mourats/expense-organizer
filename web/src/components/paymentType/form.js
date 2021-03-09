import React from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { observer } from 'mobx-react';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import { fieldsToObject } from '../../util/util';
@observer
class PaymentTypeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store } = this.props;

    return (
      <Modal
        title={
          store.actionType === 'edit' ? 'Editar Registro' : 'Novo Registro'
        }
        visible={store.isModalVisible}
        onCancel={store.disableModalAndactionType}
        footer={null}
      >
        <Form
          {...layout}
          onFinish={() => store.save()}
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
            name='diaVencimentoPadrao'
            label='Dia Vencimento'
            rules={[{ required: true, type: 'number', min: 1, max: 31 }]}
          >
            <InputNumber placeholder='Digite o dia de vencimento' />
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

PaymentTypeForm.displayName = 'PaymentTypeForm';

export default PaymentTypeForm;
