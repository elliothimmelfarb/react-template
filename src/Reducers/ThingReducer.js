import Types from '../Actions/Types';

const INITIAL_STATE = [];

const doThing = state =>
  state;

const ACTION_HANDLERS = {
  [Types.THING_DO]: doThing,
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
