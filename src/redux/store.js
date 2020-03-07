import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cardsReducer from './cardsReducer';
import appReducer from './appReducer';
import requestReducer from './requestReducer';
import uiReducer from './uiReducer';

const reducers = combineReducers({
    cardsReducer,
    appReducer,
    requestReducer,
    uiReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;