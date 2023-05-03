import React, { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10); // pass throw props selected rating
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(""); // alert message to type more then 10 words

  const {
    addFeedback,
    feedbackEdit /*this is object with boolean*/,
    updateFeedback,
  } = useContext(FeedbackContext); // context hook for pass function in component

  useEffect(() => { // move editing text, reting to form field
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);// useEffect hook work when used feedbackEdit object

  /* logic for send button and input text */
  // got value from input and set it to text from useState hook.
  // use handleTextChange function in onChange atribute of input
  // use btnDisabled and message to change buttun disable and alert message
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      //.trim delete spaces between word
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };
  /* logic for send button and input text */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        // create object with data coming from form
        text: text,
        rating: rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback); //function from useContext to set new text and rating
      }

      setBtnDisabled(true);
      setRating(10);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
