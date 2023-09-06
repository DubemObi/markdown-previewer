import React from "react";
import "./Editor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faMaximize,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: entry,
      previewerMaximize: false,
      editorMaximize: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewerMaximize = this.handlePreviewerMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleEditorMaximize() {
    this.setState((state) => {
      if (state.editorMaximize) {
        return { editorMaximize: false };
      } else {
        return { editorMaximize: true };
      }
    });
  }
  handlePreviewerMaximize() {
    this.setState((state) => {
      if (state.previewerMaximize) {
        return { previewerMaximize: false };
      } else {
        return { previewerMaximize: true };
      }
    });
  }
  render() {
    // const display = marked.parse(this.state.input);
    // const display =
    if (this.state.editorMaximize) {
      return (
        <div>
          <div id="editor-title">
            <div>
              <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
              <h3>Editor</h3>
            </div>
            <FontAwesomeIcon
              icon={faUpRightAndDownLeftFromCenter}
              className=" maximize-icon"
              onClick={this.handleEditorMaximize}
            />
          </div>
          <textarea
            name=""
            id="editor"
            cols="80"
            rows="14"
            onChange={this.handleChange}
            style={{ height: "95vh" }}
            value={this.state.input}
          ></textarea>
        </div>
      );
    } else if (this.state.previewerMaximize) {
      return (
        <div>
          <div id="preview-title" style={{ marginTop: 0 }}>
            <div>
              <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />

              <h3>Previewer</h3>
            </div>
            <FontAwesomeIcon
              icon={faUpRightAndDownLeftFromCenter}
              className=" maximize-icon"
              onClick={this.handlePreviewerMaximize}
            />
          </div>

          <div id="preview">
            <div
              id="preview-content"
              dangerouslySetInnerHTML={{
                __html: marked.parse(this.state.input, {
                  gfm: true,
                  highlight: false,
                  tables: false,
                  breaks: true,
                  pedantic: false,
                  sanitize: true,
                  smartLists: true,
                  smartypants: false,
                  langPrefix: false,
                }),
              }}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="editor-title">
            <div>
              <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
              <h3>Editor</h3>
            </div>
            <FontAwesomeIcon
              icon={faMaximize}
              className=" maximize-icon"
              onClick={this.handleEditorMaximize}
            />
          </div>
          <textarea
            name=""
            id="editor"
            cols="80"
            rows="14"
            onChange={this.handleChange}
            value={this.state.input}
            spellCheck="false"
          ></textarea>
          <div id="preview-title">
            <div>
              <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />

              <h3>Previewer</h3>
            </div>
            <FontAwesomeIcon
              icon={faMaximize}
              className=" maximize-icon"
              onClick={this.handlePreviewerMaximize}
            />
          </div>

          <div id="preview-content">
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked.parse(this.state.input, {
                  gfm: true,
                  highlight: false,
                  tables: false,
                  breaks: true,
                  pedantic: false,
                  sanitize: true,
                  smartLists: true,
                  smartypants: false,
                  langPrefix: false,
                }),
              }}
            />
          </div>
        </div>
      );
    }
  }
}
export default Editor;

const entry = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
