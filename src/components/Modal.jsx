import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton';

export default class Modal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.handleDimmedClick = this.handleDimmedClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleDimmedClick(event) {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }

  handleKeyUp(event) {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  }

  componentDidMount() {
    this.ref.current.focus();
  }

  render() {
    return (
      <div
        className="modal fixed inset-0 flex w-full bg-black bg-opacity-50"
        role="presentation"
        tabIndex="-1"
        onKeyUp={this.handleKeyUp}
        onClick={this.handleDimmedClick}
        ref={this.ref}
      >
        <div className="modal-inner relative m-auto p-10 bg-white rounded-xl">
          <CloseButton onClick={this.props.onClose} />
          {this.props.children}
        </div>
      </div>
    );
  }
}
