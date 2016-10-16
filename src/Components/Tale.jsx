import React, { PropTypes } from 'react';
import OneFieldForm from './OneFieldForm';

class Tale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.editButtonHandler = this.editButtonHandler.bind(this);
    this.confirmButtonHandler = this.confirmButtonHandler.bind(this);
    this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
  }

  editButtonHandler() {
    this.setState({
      isEditing: true,
    });
  }

  confirmButtonHandler(newTaleName) {
    const newTale = Object.assign({}, this.props.data);
    newTale.name = newTaleName;
    this.props.editTale(newTale);
    this.setState({
      isEditing: false,
    });
  }

  cancelButtonHandler() {
    this.setState({
      isEditing: false,
    });
  }

  removeButtonHandler() {
    this.props.removeTale(this.props.data._id);
  }


  render() {
    const buttons = this.state.isEditing ?
      <span />
      : (<div>
        <button onClick={this.editButtonHandler}>
          Edit
        </button>
        <button onClick={this.removeButtonHandler}>
          Remove
        </button>
      </div>);

    const value = this.state.isEditing ?
      <OneFieldForm
        handleSubmit={this.confirmButtonHandler}
        handleCancel={this.cancelButtonHandler}
        buttonText="OK"
        defaultValue={this.props.data.name}
        required
      />
      : this.props.data.name;

    return (
      <div>
        <div>
          <span>
            Name:&nbsp;
          </span>
          <span>
            {value}
          </span>
          {buttons}
        </div>

      </div>
    );
  }
}

Tale.propTypes = {
  editTale: PropTypes.func.isRequired,
  removeTale: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Tale;
