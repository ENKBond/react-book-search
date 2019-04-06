import React from "react";

export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" type="text" {...props} />
      </div>
    );
  }

  export function FormBtn(props) {
    return (
      <button {...props} style={{ marginLeft: 5 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }
  