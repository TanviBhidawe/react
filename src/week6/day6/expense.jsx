import { useEffect, useState } from "react";
import "./expense.css";
import ExpenseForm from "./expenseform";
import ExpenseList from "./expenselist";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchExpenses();
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  async function fetchExpenses() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const expenseData = data.products.slice(0, 10).map((item) => ({
        id: item.id,
        title: item.title,
        amount: item.price,
        category: item.category,
      }));

      setExpenses(expenseData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  function deleteExpense(id) {
    const updatedExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(updatedExpenses);
  }

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((item) => item.category === filter);

  const total = filteredExpenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <select
        className="all"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
      </select>

      <h2>Total Expense: ₹{total}</h2>

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default Expense;