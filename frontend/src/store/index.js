// import {createStore,compose,combineReducers,applyMiddleware} from 'redux';

// import thunkMiddleware from 'redux-thunk';
// import { authReducer } from './reducers/authReducer';
// import {messengerReducer} from './reducers/messengerReducer';

// const rootReducer = combineReducers({
//      auth: authReducer,
//      messenger : messengerReducer
// })

// const middleware = [thunkMiddleware];

// const store = createStore(rootReducer,compose(applyMiddleware(...middleware),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 

// ));

// export default store;

import {authReducer} from './reducers/authReducer';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { messengerReducer } from './reducers/messengerReducer';

const rootReducer = combineReducers({
  auth:authReducer,
  messenger:messengerReducer
});

const middleware = [thunk];

const enhancers = [
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
].filter(Boolean); // Remove falsy values (e.g., if Redux DevTools Extension is not available)

const composedEnhancers = compose(...enhancers);

const store = createStore(
  rootReducer,
  composedEnhancers
);

export default store;