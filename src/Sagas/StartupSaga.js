import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

export default () => {
  function* worker() {
    yield put(Actions.requestAllThings());
  }

  function* watcher() {
    for (;;) {
      yield* takeEvery(Types.APP_STARTUP, worker);
    }
  }

  return {
    watcher,
    worker,
  };
};
