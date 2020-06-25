import React, { Component } from "react";
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
        .slice(1)
        .map((line) => line.split(","));
      console.log(fileFormatted);
      // document.querySelector('.display-data').innerText = fileFormatted;
      this.setState({ data: fileFormatted });
    };
  };
  render() {
    return (
      <div className="upload-file">
        <input
          type="file"
          ref="fileUpload"
          accept=".xlsx, .xls, .csv"
          hidden
          onChange={this.handlefile}
        />
        <button id="btn" onClick={this.handleUpload}>
          Upload file
        </button>
        <div className="display-data">
          {this.state.data &&
            this.state.data.map((user) => {
              return (
                <>
                  <div className='data-display'>
                    <p>{user[1]} {user[2]} {user[3]} {user[4]}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Form;
