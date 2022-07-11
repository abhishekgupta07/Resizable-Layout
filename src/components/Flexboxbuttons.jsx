import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import SideBar from "./SideBar"
import RightSideBar from "./RightSideBar";
import "./flexbox.scss";
import Editor1 from "./Editor1";
export class Flexboxbuttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridnumber: JSON.parse(localStorage.getItem('gridnumber')) || 2
        };
    }
    changestate=(gridnum)=>{
        this.setState({
            gridnumber:gridnum
        })
        localStorage.setItem('gridnumber',gridnum);
    }
    clicksave=(gridnum)=>{
        alert("save changes");
        // localStorage.setItem('gridnumber',gridnum);
    }
    render() {
     return (
            <div>
                               <SideBar/>

                <div className="container">
                    <div className="parent-container-flex">
                        <button
                            type="button"
                            class="parent-flex-item"
                            id="button-1"
                            onClick={this.for1}
                        >
                            <div className="child-container-flex">
                                <div class="child-flex-item1" id="flex-child"></div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-2" onClick={()=>this.changestate(2)}>
                            <div className="child-container-flex">
                                <div class="child-flex-item2" id="flex-child"></div>
                                <div class="child-flex-item2" id="flex-child"></div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-3" onClick={()=>this.changestate(3)}>
                            <div className="child-container-flex">
                                <div class="child-flex-item-3" id="flex-child"></div>
                                <div class="child-flex-item-3" id="flex-child"></div>
                                <div class="child-flex-item-3" id="flex-child"></div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-5" onClick={()=>this.changestate(4)}>
                            <div className="child-container-flex-4">
                                <div class="child-flex-item4">
                                    <div class="child-flex-item4-child"></div>
                                    <div class="child-flex-item4-child"></div>
                                </div>
                                <div class="child-flex-item4">
                                    <div class="child-flex-item5-child"></div>
                                    <div class="child-flex-item5-child"></div>
                                </div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-5" onClick={()=>this.changestate(5)}>
                            <div className="child-container-flex-4">
                                <div class="child-flex-item4">
                                    <div class="child-flex-item4-child"></div>
                                    <div class="child-flex-item4-child"></div>
                                </div>
                                <div class="child-flex-item4">
                                    <div class="child-flex-item5-child"></div>
                                    <div class="child-flex-item5-child"></div>
                                    <div class="child-flex-item5-child"></div>
                                </div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-6" onClick={()=>this.changestate(6)}>
                            <div className="child-container-flex-4">
                                <div class="child-flex-item4">
                                    <div class="child-flex-item5-child"></div>
                                    <div class="child-flex-item5-child"></div>
                                    <div class="child-flex-item5-child"></div>
                                </div>
                                <div class="child-flex-item4">
                                    <div class="child-flex-item5-child"></div>
                                    <div class="child-flex-item5-child"></div>
                                    <div class="child-flex-item5-child"></div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <Editor1 num={this.state.gridnumber} />
                <RightSideBar/>
            </div>
        );
    }
}

export default Flexboxbuttons;
