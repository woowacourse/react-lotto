import React from "react";
import PropTypes from "prop-types";
import { Text } from "./style";

const BoldText = ({ text }) => {
  return <Text>{text}</Text>;
};

BoldText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BoldText;
