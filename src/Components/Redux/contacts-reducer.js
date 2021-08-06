import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Davoria Paori', number: '123-56-89' },
    { id: 'id-6', name: 'Salvador Dali', number: '856-48-24' },
  ],
  {
    // [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.addContact]: (state, { payload }) => {
      const newContact = payload.name.toLowerCase();
      const savedContacts = state.find(
        contact => contact.name.toLowerCase() === newContact,
      );

      if (savedContacts) {
        alert(payload.name + ' is already in contacts.');
        return;
      }

      return [...state, payload];
    },

    [actions.deleteContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
);

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
