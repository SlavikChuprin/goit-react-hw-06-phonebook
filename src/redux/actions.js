import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contactForm/addContact');
export const deleteContact = createAction('contactForm/deleteContact');
export const filterContact = createAction('contactList/filterContact');
