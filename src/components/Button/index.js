import React from "react";

const Button = ({ type, size, title, icon, disabled, handleClick }) => {
  return (
    <button
      className={`btn btn-${type} ${size}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {icon && <i className={icon} />}
      {title && <span>{title}</span>}
    </button>
  );
};

export default Button;
