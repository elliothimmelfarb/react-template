import Types from '../Actions/Types';

const INITIAL_STATE = [];

const requestAllThings = (state, action) =>
  state.concat(action.thing);


const ACTION_HANDLERS = {
  [Types.REQUEST_ALL_THINGS]: requestAllThings,
};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
