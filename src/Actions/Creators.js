import Types from './Types';

const getAllThings = () => ({
  type: Types.GET_ALL_THINGS,
});

const requestAllThings = () => ({
  type: Types.REQUEST_ALL_THINGS,
});

export default {
  getAllThings,
  requestAllThings,
};
