import React from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';
import ThingList from './ThingList';
import OneFieldForm from './OneFieldForm';

const Things = ({ getAllThings, createThing, removeThing, things }) => (
  <div>
    <ThingList things={things} removeThing={removeThing} />
    <button onClick={getAllThings}>
      get all
    </button>
    <OneFieldForm handleSubmit={createThing} />
  </div>
);


const mapStateToProps = state => ({
  things: state.things,
});

const mapDispatchToProps = dispatch => ({
  getAllThings: () => {
    dispatch(Actions.getAllThings());
  },
  removeThing: (thingId) => {
    dispatch(Actions.removeThing(thingId));
  },
  createThing: (thingName) => {
    dispatch(Actions.createThing(thingName));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Things);
