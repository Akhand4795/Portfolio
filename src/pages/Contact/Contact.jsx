import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ei9vwyx', 'template_crixb8x', form.current, 'f-rQv2GY54SiQD0Fx')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
      });

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section> */}

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
