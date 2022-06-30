import React from 'react';
import { Table, Spin, Button, Divider, Row, Col, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import IncomeIndexStore from '../../stores/income/index';
import IndexGeneric from '../indexGeneric';
import { moneyFormatter } from '../../util/util';
import moment from 'moment';
import UrlRouter from '../../constants/UrlRouter';
import { Link } from 'react-router-dom';

@observer
class IncomeIndex extends IndexGeneric {
  constructor(props) {
    super(props);
    this.store = new IncomeIndexStore();
  }

  componentDidMount() {
    this.store.load(this.store.treatData);
    this.store.getUsersSelect();
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
        render: (value) => moneyFormatter(+value),
      },
      {
        title: 'Usuário',
        dataIndex: 'usuario',
        key: 'usuario',
        render: (usuario) => `${(usuario && usuario.nome) || '-'}`,
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
              {this.getDefaultEdit(UrlRouter.renda.edit.replace(':id', row.id))}
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
            <Link to={UrlRouter.renda.new}>
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

IncomeIndex.displayName = 'IncomeIndex';

export default IncomeIndex;
