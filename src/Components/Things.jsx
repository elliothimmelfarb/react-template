import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';
import ThingList from './ThingList';
import OneFieldForm from './OneFieldForm';

const Things = ({ createThing, editThing, removeThing, things }) => (
  <div>
    <ThingList things={things} removeThing={removeThing} editThing={editThing} />
    <OneFieldForm handleSubmit={createThing} buttonText="Add" required />
  </div>
);


const mapStateToProps = state => ({
  things: state.things,
});

const mapDispatchToProps = dispatch => ({
  removeThing: (thingId) => {
    dispatch(Actions.removeThing(thingId));
  },
  createThing: (thingName) => {
    dispatch(Actions.createThing(thingName));
  },
  editThing: (newThing) => {
    dispatch(Actions.editThing(newThing));
  },
});

Things.propTypes({
  createThing: PropTypes.func.required,
  editThing: PropTypes.func.required,
  removeThing: PropTypes.func.required,
  things: PropTypes.array.required,
});

export default connect(mapStateToProps, mapDispatchToProps)(Things);
