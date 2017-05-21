import ace from 'brace';
import React, { Component } from 'react';
import PagePreview from './PagePreview';
import HTMLtoJSXConverter from 'htmltojsx';
import './Editor.css';

class Editor extends Component {

  componentDidMount() {
    this.editor = ace.edit(this.editorRef);
    this.editor.on('change', this.onChange);
    // this.converter = new HTMLtoJSXConverter({
    //   createClass: true,
    //   outputClassName: 'PageComponent'
    // })
  }

  onChange = () => {
    const pageHtml = this.editor.getValue()
    // const pageJSX = this.converter.convert(pageHtml)
    // console.log(pageJSX)
  }

  updateRef = (ref) => {
    this.editorRef = ref
  }

  render() {
    return (
      <div className="Editor">
        <div className="Editor-left-panel">
            <div id="editor" ref={this.updateRef}></div>
        </div>
        <div className="Editor-right-panel">
          <PagePreview></PagePreview>
        </div>
      </div>
    )
  }
}

export default Editor;
