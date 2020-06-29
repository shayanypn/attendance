import React, { Component } from "react";

const DisplayTable = (props) => {
    

  return (
    <div className="table-responsive-lg">
      <table className="table table-hover">
        <tbody>
          {props.data &&
            props.data.map((user) => {
              return (
                <tr>
                  {user.map((el) => {
                    return <th>{el}</th>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
