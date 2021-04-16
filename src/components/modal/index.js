import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='modal-inner'>
          <h1>결과 확인하기</h1>
        </div>
        <div className='dimmer'></div>
      </>
    );
  }
}

export default Modal;
