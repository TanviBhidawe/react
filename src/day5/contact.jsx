function Contact() {
  function sendMessage(e) {
    e.preventDefault();
     alert("Thank you for contacting us! We will get back to you soon.");
  }

  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <p className="section-text">Have any questions? We'd love to hear from you. </p>
      <form className="contact-form" onSubmit={sendMessage}>

        <input type="text" placeholder="Enter your name" required/>
       <input type="email" placeholder="Enter your email" required/>
       <textarea placeholder="Write your message" rows="3" required></textarea>
       <button type="submit">  Send Message</button>
       </form>
       </section>
  );
}

export default Contact;