import React from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Spin,
  Row,
  Col
} from 'antd';
import { observer } from 'mobx-react';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import { fieldsToObject } from '../../util/util';
const { Option } = Select;
import 'moment/locale/pt-br';
import locale from 'antd/es/date-picker/locale/pt_BR';
import FormGeneric from '../formGeneric';
import ExpenseIndexStore from '../../stores/expense';
import UrlRouter from '../../constants/UrlRouter';

@observer
class ExpenseForm extends FormGeneric {
  constructor(props) {
    super(props, UrlRouter.despesa.index);
    this.store = new ExpenseIndexStore();
  }

  componentDidMount() {
    const { id, actionType } = this.props;
    this.store.initialize(id, actionType, this.store.treatObject);
  }

  render() {
    if (this.store.object) {
      return (
        <Form
          {...layout}
          onFinish={() => this.store.save(this._goBack)}
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
            name='descricao'
            label='Descrição'
            rules={[{ required: true }]}
          >
            <Input placeholder='Digite o descrição' />
          </Form.Item>
          <Form.Item name='valor' label='Valor' rules={[{ required: true }]}>
            <InputNumber
              placeholder='Digite o valor'
              style={{ width: '100%' }}
              parser={(value) => value.replace(/,([^,]*)$/, '.$1')}
            />
          </Form.Item>
          <Form.Item
            name='usuarioId'
            label='Usuário'
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder='Selecione um usuário'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {this.store.userList.map((user) => (
                <Option key={user.id} value={user.id}>
                  {`${user.nome} ${user.sobrenome}`}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='tipoPagamentoId'
            label='Tipo de Pagamento'
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder='Selecione um tipo de pagamento'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {this.store.typePagamentList.map((pag) => (
                <Option key={pag.id} value={pag.id}>
                  {`${pag.nome}`}
                </Option>
              ))}
            </Select>
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
          <Form.Item
            name='periodo'
            label='Período'
            rules={[{ required: true }]}
          >
            <DatePicker
              picker='month'
              placeholder='Selecione o mês'
              style={{ width: '30%' }}
              locale={locale}
              format={'MM/YYYY'}
            />
          </Form.Item>
          <Form.Item>
            <Row>
              <Col offset={6} span={8}>
                <Button
                  data-cy='submit-button'
                  className='btn'
                  type='primary'
                  htmlType='submit'
                >
                  Salvar
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  data-cy='cancel-button'
                  className='btn-cancel'
                  onClick={() => this._goBack()}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      );
    } else {
      return <Spin />
    }
  }
}

ExpenseForm.displayName = 'ExpenseForm';

export default ExpenseForm;
