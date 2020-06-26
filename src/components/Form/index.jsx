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
      this.setState({ data: fileFormatted });
    };
  };

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

          <button id="btn" onClick={this.handleUpload} class="btn btn-primary">
            Upload file
          </button>
        </div>
        <div class="table-responsive-md">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
                <th scope="col">e-mail</th>
                <th scope="col">gender</th>
              </tr>
            </thead>
            {this.state.data &&
              this.state.data.map((user) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{user[0]}</th>
                      <th>{user[1]}</th>
                      <th>{user[2]}</th>
                      <th>{user[3]}</th>
                      <th>{user[4]}</th>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </>
    );
  }
}
export default Form;
