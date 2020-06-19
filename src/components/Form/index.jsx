import React, { Component } from "react";

class Form extends Component {

  state = {
    fileName: 'No file chosen yet'
  }
  handleUpload = () => {
    upload.click();
  };

  render() {
    return (
      <div className="upload-file">
        <input type="file" id="upload" accept=".xlsx, .xls" hidden />
        <button id="btn" onClick={this.handleUpload}>
          Upload file
        </button>
        <span id="custom-text">{this.state.fileName}</span>
      </div>
    );
  }
}

export default Form;
