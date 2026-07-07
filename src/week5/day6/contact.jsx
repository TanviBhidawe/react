function Contact() {

  function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you for contacting me! I will get back to you soon.");
  }

  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p className="section-text">
        Feel free to contact me if you have any questions or opportunities.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          placeholder="Write your message"
          rows="5"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;