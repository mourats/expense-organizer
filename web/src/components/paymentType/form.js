import React from 'react';
import { Button, Form, Input, InputNumber, Spin, Row, Col } from 'antd';
import { observer } from 'mobx-react';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import { fieldsToObject } from '../../util/util';
import FormGeneric from '../formGeneric';
import UrlRouter from '../../constants/UrlRouter';
import PaymentTypeIndexStore from '../../stores/paymentType';
@observer
class PaymentTypeForm extends FormGeneric {
  constructor(props) {
    super(props, UrlRouter.tipoPagamento.index);
    this.store = new PaymentTypeIndexStore();
  }

  render() {
    if (this.store.object) {
      return (
        <Form
          {...layout}
          onFinish={() => this.store.save2(this._goBack)}
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
            name='diaVencimentoPadrao'
            label='Dia Vencimento'
            rules={[{ required: true, type: 'number', min: 1, max: 31 }]}
          >

            <InputNumber
              placeholder='Digite o dia de vencimento' />
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

PaymentTypeForm.displayName = 'PaymentTypeForm';

export default PaymentTypeForm;
