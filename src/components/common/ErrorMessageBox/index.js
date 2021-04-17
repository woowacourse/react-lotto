import React from "react";
import PropTypes from "prop-types";
import { Text } from "./style";

const ErrorMessageBox = ({ text }) => {
  return <Text>{text}</Text>;
};

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorMessageBox;
