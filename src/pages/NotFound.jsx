import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404: Page not found !</h1>
      <div>
        <p>
          <Link to="/" className="text-link">Back to main page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
