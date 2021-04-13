import { Component } from 'react';
import WinningNumberForm from './WinningNumberForm';

export default class WinningNumberSection extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <WinningNumberForm />
      </section>
    );
  }
}
