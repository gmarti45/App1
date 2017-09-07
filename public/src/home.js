import React from 'react';
import '/Users/gmartine/Projects/SideProjects/App1/public/stylesheets/home.css'
const homeHtml = require('../home.html');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={ {__html: homeHtml} } />
    );
  }
}

module.exports = Home;