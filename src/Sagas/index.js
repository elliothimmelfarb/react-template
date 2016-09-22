import { fork } from 'redux-saga/effects';
import ThingSaga from './ThingSaga';

export default function* rootSaga() {
  yield fork(ThingSaga);
}
