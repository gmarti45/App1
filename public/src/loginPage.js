import React from 'react';
import '/Users/gmartine/Projects/SideProjects/App1/public/stylesheets/login.css'
const loginHtml = require('../login.html');

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div dangerouslySetInnerHTML={ {__html: loginHtml} } />
    );
  }
}

module.exports = Login;
