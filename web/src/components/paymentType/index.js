import React from 'react';
import { Table, Spin, Button, Divider, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import PaymentTypeIndexStore from '../../stores/paymentType/index';
import IndexGeneric from '../indexGeneric';
import PaymentTypeForm from './form';

@observer
class PaymentTypeIndex extends IndexGeneric {
  constructor(props) {
    super(props);
    this.store = new PaymentTypeIndexStore();
    this.formModalContent = this.formModalContent.bind(this);
  }

  formModalContent() {
    if (this.store.isModalVisible) {
      return <PaymentTypeForm store={this.store} />;
    }
  }

  render() {
    const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
      },
      {
        title: 'Dia do Vencimento',
        dataIndex: 'diaVencimentoPadrao',
        key: 'diaVencimentoPadrao',
      },
      {
        render: (row) => {
          return (
            <div className='actions'>
              {this.getDefaultEdit(row)}
              {this.getDefaultDelete(row)}
            </div>
          );
        },
      },
    ];
    if (this.store.loading) return <Spin />;

    return (
      <div className='scrollable'>
        <Row>
          <Col offset={21}>
            <Button
              data-cy='new-button'
              type='primary'
              icon={<PlusOutlined />}
              onClick={() => this.showForm()}
            >
              Novo
            </Button>
          </Col>
        </Row>
        <Divider />
        <Table
          columns={columns}
          dataSource={this.store.listaComKey}
          loading={this.store.loading}
        />
        {this.formModalContent()}
      </div>
    );
  }
}

PaymentTypeIndex.displayName = 'PaymentTypeIndex';

export default PaymentTypeIndex;
