function ExpenseCard({ expense, deleteExpense }) {
  return (
    <div className="card">
      <div>
        <h3>{expense.title}</h3>
        <p>Amount: ₹{expense.amount}</p>
        <p>Category: {expense.category}</p>
      </div>

      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseCard;