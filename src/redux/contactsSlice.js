const INITIAL_STATE = {
  contacts: [],
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/add": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case "contacts/delete": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

const addContact = (payload) => {
  return {
    type: "contacts/add",
    payload,
  };
};

const deleteContact = (profileId) => {
  return {
    type: "contacts/delete",
    payload: profileId,
  };
};
