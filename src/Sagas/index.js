import { fork } from 'redux-saga/effects';
import Startup from './StartupSaga';
import GetAllTales from './GetAllTalesSaga';
import CreateTale from './CreateTaleSaga';
import EditTale from './EditTaleSaga';
import RemoveTale from './RemoveTaleSaga';

export default function* rootSaga() {
  yield fork(Startup);
  yield fork(GetAllTales);
  yield fork(CreateTale);
  yield fork(EditTale);
  yield fork(RemoveTale);
}
