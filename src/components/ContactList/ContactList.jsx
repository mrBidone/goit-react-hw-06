import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul className={css.ContactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.ContactListItem} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
