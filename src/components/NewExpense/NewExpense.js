import React, { useState } from "react";
import "./styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenseTag = function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function saveExpenseData(enteredExpenseData) {
    console.log("edcvfr");
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData); //to App.js
  }
  function startEditingHandler(one) {
    console.log(one);
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler(123)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpenseTag;
