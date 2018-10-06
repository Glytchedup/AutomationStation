import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  // <span className="delete-btn" {...props}>
  //   O
  // </span>
  // <svg className="delete-btn" width = '2' height = '2' height {...props}>
  <svg className="delete-btn" width="20" height="20" viewBox="0 0 1024 1024" {...props}>
 <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
  </svg>
);

export default DeleteBtn;
