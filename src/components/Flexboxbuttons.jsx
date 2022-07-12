import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import SideBar from "./SideBar";
import "./flexbox.scss";
import Editor1 from "./Editor1";
const flex = (b) => {
  let str = `child-flex-item${b}`;
  return <div className={str} id="flex-child"></div>;
};
const flexchild=(b)=>{
    let str1=`child-flex-item4-child`;
    let str2=`child-flex-item${b}`;
    return (
    <div className={str2}>
    <div className={str1}></div>
    <div className={str1}></div>
    </div>);
};
const flexdisplay = (a, b,option) => {
  const arr = [];
  if(option==="single"){
  for (let i = 0; i < a; i++) {
    arr.push(flex(b));
        }
    }
    else if(option==="nested"){
        for(let j=0;j<a;j++){
            arr.push(flexchild(b));
        }
    }
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
  clicksave = (gridnum) => {
    alert("save changes");
    // localStorage.setItem('gridnumber',gridnum);
  };
  render() {
    return (
      <div>
        <SideBar />
        <div className="container">
          <div className= "parent-container-flex">
            <button
              type="button"
              className={this.state.gridnumber===1?"active":"parent-flex-item"}
              id="button-1"
              onClick={() => this.changestate(1)}
            >
              <div className="child-container-flex">{flexdisplay(1, 1,"single")}</div>
            </button>
            <button
              className={this.state.gridnumber===2?"active":"parent-flex-item"}
              id="button-2"
              onClick={() => this.changestate(2)}
            >
              <div className="child-container-flex">{flexdisplay(2, 2,"single")}</div>
            </button>
            <button
              className={this.state.gridnumber===3?"active":"parent-flex-item"}
              id="button-3"
              onClick={() => this.changestate(3)}
            >
              <div className="child-container-flex">{flexdisplay(3, 3,"single")}</div>
            </button>
            <button
              className={this.state.gridnumber===4?"active":"parent-flex-item"}
              id="button-4"
              onClick={() => this.changestate(4)}
            >
              <div className="child-container-flex-4">
                {flexdisplay(2,4,"nested")}
              </div>
            </button>
            <button
              className={this.state.gridnumber===5?"active":"parent-flex-item"}
              id="button-5"
              onClick={() => this.changestate(5)}
            >
              <div className="child-container-flex-4">
                <div className="child-flex-item5">
                  <div className="child-flex-item4-child"></div>
                  <div className="child-flex-item4-child"></div>
                </div>
                <div className="child-flex-item5">
                  <div className="child-flex-item5-child"></div>
                  <div className="child-flex-item5-child"></div>
                  <div className="child-flex-item5-child"></div>
                </div>
              </div>
            </button>
            <button
              className={this.state.gridnumber===6?"active":"parent-flex-item"}
              id="button-6"
              onClick={() => this.changestate(6)}
            >
              <div className="child-container-flex-6">
                <div className="child-flex-item6">
                  <div className="child-flex-item6-child"></div>
                  <div className="child-flex-item6-child"></div>
                  <div className="child-flex-item6-child"></div>
                </div>
                <div class="child-flex-item6">
                  <div className="child-flex-item6-child"></div>
                  <div className="child-flex-item6-child"></div>
                  <div className="child-flex-item6-child"></div>
                </div>
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
