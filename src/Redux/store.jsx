import {legacy_createStore, applyMiddleware} from 'redux'
import rootSaga from './Saga/index.jsx';
import rootReducer from "./Reducer/index"
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
export const store = legacy_createStore(rootReducer, 
    applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)