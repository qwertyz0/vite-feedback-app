import { FaTimes } from "react-icons/fa"; //importing icons from modeure Font Awesome
import React, {useContext} from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ rating, text, id }) {

  const {deleteFeedback} = useContext(FeedbackContext)
  
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        onClick={() => deleteFeedback(id)} // передача id которое не будет возвращатся
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
