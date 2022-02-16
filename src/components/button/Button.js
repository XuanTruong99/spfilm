import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--small"];

const Button = ({
  children,
  buttonStyle,
  buttonSize,
  pathName,
  onClick,
  type,
}) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  return (
    <div className={type}>
      <Link to={pathName}>
        <button
          className={`${type} btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
