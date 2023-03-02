import React from "react";
//useState is a named import from react and is responsible for re-rendering a component when change occurs
import ExpenseDate from "./ExpenseDate";
import "./styles/ExpenseItem.css";
import Card from "../UI/Card";
//component in react is just a js function
//there must be one parent element for every component

//we use className instead of class in html
function ExpenseItem(props) {
  //parameter in every component has a object of all props

  //   const expenseDate = new Date(2021, 2, 28); //this is month march . month starts with 0
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 232.53;

  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();
  // state is configured with per-component basis
  // const [title /*setTitle*/, ,] = useState(props.title);
  // function clickHandler() {
  //   // convention to name handler functions ending with 'Handler'
  //   //useState is a react hook. all hooks must be called inside component functions
  //   //useState returns a variable passed and a function which can be called to change the value of passed value
  //   setTitle("Updated!!"); //this function will re-render the component in which this is called(call this instance of component again)
  // }

  return (
    //can only display string convertable types
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
  //all jsx event listener functions begin with on and takes in a function as attribute
  //we simply can't change jsx code dynamically, because its a function call
  //we can do that via state
}
export default ExpenseItem;
