import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
// geoFire

export default (action) => {
  function* worker() {
    yield put(Actions.doThing(action.thing));
  }

  function* watcher() {
    for (;;) {
      yield* takeEvery(Types.THING_DO, worker);
    }
  }

  return {
    watcher,
    worker,
  };
};
