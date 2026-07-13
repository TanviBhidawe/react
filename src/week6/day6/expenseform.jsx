import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("beauty");

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "" || amount === "") {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category,
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("beauty");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Expense Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select className="select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;