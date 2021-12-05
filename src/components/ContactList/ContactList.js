import PropTypes from 'prop-types';
import React from 'react';
import ContactListItem from '../ContactListItem';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import { getVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const onDelete = id => dispatch(deleteContact(id));
  return (
    <ul className={s.contactList}>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.prototype = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
