import { createAction } from '@reduxjs/toolkit';
import shortId from 'shortid';

const addContact = createAction('contact/add', ({ name, number }) => {
  return {
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/changeFilter');

export default { addContact, deleteContact, changeFilter };
