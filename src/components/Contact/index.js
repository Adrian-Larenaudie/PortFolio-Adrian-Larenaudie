import './style.scss';

const Contact = () => (
  <div id="contact" className="contact page">
    <h1
      className="page__background"
    >CONTACT
    </h1>
    <h1
      className="page__title"
      data-aos="fade"
      data-aos-delay="200"
      data-aos-duration="400"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >Pour me
      <span> contacter</span>
    </h1>
    <div className="formContainer">
      <form className="formContainer__form" action="https://formsubmit.co/adrian.larenaudie@gmail.com" method="POST">
        <textarea
          rows="10"
          className="formContainer__message"
          name="message"
          placeholder="Votre message"
          required
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="400"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        />
        <input
          className="formContainer__user-email"
          placeholder="Votre Email"
          type="email"
          name="email"
          required
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="400"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        />
        <input type="hidden" name="_next" value="http://localhost:8080/thanks" />
        <input type="hidden" name="_subject" value="New submission!" />
        <button
          className="formContainer__submit"
          type="submit"
          data-aos="flip-down"
          data-aos-delay="600"
          data-aos-duration="400"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >Envoyer
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
