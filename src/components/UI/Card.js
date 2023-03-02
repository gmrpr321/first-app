// we can have components that are built just to pass info between components

//inorder to use a component as a wrapper , we use props.children to accept
//content between our custom tags
import React from "react";
import "./styles/Card.css";
//way to dynamicallay insert classes for custom components
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
