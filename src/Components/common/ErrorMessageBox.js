import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Message = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 0;
`;

const ErrorMessageBox = ({ text }) => {
  return <Message>{text}</Message>;
};

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ErrorMessageBox;
