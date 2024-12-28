import useBudget from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();
  const isEmpty = () => filteredExpenses.length === 0;
  const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses;

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
      {isEmpty() ? (
        <p className="text-gray-600 text-2xl font-bold">
          There are not expenses
        </p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Expense List
          </p>
          {filteredExpenses.map(expense => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}