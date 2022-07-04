import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'
import "./flexbox.scss"

export class Flexboxbuttons extends Component {
    constructor(props) {
      super(props);
      this.state = {
        gridnumber:1
      }
    }
    for1=()=>{
        this.setState({
            gridnumber:1
        })
        // alert("grid activated",this.state.gridnumber)
    }
    for2=()=>{  
        this.setState({
            gridnumber:2
        })
        // alert("grid activated",this.state.gridnumber)

    }
    for3=()=>{
        this.setState({
            gridnumber:3
        })
        // alert("grid activated",this.state.gridnumber)
    }
    for4=()=>{
        this.setState({
            gridnumber:4
        })
        // alert(this.state.gridnumber)
    }
    for5=()=>{
        this.setState({
            gridnumber:5
        })
        // alert(this.state.gridnumber)
    }
    for6=()=>{
        this.setState({
            gridnumber:6
        })
        // alert("grid activated",this.state.gridnumber)
    }
    render() {
        alert(this.state.gridnumber);
        return (
            <div className='container'>
                <div className='parent-container-flex'>
                    <div className='container-flex'>
                        <button type="button" class="parent-flex-item" id="button-1" onClick={this.for1}>
                            <div className='child-container-flex'>
                                <div class="child-flex-item1" id="flex-child"></div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-2" onClick={this.for2}>
                            <div className='child-container-flex'>
                                <div class="child-flex-item2" id="flex-child"></div>
                                <div class="child-flex-item2" id="flex-child"></div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-3" onClick={this.for3}>
                            <div className='child-container-flex'>
                                <div class="child-flex-item-3" id="flex-child"></div>
                                <div class="child-flex-item-3" id="flex-child"></div>
                                <div class="child-flex-item-3" id="flex-child"></div>
                            </div>
                        </button>
                    </div>
                    <div className='container-flex'>
                        <button class="parent-flex-item" id="button-4" onClick={this.for4}>
                            <div className='child-container-flex-4'>
                                <div class="child-flex-item4" >
                                    <div class="child-flex-item4-child" ></div>
                                    <div class="child-flex-item4-child" ></div>
                                </div>
                                <div class="child-flex-item4" >
                                    <div class="child-flex-item4-child" ></div>
                                    <div class="child-flex-item4-child" ></div>
                                </div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-5" onClick={this.for5}>
                            <div className='child-container-flex-4'>
                                <div class="child-flex-item4" >
                                    <div class="child-flex-item4-child" ></div>
                                    <div class="child-flex-item4-child" ></div>
                                </div>
                                <div class="child-flex-item4">
                                    <div class="child-flex-item5-child" ></div>
                                    <div class="child-flex-item5-child" ></div>
                                    <div class="child-flex-item5-child" ></div>
                                </div>
                            </div>
                        </button>
                        <button class="parent-flex-item" id="button-6" onClick={this.for6}>
                            <div className='child-container-flex-4'>
                                <div class="child-flex-item4" >
                                    <div class="child-flex-item5-child" ></div>
                                    <div class="child-flex-item5-child" ></div>
                                    <div class="child-flex-item5-child" ></div>
                                </div>
                                <div class="child-flex-item4" >
                                    <div class="child-flex-item5-child" ></div>
                                    <div class="child-flex-item5-child" ></div>
                                    <div class="child-flex-item5-child" ></div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Flexboxbuttons
