import React from 'react';
import { Table, Spin, Button, Divider, Row, Col, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import PaymentTypeIndexStore from '../../stores/paymentType/index';
import IndexGeneric from '../indexGeneric';
import UrlRouter from '../../constants/UrlRouter';
import { Link } from 'react-router-dom';

@observer
class PaymentTypeIndex extends IndexGeneric {
  constructor(props) {
    super(props);
    this.store = new PaymentTypeIndexStore();
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
              {this.getDefaultEdit(UrlRouter.tipoPagamento.edit.replace(':id', row.id))}
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
            <Link to={UrlRouter.tipoPagamento.new}>
              <Tooltip title='Novo'>
                <Button icon={<PlusOutlined />} data-cy='new-button'
                  type='primary' >
                  Novo
                </Button>
              </Tooltip>
            </Link>
          </Col>
        </Row>
        <Divider />
        <Table
          columns={columns}
          dataSource={this.store.listaComKey}
          loading={this.store.loading}
        />
      </div>
    );
  }
}

PaymentTypeIndex.displayName = 'PaymentTypeIndex';

export default PaymentTypeIndex;
