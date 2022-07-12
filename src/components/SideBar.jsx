import React, { Component } from "react";
import "./sideBar.scss";
export class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttontype: 1,
    };
  }
  buttonhandler = (type) => {
    this.setState({
      buttontype: type,
    });
  };

  render() {
    console.log(this.state.buttontype);
    return (
      <div className="sidebarContainer sideBarButtons">
        <button
          className={this.state.buttontype === 0 ? "sideBarButtonsactive" : "sideBarButtonsnonactive"}
          onClick={() => this.buttonhandler(0)}
        >
          {" "}
          Report Driver
        </button>
        <br />
        <br />
        <button
          className={this.state.buttontype === 1 ? "sideBarButtonsactive" : "sideBarButtonsnonactive"}
          onClick={() => this.buttonhandler(1)}
        >
          {" "}
          Dicom Viewer
        </button>
        <br />
        <br />
        <button
          className={this.state.buttontype === 2?"sideBarButtonsactive" : "sideBarButtonsnonactive"}
          onClick={() => this.buttonhandler(2)}
        >
          {" "}
          Annotations
        </button>
        <br />
        <br />
        <button
          className={this.state.buttontype === 3 ? "sideBarButtonsactive" : "sideBarButtonsnonactive"}
          onClick={() => this.buttonhandler(3)}
        >
          {" "}
          Pathology list
          <br />
          &amp; reporting
        </button>
        <br />
        <br />
        <button
          className={this.state.buttontype === 4 ?"sideBarButtonsactive" : "sideBarButtonsnonactive"}
          onClick={() => this.buttonhandler(4)}
        >
          {" "}
          AI threshold
        </button>
        <br />
        <br />
        <button
          className={this.state.buttontype === 5 ? "sideBarButtonsactive" : "sideBarButtonsnonactive"}
          onClick={() => this.buttonhandler(5)}
        >
          {" "}
          Add Analysis
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default SideBar;
