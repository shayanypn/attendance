import React, { Component } from "react";

class Form extends Component {
  handleUpload = () => {
    upload.click();
  };

  render() {
    return (
      <div className="upload-file">
        <input type="file" id="upload" accept=".xlsx, .xls, .csv" hidden />
        <button id="btn" onClick={this.handleUpload}>
          Upload file
        </button>
      </div>
    );
  }
}

export default Form;
