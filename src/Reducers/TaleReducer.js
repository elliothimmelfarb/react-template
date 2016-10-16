import Types from '../Actions/Types';

const INITIAL_STATE = [];

const getAllTalesSuccess = (state, action) =>
  action.tales || [];

const createTaleSuccess = (state, action) =>
  state.concat(action.tale);

const editTaleSuccess = (state, action) => {
  const newState = state.slice();
  const index = state.findIndex(el => el._id === action.tale._id);
  newState[index] = action.tale;
  return newState;
};

const removeTaleSuccess = (state, action) =>
  state.filter(el => el._id !== action.tale._id);

const ACTION_HANDLERS = {
  [Types.GET_ALL_TALES_SUCCESS]: getAllTalesSuccess,
  [Types.CREATE_TALE_SUCCESS]: createTaleSuccess,
  [Types.EDIT_TALE_SUCCESS]: editTaleSuccess,
  [Types.REMOVE_TALE_SUCCESS]: removeTaleSuccess,
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
