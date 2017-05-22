import React, { Component } from 'react';
import { transform } from 'babel-standalone/babel';

class PagePreview extends Component {
  render() {
    var pageComponent = null
    try {
      var pageJSX = transform(this.props.code, { presets: ['react'] }).code
      pageComponent = eval(pageJSX)

      console.log(pageComponent)
    } catch (e) {
      console.log(e)
    }

    return <div id="page-preview">
      {pageComponent}
    </div>
  }
}

export default PagePreview;
