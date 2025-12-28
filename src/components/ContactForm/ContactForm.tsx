import style from "./ContactForm.module.scss";

interface ContactFormProps {
  className?: string | string[];
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const classes = ["contactForm"];

  if (className) {
    if (Array.isArray(className)) {
      classes.push(...className);
    } else {
      classes.push(className);
    }
  }

  return (
    <form
      className={`${style.contactForm} ${classes.join(" ")}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea rows={4} placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
