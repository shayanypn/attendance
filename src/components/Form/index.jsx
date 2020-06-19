import React, { Component } from "react";

class Form extends Component {

  state = {
    fileName: 'No file chosen yet'
  }
  handleUpload = () => {
    upload.click();
  };

  handleNameFile = (e) => {
    this.setState({fileName: e.target.value})
  }

  render() {
    return (
      <div className="upload-file">
        <input type="file" id="upload" accept=".xlsx, .xls" onChange={this.handleNameFile} hidden />
        <button id="btn" onClick={this.handleUpload}>
          Upload file
        </button>
        <span id="custom-text">{this.state.fileName}</span>
      </div>
    );
  }
}

export default Form;
