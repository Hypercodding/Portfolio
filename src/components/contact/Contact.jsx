import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import ContactSVG from "./ContactSVG";

const ListVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 100,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_ID,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  const isInView = useInView(form, { margin: "-200px" });
  return (
    <div className="contact">
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={ListVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={ListVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>
          <motion.div variants={ListVariant} className="formItem">
            <label>Name</label>
            <input type="text" name="from_name" placeholder="Muhammad Hammad" />
          </motion.div>
          <motion.div variants={ListVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="hammadnawaz78186@gmail.com"
            />
          </motion.div>
          <motion.div variants={ListVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="from_message"
              placeholder="Write you message..."
            ></textarea>
          </motion.div>
          <motion.button variants={ListVariant} className="formButton">
            Send
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSVG />
      </div>
    </div>
  );
};

export default Contact;
