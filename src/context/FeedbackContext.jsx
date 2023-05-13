import { createContext, useEffect, useState } from "react";
// context api for get access to all components without using props
// for state changes and etc.
// Need "Provider" for connect all components
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

/* wrap all components as children in App.jsx */
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true) //true until we make the request to server
  // delete hard coded feedback and will use API db
  const [feedback, setFeedback] = useState([]);

  // render data from server when app start
  useEffect(() => {
    fetchfeedback()
  }, []);

  //fetch data from server
  const fetchfeedback = async () => {
    //sort by id using json server
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data)
    setIsLoading(false)
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    //create state object for add edited item
    item: {},
    edit: false,
  });
  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  // update feedbackitem (functionality of submit button in form when editing text)
  const updateFeedback = (idOfEdit, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === idOfEdit ? { ...item, ...updItem } : item
      )
    );

    // FIX: this fixes being able to add a feedback after editing
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const deleteFeedback = (id) => {
    //function to delete feedback (used context)
    if (window.confirm("Are you sure to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  /*pass all states in value object "value={{...}}" */
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback, // feedback state
        deleteFeedback: deleteFeedback, // funnction to delete item
        addFeedback: addFeedback, // funnction to add item
        editFeedback: editFeedback, // funnction run when click edit
        feedbackEdit: feedbackEdit, // variable of state that hold item boolean
        updateFeedback: updateFeedback, // function update item
        isLoading: isLoading, //boolean loading data value
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
