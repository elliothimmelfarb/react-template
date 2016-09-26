import React from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';

let style = {
  oneFieldForm: {
    backgroundColor: 'yellow',
  },
}

class OneFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    console.log('newVal',e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} style={style.oneFieldForm}>
        <input
          type="text"
          onChange={this.onInputChange}
        />
        <button>
          Add
        </button>
      </form>
    )
  }
}

export default  OneFieldForm;
