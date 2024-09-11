import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import ContactsData from "./data/data.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts && JSON.parse(savedContacts).length > 0
      ? JSON.parse(savedContacts)
      : ContactsData;
  });

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = (e) => {
    const value = e.target.value;

    setFilterValue(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const onAddContact = (newContact) => {
    const finalContact = { ...newContact, id: nanoid() };

    setContacts([finalContact, ...contacts]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((finalContact) =>
      finalContact.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}

export default App;
