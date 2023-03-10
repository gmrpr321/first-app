import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./styles/ExpensesList.css";
function ExpensesList(props) {
  if (props.expenses.length === 0)
    return <h2 className="expenses-list__fallback">No Content here</h2>;
  else
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </ul>
    );
}
export default ExpensesList;
