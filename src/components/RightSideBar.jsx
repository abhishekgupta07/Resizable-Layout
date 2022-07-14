import React, { Component } from "react";
import "./RightSideBar.scss";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuidv4 } from "uuid";
import {BsArrowRight} from "react-icons/bs";
import {GrMenu} from "react-icons/gr";

const dropList = [
  "--Select--",
  "Sagittal view",
  "Axial view",
  "Select on launch",
  "Select on launch",
  "Select on launch",
  
];
export class RightSideBar extends Component {
  dropDownButton = (gridNumber) => {
    // let gridArray = [];
    // for (let i = 0; i < gridNumber; i++) {
    //   gridArray.push(i);
    // }
    // return (
    //   <>
    //     {gridArray?.map((ele) => (
    //       <select key={ele}>
    //         {dropList?.map((item) => (
    //           <option key={uuidv4()}> {item}</option> //uuid for unique "key" prop
    //         ))}
    //       </select>
    //     ))}
    //   </>
    // );

    const selectDrop = [];
    for (let i = 0; i < gridNumber; i++) {
      selectDrop.push(
        <div className="divA">
        {i+1} <BsArrowRight className="arrowIcon"/> <select key={i} className= "dropbtn">
          {dropList.map((item, index) => (
            <option key={"i" + index} className="dropbtnchoices"> {item}</option>
          ))}
        </select>
        </div>
        
      );
    }
    return selectDrop;
  };

  render() {
    const { gridNumber } = this.props;
    return (
      <div className="dropSide">
        <hr className="horizontalLine"></hr>
        
        {this.dropDownButton(gridNumber)}
      </div>
    );
  }
}

export default RightSideBar;
