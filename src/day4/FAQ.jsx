import FAQItem from "./FAQItem";

function FAQ() {
const faqs = [
  {
    question: "1.What is React?",
    answer:
      "React is a JavaScript library used to build user interfaces. It helps developers create fast, interactive, and reusable web applications by breaking the UI into small components."
  },
  {
    question: "2.What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript, making React code easier to read and write. The browser cannot understand JSX directly, so it is converted into JavaScript."
  },
  {
    question: "3.What is a Component?",
    answer:
      "A component is a reusable piece of code that represents a part of the user interface. Components help organize the application into smaller, manageable sections, making the code easier to maintain."
  },
  {
    question: "4.What are Props in React?",
    answer:
      "Props are used to pass data from a parent component to a child component. They make components reusable because the same component can display different data based on the props it receives."
  },
  {
    question: "5.What is useState?",
    answer:
      "useState is a React Hook that allows a component to store and update data. When the state changes, React automatically updates the user interface without refreshing the page."
  },
  {
    question: "6.Why do we use React?",
    answer:
      "React is popular because it makes web development faster and more organized. It supports reusable components, efficient updates, and helps developers build responsive and interactive applications with less code."
  }
];

  return (
    <div>
      {faqs.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default FAQ;