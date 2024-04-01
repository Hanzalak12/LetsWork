// galleryActions.js
export const SET_FILTERS = 'SET_FILTERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters,
});

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item,
});

export const deleteItem = itemId => ({
  type: DELETE_ITEM,
  payload: itemId,
});
// galleryReducer.js