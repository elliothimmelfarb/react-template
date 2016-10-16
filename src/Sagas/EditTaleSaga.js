import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import API from '../API';
import Actions from '../Actions/Creators';
import Types from '../Actions/Types';

function* worker(action) {
<<<<<<< HEAD:src/Sagas/EditTaleSaga.js
  const newTale = yield API.editOneTale(action.editedTale);
  yield put(Actions.editTaleSuccess(newTale));
=======
  console.log('bah',action.editedThing)
  const newThing = yield API.editOne(action.editedThing);
  yield put(Actions.editThingSuccess(newThing));
>>>>>>> 1c2a642183f4e96f1bd1976e7823ccdc327e1a2d:src/Sagas/EditThingSaga.js
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.EDIT_TALE, worker);
  }
}

export default watcher;
