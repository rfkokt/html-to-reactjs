import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const className = ["button"];
  if (props.isPrimary) className.push("button-primary");
  if (props.isWideMobile) className.push("button-wide-mobile");
  if (props.isSmall) className.push("button-sm");
  if (props.isBlock) className.push("button-block");
  return <button className={className.join(" ")}>{props.children}</button>;
}

Button.PropTypes = {
  isPrimary: PropTypes.bool,
  isWideMobile: PropTypes.bool,
  isSmall: PropTypes.bool,
  isBlock: PropTypes.bool,
};
