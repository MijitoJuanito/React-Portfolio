import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";


 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tln4cr8',
     'template_0gufpe6'
     , form.current, 
     'H_tpyu8Pzia808sRl')

      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <div>
          <h2>
            Contact Me!
          </h2>
        </div>
        <div>
          <aside >
            Give me an email if there's any questions for myself and I will do my best to respond as soon as possible
          </aside>

        </div>
      <div className='ContactFormStyling'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
           <label>Email</label>
         <  input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
      </div>
      
    </div>
  )
};

export default Contact;
