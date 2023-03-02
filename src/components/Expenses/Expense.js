import React, { useState } from "react";
import "./ExpenseItem";
// import ExpenseItem from "./ExpenseItem";
import "./styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  function YearFilter(year) {
    setSelectedYear(year);
    props.filteredYear(year);
  }
  const filteredData = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  //if we have an array of jsx elements, they would simply be rendered
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearFilter={YearFilter} //this is a controled component where two-way binding controls the
          defYear={selectedYear} //value of this component
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredData}></ExpensesChart>
        <ExpenseList expenses={filteredData}></ExpenseList>
        {/* {filteredData.length === 0 && <p>No content found</p>}
        {filteredData.length > 0 &&
          filteredData.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))} */}

        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
          //instead of statically rendering all ExpenseItem items, we can dynamically render n elements
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expense;
