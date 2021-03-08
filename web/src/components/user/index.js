import React from 'react';
import { Table, Spin, Button, Divider, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import UserIndexStore from '../../stores/user/index';
import IndexGeneric from '../indexGeneric';

@observer
class UserIndex extends IndexGeneric {
  constructor(props) {
    super(props);
    this.store = new UserIndexStore();
  }

  render() {
    const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
      },
      {
        title: 'Sobrenome',
        dataIndex: 'sobrenome',
        key: 'sobrenome',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        key: 'action-edit',
        render: (row) => this.getDefaultEdit(row),
      },
      {
        key: 'action-delete',
        render: (row) => this.getDefaultDelete(row),
      },
    ];
    if (this.store.loading) return <Spin />;

    return (
      <>
        <Row>
          <Col offset={21}>
            <Button type='primary' icon={<PlusOutlined />}>
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
      </>
    );
  }
}

UserIndex.displayName = 'UserIndex';

export default UserIndex;
