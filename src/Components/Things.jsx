import React from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';

const Things = ({ getAllThings }) => (
  <div>
    <div>
      Things!
    </div>
    <button onClick={getAllThings}>
      get all
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  getAllThings: () => {
    dispatch(Actions.getAllThings());
  },
});


export default connect(null, mapDispatchToProps)(Things);
