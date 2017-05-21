import ace from 'brace';
import React, { Component } from 'react';
import PagePreview from './PagePreview';
import './Editor.css';

class Editor extends Component {

  componentDidMount() {
    this.editor = ace.edit(this.editorRef);
    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setTheme('ace/theme/monokai');
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
