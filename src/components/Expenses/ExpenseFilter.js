import React from "react";
import "./styles/ExpensesFilter.css";
function ExpenseFilter(props) {
  function yearSelectHandler(event) {
    props.onYearFilter(event.target.value); //Expense.js
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearSelectHandler} value={props.defYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
