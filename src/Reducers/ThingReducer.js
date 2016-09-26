import Types from '../Actions/Types';

const INITIAL_STATE = [];

const getAllThingsSuccess = (state, action) =>
  action.things || [];

const createThingSuccess = (state, action) => {
  state.concat(action.thing);
}

const removeThingSuccess = (state, action) =>
  state.filter(el => el._id == action.thing._id);

const ACTION_HANDLERS = {
  [Types.GET_ALL_THINGS_SUCCESS]: getAllThingsSuccess,
  [Types.CREATE_THING_SUCCESS]:createThingSuccess,
  [Types.REMOVE_THING_SUCCESS]: removeThingSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);


function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
