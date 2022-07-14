import React, { Component } from "react";
import "./RightSideBar.scss";
import "bootstrap/dist/css/bootstrap.css";
// import { CgMenu } from "react-icons/cg";
import Dropdown from "react-bootstrap/Dropdown";

export class RightSideBar extends Component {
  arr = [
    "Sagittal view",
    "Axial view",
    "Select on launch",
    "Select on launch",
    "Select on launch",
  ];

  displayDropDown(content) {
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="transparent"
          id="padd"
          className="rounded-pill bg-light bg-opacity-25"
        >
          {content}
        </Dropdown.Toggle>
      </Dropdown>
    );
  }

  render() {
    return (
      <div
        style={{ display: "block", width: 250, padding: 30, float: "right" }}
      >
        <hr
          style={{
            width: "150px",
            height: "2px",
            borderRadius: "10px",
            color: "white",
          }}
        ></hr>
        {this.arr.map((item) => (
          <div className="button">
            {this.displayDropDown(item)}
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default RightSideBar;
