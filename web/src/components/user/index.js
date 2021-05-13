import React from 'react';
import { Table, Spin, Button, Divider, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import UserIndexStore from '../../stores/user/index';
import IndexGeneric from '../indexGeneric';
import UserForm from './form';

@observer
class UserIndex extends IndexGeneric {
  constructor(props) {
    super(props);
    this.store = new UserIndexStore();
    this.formModalContent = this.formModalContent.bind(this);
  }

  formModalContent() {
    if (this.store.isModalVisible) {
      return <UserForm store={this.store} />;
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

UserIndex.displayName = 'UserIndex';

export default UserIndex;
