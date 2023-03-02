import React, { useState } from "react";
import "./components/Expenses/Expense";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

//if there exists an expression (a && b), if a is true, then js will return b

//Good practice to always have one component per file
//this is the rootcomponent //this is the topmost component in component tree and only
//component to get rendered first in html

//other components present in components folder are imported here and rendered inside this root
//component
const DUMMY_EXPENSES = [
  {
    id: "e1", //when we dont have keys, even if we try to add/remove one element, all elements are changed
    title: "Car Insurance",
    amount: 235.32,
    date: new Date(2021, 2, 2),
  },
  {
    id: "e2",
    title: "food",
    amount: 235.32,
    date: new Date(2021, 3, 25),
  },
  {
    id: "e3",
    title: "medicine",
    amount: 235.32,
    date: new Date(2021, 11, 5),
  },
  {
    id: "e4",
    title: "bike",
    amount: 235.32,
    date: new Date(2021, 6, 17),
  },
];

function App() {
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);
  function addExpenseHandler(expenseData) {
    setExpensesData((prevData) => {
      return [expenseData, ...prevData];
    });
    console.log(expensesData);
  }

  function addFilterHandler(yearValue) {
    console.log(yearValue);
  }

  return (
    //this is jsx syntax
    //our own components must start with uppercase

    <div>
      <NewExpense onSaveExpenseData={addExpenseHandler}></NewExpense>
      <Expense
        expenses={expensesData}
        filteredYear={addFilterHandler}
      ></Expense>
    </div>
  );
}
//just like how we can create our own custom tags, we can set props(properties) to our tags

export default App;
