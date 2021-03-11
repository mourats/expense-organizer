import React from 'react';
import { Table, Spin, Button, Divider, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import ExpenseIndexStore from '../../stores/expense/index';
import IndexGeneric from '../indexGeneric';
import ExpenseForm from './form';

@observer
class ExpenseIndex extends IndexGeneric {
  constructor(props) {
    super(props);
    this.store = new ExpenseIndexStore();
    this.formModalContent = this.formModalContent.bind(this);
  }

  formModalContent() {
    if (this.store.isModalVisible) {
      return <ExpenseForm store={this.store} />;
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
        title: 'Descrição',
        dataIndex: 'descricao',
        key: 'descricao',
        render: (value) =>
          value.length > 50
            ? value.substring(0, 47) + '...'
            : value.substring(0, 50),
      },
      {
        title: 'Valor',
        dataIndex: 'valor',
        key: 'valor',
      },
      {
        title: 'Parcelas',
        dataIndex: 'parcelas',
        key: 'parcelas',
      },
      {
        title: 'Período',
        dataIndex: 'periodo',
        key: 'periodo',
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

ExpenseIndex.displayName = 'ExpenseIndex';

export default ExpenseIndex;
