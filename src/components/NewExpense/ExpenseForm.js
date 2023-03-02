import React, { useState } from "react";
import "./styles/ExpenseForm.css";
function ExpensForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function titleChangeHandler(event) {
    //this event arugument is automatically passed for all listener functions
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  }
  //instead of calling useState multiple times, we can call it once like
  //   const [values, setEnteredValue] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  //   function titleChangeHandler(event) {
  //     setEnteredValue({
  //       ...values,
  //       //we Probably should not depend on prev state like this refer second func
  //       enteredTitle: event.target.value,
  //     });
  //   }
  //   function amountChangeHandler(event) {
  //     //when our state variables depend upon previous state, we should implement it like this
  //     //where prevState is built-in and should be an argument for a function that is inside
  //     //setEnteredValue function
  //     setEnteredValue((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredTitle: event.target.value,
  //       };
  //       //this method reduces the chances of getting state update error
  //     });
  //   }
  //   function dateChangeHandler(event) {
  //     setEnteredValue({
  //       enteredDate: event.target.value,
  //     });
  //   }

  function submitHandler(event) {
    //to NewExpense.js
    event.preventDefault(); //this prevents the default request sent by js to webserver . which
    //reloads the page once the form is submitted. we dont want that
    const formdata = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(formdata);
    props.onSaveExpenseData(formdata);
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredTitle("");
    props.onCancel();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //this is two-way binding, used to clear the data after form submission
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpensForm;
