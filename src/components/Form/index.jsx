import React, { Component } from "react";
import DisplayTable from "./DisplatTable";

class Form extends Component {
  state = {
    data: null,
  };

  handleUpload = () => {
    this.refs.fileUpload.click();
  };

  handlefile = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = (e) => {
      let fileToDisplay = e.target.result;
      let fileFormatted = fileToDisplay
        .split("\n")
        .map((line) => line.split(","));
      console.log(fileFormatted);
      this.setState({ data: fileFormatted });
    };
  };

  handleDisplayData = () => {};

  render() {
    return (
      <>
        <div className="form-group">
          <input
            type="file"
            ref="fileUpload"
            accept=".xlsx, .xls, .csv"
            hidden
            onChange={this.handlefile}
            className="form-control-file"
          />
          <button
            id="btn"
            onClick={this.handleUpload}
            className="btn btn-primary"
          >
            Upload file
          </button>
        </div>
        <DisplayTable data={this.handleDisplayData} />
      </>
    );
  }
}
export default Form;
