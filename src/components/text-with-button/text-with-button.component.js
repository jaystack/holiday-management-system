import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TextWithButton extends React.PureComponent {
  render() {
    return (
      <div><FontAwesomeIcon icon="check" className="fa-w-16 mr-2" /></div>
    );
  }
}
