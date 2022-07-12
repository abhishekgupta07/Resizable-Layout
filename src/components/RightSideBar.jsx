import React, { Component } from "react";
import "./RightSideBar.scss";
import "bootstrap/dist/css/bootstrap.css";

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
        <Dropdown.Toggle >{content}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">LINK 1</Dropdown.Item>
          <Dropdown.Item href="#">LINK 2</Dropdown.Item>
          <Dropdown.Item href="#">LINK 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  render() {
    return (
      <div
        style={{ display: "block", width: 250, padding: 30, float: "right" }}
      >
        {this.arr.map((item) => (
          <div className="button">
            {this.displayDropDown(item)}
            <br />
          </div>
        ))}

        {/* <div>{this.displayDropDown()}</div> */}
      </div>
    );
  }
}

export default RightSideBar;
