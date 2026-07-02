import { useState } from "react";

function FAQItem({ question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <div className="faq">
      <button className="question" onClick={() => setShow(!show)} >{question} </button>
     {show && <div className="answer">{answer}</div>}
    </div>
  );
}

export default FAQItem;