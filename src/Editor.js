import ace from 'brace';
import React, { Component } from 'react';
import PagePreview from './PagePreview';
import './Editor.css'

class Editor extends Component {

  state = {
    code: ''
  }

  componentDidMount() {
    this.editor = ace.edit(this.editorRef);
    this.editor.on('change', this.onChange);
  }

  onChange = () => {
    this.setState({ code: this.editor.getValue() })
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
          <PagePreview code={this.state.code}></PagePreview>
        </div>
      </div>
    )
  }
}

export default Editor;
