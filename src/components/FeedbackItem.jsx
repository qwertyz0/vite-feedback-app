import { FaTimes } from "react-icons/fa"; //importing icons from modeure Font Awesome
import React, { useState } from "react";
import Card from "./shared/Card";

function FeedbackItem({ rating, text, handleDelete, id }) {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        onClick={() => handleDelete(id)} // передача id которое не будет возвращатся
        // в преобразованом массиве от .filter
        className="close"
      >
        <FaTimes color={"purple"} />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
