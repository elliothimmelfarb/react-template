import { fork } from 'redux-saga/effects';
import GetAllThings from './GetAllThingsSaga';

export default function* rootSaga() {
  yield fork(GetAllThings);
}
