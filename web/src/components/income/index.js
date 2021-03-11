import React from 'react';
import { Table, Spin, Button, Divider, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import IncomeIndexStore from '../../stores/income/index';
import IndexGeneric from '../indexGeneric';
import IncomeForm from './form';
import moment from 'moment';

@observer
class IncomeIndex extends IndexGeneric {
  constructor(props) {
    super(props);
    this.store = new IncomeIndexStore();
    this.formModalContent = this.formModalContent.bind(this);
  }

  componentDidMount() {
    this.store.load(this.store.treatData);
    this.store.getUsersSelect();
  }

  formModalContent() {
    if (this.store.isModalVisible) {
      return <IncomeForm store={this.store} />;
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
        render: (value) => `R$ ${value}`.replace(/,([^,]*)$/, '.$1'),
      },
      {
        title: 'Usuário',
        dataIndex: 'usuario',
        key: 'usuario',
        render: (usuario) => `${usuario.nome}`,
      },
      {
        title: 'Período',
        dataIndex: 'periodo',
        key: 'periodo',
        render: (date) => moment(date).format('MM/YYYY'),
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

IncomeIndex.displayName = 'IncomeIndex';

export default IncomeIndex;
