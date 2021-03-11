import React from 'react';
import { Button, Form, Input, Modal, InputNumber } from 'antd';
import { observer } from 'mobx-react';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import { fieldsToObject } from '../../util/util';
@observer
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    debugger;
    console.log('changed', value);
  }

  render() {
    const { store } = this.props;

    return (
      <Modal
        title={
          store.actionType === 'edit' ? 'Editar Registro' : 'Novo Registro'
        }
        visible={store.isModalVisible}
        onCancel={store.disableModalAndActionType}
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
            name='descricao'
            label='Descrição'
            rules={[{ required: true }]}
          >
            <Input placeholder='Digite o descrição' />
          </Form.Item>
          <Form.Item name='valor' label='Valor' rules={[{ required: true }]}>
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value) =>
                `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
              }
              parser={(value) => value.replace(/[A-Z]|[a-z]|[$ ]|\.+/g, '')}
            />
          </Form.Item>
          <Form.Item
            name='parcelas'
            label='Parcelas'
            rules={[{ required: true, type: 'number', min: 1, max: 12 }]}
          >
            <InputNumber
              style={{ width: '30%' }}
              placeholder='Digite as parcelas'
            />
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

ExpenseForm.displayName = 'ExpenseForm';

export default ExpenseForm;
