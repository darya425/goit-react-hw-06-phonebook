import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../Redux/contacts-actions';
import { getFilter } from '../ContactsList/ContactList-selectors';

import './Filter.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label className="filter">Find contact by name:</label>
      <input
        className="name_input"
        type="text"
        value={value}
        onChange={e =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
      />
    </>
  );
};

export default Filter;
