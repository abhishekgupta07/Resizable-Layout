import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import SideBar from "./SideBar";
import "./flexbox.scss";
import Editor1 from "./Editor1";
const flex = (b, option) => {
  let str = "";
  if (option === "single") {
    str = `child-flex-item${b}`;
    return <div className={str} id="flex-child"></div>;
  } else if (option === "nested") {
    str = `child-flex-item${b}-child`;
    return <div className={str}></div>;
  }
};
const flexdisplay = (a, b, option) => {
  const arr = [];
  const arr1 = [];
  const arr2 = [];
  if (b < 4)
    for (let i = 0; i < a; i++) {
      arr.push(flex(b, option));
    }
  else if (b === 5) {
    for (let j = 0; j < 2; j++) {
      arr1.push(flex(b, option));
    }
    for (let j = 0; j < 3; j++) {
      arr2.push(flex(b, option));
    }
    for (let i = 0; i < 2; i++) {
      let str = `child-flex-item${b}`;
      if (i === 0) arr.push(<div className={str}>{arr1}</div>);
      if (i === 1) arr.push(<div className={str}>{arr2}</div>);
    }
  } else if (b >= 4 && b !== 5) {
    for (let j = 0; j < a; j++) {
      arr1.push(flex(b, option));
    }
    for (let i = 0; i < 2; i++) {
      let str = `child-flex-item${b}`;
      arr.push(<div className={str}>{arr1}</div>);
    }
  }
  console.log(arr);
  return arr;
};
export class Flexboxbuttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridnumber: JSON.parse(localStorage.getItem("gridnumber")) || 2,
    };
  }
  changestate = (gridnum) => {
    this.setState({
      gridnumber: gridnum,
    });
    localStorage.setItem("gridnumber", gridnum);
  };
  render() {
    return (
      <div>
        <SideBar />
        <div className="container">
          <div className="parent-container-flex">
            <button
              type="button"
              className={
                this.state.gridnumber === 1 ? "active" : "parent-flex-item"
              }
              id="button-1"
              onClick={() => this.changestate(1)}
            >
              <div className="child-container-flex">
                {flexdisplay(1, 1, "single")}
              </div>
            </button>
            <button
              className={
                this.state.gridnumber === 2 ? "active" : "parent-flex-item"
              }
              id="button-2"
              onClick={() => this.changestate(2)}
            >
              <div className="child-container-flex">
                {flexdisplay(2, 2, "single")}
              </div>
            </button>
            <button
              className={
                this.state.gridnumber === 3 ? "active" : "parent-flex-item"
              }
              id="button-3"
              onClick={() => this.changestate(3)}
            >
              <div className="child-container-flex">
                {flexdisplay(3, 3, "single")}
              </div>
            </button>
            <button
              className={
                this.state.gridnumber === 4 ? "active" : "parent-flex-item"
              }
              id="button-4"
              onClick={() => this.changestate(4)}
            >
              <div className="child-container-flex-4">
                {flexdisplay(2, 4, "nested")}
              </div>
            </button>
            <button
              className={
                this.state.gridnumber === 5 ? "active" : "parent-flex-item"
              }
              id="button-5"
              onClick={() => this.changestate(5)}
            >
              <div className="child-container-flex-5">
                {flexdisplay(2, 5, "nested")}
              </div>
            </button>
            <button
              className={
                this.state.gridnumber === 6 ? "active" : "parent-flex-item"
              }
              id="button-6"
              onClick={() => this.changestate(6)}
            >
              <div className="child-container-flex-6">
                {flexdisplay(3, 6, "nested")}
              </div>
            </button>
          </div>
        </div>
        <Editor1 num={this.state.gridnumber} />
      </div>
    );
  }
}

export default Flexboxbuttons;
