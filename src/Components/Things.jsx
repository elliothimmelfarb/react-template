import React from 'react';
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

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

const mapDispatchToProps = (dispatch) => {
  return {
    getAllThings: () => {
      dispatch(Actions.getAllThings())
      console.log('heyyo') 
    },
  }
}

export default connect(null, mapDispatchToProps)(Things)
