
import React from 'react';


class Mailer extends React.Component {
  
  render() {
    return (
      <div className = "mailer">
      <p className = "mailer-heading">NEWSLETTER</p>
      <p className = "mailer-text"><input className = "mailer-input" placeholder = "Email"/> <button>Register!</button></p>

      </div>
    );
  }
}

export default Mailer;