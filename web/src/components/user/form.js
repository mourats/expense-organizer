import React from 'react';
import { Button, Col, Form, Input, Modal, Row, Spin } from 'antd';
import { observer } from 'mobx-react';
import { validateMessages, layout } from '../../constants/DadosEstaticos';
import { fieldsToObject } from '../../util/util';
import UserIndexStore from '../../stores/user/index';
import UrlRouter from '../../constants/UrlRouter';
import FormGeneric from '../formGeneric';

@observer
class UserForm extends FormGeneric {
  constructor(props) {
    super(props, UrlRouter.usuario.index);
    this.store = new UserIndexStore();
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

UserForm.displayName = 'UserForm';

export default UserForm;
