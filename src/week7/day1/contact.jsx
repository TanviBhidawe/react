import { useState } from "react";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function Submit() {
    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="page">
    <h1>Contact Us</h1>
      <p>Email : info@techcompany.com</p>
      <p>Phone : +91 9876543210</p>
      <p>Location : Pune, Maharashtra</p>

      <button onClick={() => setShowForm(true)}>
        Contact Now
      </button>

      {showForm && (
        <div className="contact-form">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input  type="email"  placeholder="Your Email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
         <textarea  rows="4"  placeholder="Your Message"  value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
         <button onClick={Submit}>  Send Message</button>
        </div>
      )}
    </div>
  );
}

export default Contact;