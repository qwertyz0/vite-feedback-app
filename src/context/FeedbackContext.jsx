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
    fetchFeedback()
  }, []);



  //Fetch data from server
  const fetchFeedback = async () => {
    //sort by id using json server
    const response = await fetch(`/feedback?_sort=id&_order=desc`); //delete url, this is proxy in pakage.json
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

  // Update feedbackitem (functionality of submit button in form when editing text)
  const updateFeedback = async (idOfEdit, updItem) => {

    const response = await fetch(`/feedback/${idOfEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem)
    })

    const updData = response.json()

    setFeedback(
      feedback.map((item) =>
        item.id === idOfEdit ? { ...item, ...updData } : item
      )
    );
    // FIX: this fixes being able to add a feedback after editing
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    //function to delete feedback (used context)
    if (window.confirm("Are you sure to delete this feedback ?")) {
      //function to delete item on server side
      await fetch(`/feedback/${id}`, {
        method: 'DELETE'
      })
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add feedback
  const addFeedback = async (newFeedback) => {
    //creating post response for adding data to server
    const response = await fetch('/feedback', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback), //add body that add new comments and JSON.stringify transformation passsed object in json format
    })

    const data = await response.json() //new data like old "newFeedback"

    //newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]); // replace newFeedback on data
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
