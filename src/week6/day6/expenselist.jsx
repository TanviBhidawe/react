import ExpenseCard from "./expensecard";

function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return <h2>No Expenses Found</h2>;
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          
        />
      ))}
    </div>
  );
}

export default ExpenseList;