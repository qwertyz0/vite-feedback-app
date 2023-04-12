import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) { // use children prop for all shared components
  return (
    //we can do conditional style className={`card ${reverse && 'reverse'}`}
    //for reverse in card className
    //<div className='card reverse'>{children}</div>

    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.3)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
