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
      input: "",
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
    const display = marked.parse(this.state.input, {
      gfm: true,
      highlight: false,
      tables: false,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      langPrefix: false,
    });
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
            <MarkedPreview data={display} />
            {/* <div dangerouslySetInnerHTML={{ __html: display }} /> */}
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

          <div id="preview">
            <MarkedPreview data={display} />
            {/* <div dangerouslySetInnerHTML={{ __html: display }} /> */}
          </div>
        </div>
      );
    }
  }
}
export default Editor;

class MarkedPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="preview-content"
        dangerouslySetInnerHTML={{ __html: this.props.data }}
      />
    );
  }
}
