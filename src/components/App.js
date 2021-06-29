import { useEffect } from "react";
import { connect } from "react-redux";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
