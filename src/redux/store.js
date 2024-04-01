// store.js
import { createStore, combineReducers } from 'redux';
import galleryReducer from './Gallery/reducer';

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

const store = createStore(rootReducer);

export default store;
