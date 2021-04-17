import React from "react";
import PropTypes from "prop-types";
import { Input, Switch, Text } from "./style";

const Toggle = ({ text, onToggle }) => {
  return (
    <Switch htmlFor="lotto-numbers-toggle">
      <Input type="checkbox" id="lotto-numbers-toggle" onChange={onToggle} />
      <Text>{text}</Text>
    </Switch>
  );
};

Toggle.propTypes = {
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;
