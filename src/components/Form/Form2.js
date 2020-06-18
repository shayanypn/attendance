import React from 'react'

const Form2 = () => {
    const fileInfo = (event) => {
      console.log(event.target.files[0]);
    };
    return (
      <div>
        <input
          type="file"
          id="upload2"
          accept=".xlsx, .xls"
          onChange={fileInfo}
        />
      </div>
    );
  };
  
  export default Form2;