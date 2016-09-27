import React, { PropTypes } from 'react';
import OneFieldForm from './OneFieldForm';

class Thing extends React.Component {
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

  confirmButtonHandler(newThingName) {
    const newThing = Object.assign({}, this.props.data);
    newThing.name = newThingName;
    this.props.editThing(newThing);
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
    this.props.removeThing(this.props.data._id);
  }


  render() {
    const thingElement = [];

    this.props.data.keys.forEach((key) => {
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

      //  don't render mongo fields
      if (key !== '__v' && key !== '_id') {
        const val = this.props.data[key] && this.props.data[key].toString();
        const value = this.state.isEditing ?
          <OneFieldForm
            handleSubmit={this.confirmButtonHandler}
            handleCancel={this.cancelButtonHandler}
            buttonText="OK"
            defaultValue={val}
            required
          />
          : val;

        thingElement.push(
          (<div key={key}>
            <span>
              {key}:&nbsp;
            </span>
            <span>
              {value}
            </span>
            {buttons}
          </div>)
        );
      }
    });

    return (
      <div>
        {thingElement}
      </div>
    );
  }
}

Thing.propTypes({
  editThing: PropTypes.func.required,
  removeThing: PropTypes.func.required,
  data: PropTypes.object.required,
});

export default Thing;
