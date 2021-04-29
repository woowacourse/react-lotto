import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Message = styled.div`
  color: red;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.3rem 0 0 0;
  height: 1.2rem;
`;

const ErrorMessageBox = ({ text }) => {
  return <Message>{text}</Message>;
};

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ErrorMessageBox;
