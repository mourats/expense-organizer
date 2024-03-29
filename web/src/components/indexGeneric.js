import React from 'react';
import { Button, Tooltip, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@observer
class IndexGeneric extends React.Component {
  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.showConfirm = this.showConfirm.bind(this);
    this.getDefaultEdit = this.getDefaultEdit.bind(this);
    this.getDefaultDelete = this.getDefaultDelete.bind(this);
  }

  componentDidMount() {
    this.store.load();
  }

  showForm(row) {
    this.store.object = row;
    this.store.isModalVisible = true;
    this.store.actionType = row ? 'edit' : 'new';
  }

  showConfirm(row) {
    const { store } = this;
    Modal.confirm({
      title: 'Excluir',
      okType: 'danger',
      content: `Deseja realmente excluir este registro?`,
      onOk() {
        store.delete(row);
      },
      onCancel() {},
    });
  }

  getDefaultEdit(urlEdit) {
    return (
      <Link to={urlEdit}>
        <Tooltip title='Editar'>
          <Button data-cy='edit-button' icon={<EditOutlined />} />
        </Tooltip>
      </Link>
    );
  }

  getDefaultDelete(row) {
    return (
      <Button
        data-cy='delete-button'
        className='btn-action'
        icon={<DeleteOutlined />}
        onClick={() => this.showConfirm(row)}
        type='danger'
      />
    );
  }
}

IndexGeneric.displayName = 'IndexGeneric';

export default IndexGeneric;
