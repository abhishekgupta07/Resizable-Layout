import React, { Component } from "react";
import "./RightSideBar.scss";
import "bootstrap/dist/css/bootstrap.css";

import Dropdown from "react-bootstrap/Dropdown";

export class RightSideBar extends Component {
  render() {
    return (
      <div>
        
      <div style={{ display: "block", width: 700, padding: 30 , float:"right"}}>
        <Dropdown>
          <Dropdown.Toggle variant="success">ABCDE</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">LINK 1</Dropdown.Item>
            <Dropdown.Item href="#">LINK 2</Dropdown.Item>
            <Dropdown.Item href="#">LINK 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      </div>
    );
  }
}

export default RightSideBar;
