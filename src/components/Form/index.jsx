import React, { Component } from "react";

class Form extends Component {

  componentDidMount() {
    const upload = document.getElementById("upload");
    const btn = document.getElementById("btn");

    const handleUpload = () => {
      btn.addEventListener("click", () => {
        upload.click();
      });
    };
    handleUpload();
  }

  render() {
    return (
      <div className="upload-file">
        <input type="file" id="upload" accept=".xlsx, .xls" hidden />
        <button id="btn" onClick={this.handleUpload}>
          Upload file
        </button>
        <span id="custom-text">No file chosen</span>
      </div>
    );
  }
}

export default Form;


