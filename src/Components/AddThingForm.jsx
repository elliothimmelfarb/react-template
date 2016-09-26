import React from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';

let style = {
  addThingForm: {
    backgroundColor: 'yellow',
  },
}

class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      thingName: '',
    };
  }

  render() {
    return
    (
      <form onSubmit={createThing(this.state.thingName)} style={style.addThingForm}>
        <input
          type="text"
          onChange={onInputChange}
        />
      </form>
    )
  }
}

export default ThingList;
