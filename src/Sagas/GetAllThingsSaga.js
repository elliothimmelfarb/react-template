import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

export default (action) => {
  function* worker() {
    console.log('asdasdasd')
    yield put(Actions.requestAllThings(action.thing));
  }

  function* watcher() {
    for (;;) {
      console.log('things gotten')
      yield* takeEvery(Types.GET_ALL_THINGS, worker);
    }
  }

  return {
    watcher,
    worker,
  };
};
