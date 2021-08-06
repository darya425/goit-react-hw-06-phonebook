import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../Redux/contacts-actions';
import { getVisibleContacts } from './ContactList-selectors';
import './ContactsList.scss';

import Contact from '../Contact';

const ContactsList = () => {
  const contactData = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className="list">
      {contactData.map(({ id, name, number }) => (
        <li className="item" key={id}>
          <Contact name={name} number={number} />
          <button
            className="btn"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
