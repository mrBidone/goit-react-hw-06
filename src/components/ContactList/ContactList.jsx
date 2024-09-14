import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.ContactList}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={css.ContactListItem} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={(contactId) => {
              dispatch(deleteContact(contactId));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
