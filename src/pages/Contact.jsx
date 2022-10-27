import { contactMethods } from "../data";
import { ContactMethod } from "../components";

const Contact = () => {
  return (
    <main className="md:container md:mx-auto p-4">
      <h2 className="text-2xl md:text-6xl font-bold font-poppins border-b-4 border-black my-2 md:my-6">
        Contact Me
      </h2>
      <div className="p-2">
        {contactMethods.map((contactData) => {
          return <ContactMethod {...contactData} key={contactData.id} />;
        })}
      </div>
    </main>
  );
};

export default Contact;
