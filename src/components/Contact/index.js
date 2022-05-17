import './style.scss';

const Contact = () => (
  <div id="contact" className="contact page">
    <h1
      className="page__background"
      data-aos="fade-right"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >CONTACT
    </h1>
    <h1 className="page__title">Contact</h1>
    <div className="formContainer">
      <form action="https://formsubmit.co/adrian.larenaudie@gmail.com" method="POST">
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <input type="hidden" name="_next" value="http://localhost:8080/thanks" />
        <input type="hidden" name="_subject" value="New submission!" />
        <button type="submit">Envoyer le message</button>
      </form>
    </div>
  </div>
);

export default Contact;
