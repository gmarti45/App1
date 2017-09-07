import React from 'react';
import '/Users/gmartine/Projects/SideProjects/App1/public/stylesheets/login.css'
const notFoundHtml = require('../notFound.html');

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div dangerouslySetInnerHTML={ {__html: notFoundHtml} } />
    );
  }
}

module.exports = NotFound;
