import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactContainer from "../containers/ContactContainer";

const Contact = () => {
  ContactContainer();

  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactFAQ />

      <Footer />
    </>
  );
};

export default Contact;
