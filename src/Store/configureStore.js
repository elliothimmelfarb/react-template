import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers/';
import sagas from '../Sagas/';

const sagaMiddleware = createSagaMiddleware();

// a function which can create our store and auto-persist the data
export default () => {
  const enhancers = compose(
    applyMiddleware(sagaMiddleware)
  );

  const store = createStore(
    rootReducer,
    enhancers
  );

  sagaMiddleware.run(sagas);

  return store;
};
