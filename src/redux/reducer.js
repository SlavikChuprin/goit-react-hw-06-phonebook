import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';

// const initialState = {
//   contacts: [{ name: '', number: '', id: '' }],
//   filter: '',
// };

const onAddContact = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, action) => state.contacts + action.payload,
  },
);

const onDeleteContact = createReducer([], {
  [deleteContact]: (state, action) => state.contacts + action.payload,
});

const onFilterContact = createReducer('', {
  [filterContact]: (state, action) => state.filter + action.payload,
});

const rootReducer = combineReducers({
  contact: onAddContact,
  deleteContact: onDeleteContact,
  filterContact: onFilterContact,
});

export default rootReducer;
