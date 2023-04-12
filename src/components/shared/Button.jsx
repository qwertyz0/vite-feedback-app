import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  // use children prop for all shared components

  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  isDisabled: false,
  version: "primary",
  type: "button",
};

Button.propTyps = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
