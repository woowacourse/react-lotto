import React, { Component } from 'react';
import Styled from './PageTitle.style';

class PageTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Styled.PageTitle>{this.props.children}</Styled.PageTitle>;
  }
}

export default PageTitle;
