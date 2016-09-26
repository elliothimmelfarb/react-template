import React from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions/Creators';

let style = {
  thingList: {
    border: '2px solid black',
  },
  thing: {
    color: 'red',
  },
}

const ThingList = ({ things, removeThing }) => {
  let thingElements = things.map(el =>
    (
      <div style={style.thing}>
        <a>
          {el.name}
        </a>
        <button onClick={() => removeThing(el._id)}>
          Remove
        </button>
      </div>
    )
  );

  return (
    <div>
      {thingElements}
    </div>
  );
}

export default ThingList;
