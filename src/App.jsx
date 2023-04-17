import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom"; // HashRouter used for /#about
import Card from "./components/shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/Feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    //function to delete feedback (used props chain)
    if (window.confirm("Are you sure to delete this feedback ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    //console.log(newFeedback)
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbackStat={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/post/:id/:name" element={<Post />} /> */}
          <Route path="/post/*" element={<Post />} /> {/*add * for showing elements in /show after */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Card>
          //Create NavLink same as Link but with active class in link you are
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "none")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "none")}
            to="/about"
          >
            About
          </NavLink>
        </Card> */}
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
