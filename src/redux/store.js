import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cardsReducer from './cardsReducer';
import appReducer from './appReducer';
import requestReducer from './requestReducer';

const reducers = combineReducers({
    cardsReducer,
    appReducer,
    requestReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;