import React, { Component } from "react";
import "./style.scss";
import Twogrid from "./Twogrid";
import Threegrid from "./Threegrid";
import SplitPane from "react-split-pane";
import Split from "react-split";
// import { parse } from "path";
let option1 = "horizontal";
let option2 = "vertical";
// let size = "100px";
// let count = "46";
const runcallback = (cb) => {
  return cb();
};
const runcallback_2 = (cb2) => {
  return cb2();
};
function twogri() {
  return (
    <div>
      <Twogrid
        option={option2}
        defaultSizepara={parseInt(localStorage.getItem("2Grid1"), 10) || "50%"}
        onChangehandler={(size) => localStorage.setItem("2Grid1", size)}
        minSizeG={100}
        maxSizeG={2200}
      />
    </div>
  );
}
const threegri = () => {
  return (
    <Threegrid
      size="600px"
      option={option2}
      defaultSizepara2={parseInt(localStorage.getItem("3Grid1"), 10) || "33.3%"}
      onChangehandler2={(size) => localStorage.setItem("3Grid1", size)}
      onChangehandler={(size) => localStorage.setItem("3Grid2", size)}
      defaultSizepara={parseInt(localStorage.getItem("3Grid2"), 10) || "50%"}
      minSizeP1={100}
      maxSizeP1={2000}
    />
  );
};
const sizes = [];

class Editor1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Grid2_1: JSON.parse(localStorage.getItem('Grid2_1')) || (50 / 100) * 100,
      Grid3_1: JSON.parse(localStorage.getItem('Grid3_1')) || (50 / 100) * 100,
      Grid3_2: JSON.parse(localStorage.getItem('Grid3_2')) || (50 / 100) * 100,
      Grid_4_H: JSON.parse(localStorage.getItem('Grid_4_H')) || (50 / 100) * 100,
      Grid_4_up: JSON.parse(localStorage.getItem('Grid_4_up')) || (50 / 100) * 100,
      Grid_4_Dn: JSON.parse(localStorage.getItem('Grid_4_Dn')) || (50 / 100) * 100,
      Grid_5_H: JSON.parse(localStorage.getItem('Grid_5_H')) || (50 / 100) * 100,
      Grid_5_Up1: JSON.parse(localStorage.getItem('Grid_5_Up1')) || (50 / 100) * 100,
      Grid_5_Dn1: JSON.parse(localStorage.getItem('Grid_5_Dn1')) || (50 / 100) * 100,
      Grid_5_Dn2: JSON.parse(localStorage.getItem('Grid_5_Dn2')) || (50 / 100) * 100,
      Grid_6_H: JSON.parse(localStorage.getItem('Grid_6_H')) || (50 / 100) * 100,
      Grid_6_Up1: JSON.parse(localStorage.getItem('Grid_6_Up1')) || (50 / 100) * 100,
      Grid_6_Up2: JSON.parse(localStorage.getItem('Grid_6_Up2')) || (50 / 100) * 100,
      Grid_6_Dn1: JSON.parse(localStorage.getItem('Grid_6_Dn1')) || (50 / 100) * 100,
      Grid_6_Dn2: JSON.parse(localStorage.getItem('Grid_6_Dn2')) || (50 / 100) * 100,
    }
  }
  clicksave = () => {
    alert("save changes");
    localStorage.setItem("Grid2_1", this.state.Grid2_1);
    localStorage.setItem("Grid3_1", this.state.Grid3_1);
    localStorage.setItem("Grid3_2", this.state.Grid3_2);
    localStorage.setItem("Grid_4_H", this.state.Grid_4_H);
    localStorage.setItem("Grid_4_up", this.state.Grid_4_up);
    localStorage.setItem("Grid_4_Dn", this.state.Grid_4_Dn);
    localStorage.setItem("Grid_5_H", this.state.Grid_5_H);
    localStorage.setItem("Grid_5_Up1", this.state.Grid_5_Up1);
    localStorage.setItem("Grid_5_Dn1", this.state.Grid_5_Dn1);
    localStorage.setItem("Grid_5_Dn2", this.state.Grid_5_Dn2);
    localStorage.setItem("Grid_6_H", this.state.Grid_6_H);
    localStorage.setItem("Grid_6_Up1", this.state.Grid_6_Up1);
    localStorage.setItem("Grid_6_Up2", this.state.Grid_6_Up2);
    localStorage.setItem("Grid_6_Dn1", this.state.Grid_6_Dn1);
    localStorage.setItem("Grid_6_Dn2", this.state.Grid_6_Dn2);
  }

  // componentDidUpdate() {
  //   this.forceUpdate();
  // }
  render() {
    // console.log(this.props);
    const { num } = this.props;
    // console.log(num);
    return (
      <div>
        <div className="xyz">
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* <SplitPane split="horizontal">
          {
          runcallback(()=>{
            const components1=[];
            for(let i=0;i<0;i++){
              components1.push(twogri());
            }
            return components1;
          })
          }

      <SplitPane split="vertical">
        {
          runcallback_2(()=>{
            let components2=[];
            for(let j=0;j<1;j++){
              components2.push(threegri());
            }
            return components2;
          })
        }
        
        </SplitPane>
        </SplitPane> */}
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {num === 2 ? (
            <Twogrid
              option={option2}
              defaultSizepara={
                parseInt(localStorage.getItem("Grid2_1"), 10)
              }
              size={parseInt(localStorage.getItem("Grid2_1"))}
              onChangehandler={(size) => {
                this.setState({
                  Grid2_1: size
                })
              }}
              minSizeG={100}
              maxSizeG={1200}
            />
          ) : num === 3 ? (
            <Threegrid
              option={option2}
              defaultSizepara2={
                parseInt(localStorage.getItem("Grid3_1"), 10)
              }
              size={parseInt(localStorage.getItem("Grid3_1"))}
              onChangehandler2={(size) => {
                this.setState({
                  Grid3_1: size
                })
              }}
              defaultSizepara={
                parseInt(localStorage.getItem("Grid3_2"), 10)
              }
              size2={parseInt(localStorage.getItem("Grid3_2"))}
              onChangehandler={(size2) => {
                this.setState({
                  Grid3_2: size2
                })
              }}
              minSizeP1={100}
              maxSizeP1={1100}
            />
          ) : num === 4 ? (
            <SplitPane
              split={option1}
              defaultSize={parseInt(localStorage.getItem("Grid_4_H"), 10)}
              size={parseInt(localStorage.getItem("Grid_4_H"))}
              onChange={(size) => {
                this.setState({
                  Grid_4_H: size
                }, () => this.forceUpdate())
              }}
              minSize={20}
              maxSize={490}
            >
              <Twogrid
                option={option2}
                defaultSizepara={
                  parseInt(localStorage.getItem("Grid_4_up"), 10)
                }
                size={parseInt(localStorage.getItem("Grid_4_up"))}
                onChangehandler={(size) => {
                  this.setState({
                    Grid_4_up: size
                  }, () => this.forceUpdate())
                }}
                minSizeG={100}
                maxSizeG={1200}
              />
              <Twogrid
                option={option2}
                defaultSizepara={
                  parseInt(localStorage.getItem("Grid_4_Dn"), 10)
                }
                size={parseInt(localStorage.getItem("Grid_4_Dn"))}
                onChangehandler={(size) => {
                  this.setState({
                    Grid_4_Dn: size
                  }, () => this.forceUpdate())
                }}
                minSizeG={100}
                maxSizeG={1200}
              />
            </SplitPane>
          ) : num === 5 ? (
            <SplitPane
              split={option1}
              defaultSize={parseInt(localStorage.getItem("Grid_5_H"), 10)}
              size={parseInt(localStorage.getItem("Grid_5_H"))}
              onChange={(size) => {
                this.setState({
                  Grid_5_H: size
                }, () => this.forceUpdate())
              }}
              minSize={20}
              maxSize={490}
            >
              <Twogrid
                option={option2}
                defaultSizepara={
                  parseInt(localStorage.getItem("Grid_5_Up1"), 10)
                }
                size={parseInt(localStorage.getItem("Grid_5_Up1"))}
                onChangehandler={(size) => {
                  this.setState({
                    Grid_5_Up1: size
                  }, () => this.forceUpdate())
                }}
                minSizeG={100}
                maxSizeG={1200}
              />
              <Threegrid
                option={option2}
                defaultSizepara2={
                  parseInt(localStorage.getItem("Grid_5_Dn1"), 10)
                }
                size={parseInt(localStorage.getItem("Grid_5_Dn1"))}
                onChangehandler2={(size) => {
                  this.setState({
                    Grid_5_Dn1: size
                  }, () => this.forceUpdate())
                }}
                defaultSizepara={
                  parseInt(localStorage.getItem("Grid_5_Dn2"), 10)
                }
                size2={parseInt(localStorage.getItem("Grid_5_Dn2"))}
                onChangehandler={(size2) => {
                  this.setState({
                    Grid_5_Dn2: size2
                  }, () => this.forceUpdate())
                }}

                minSizeP1={100}
                maxSizeP1={1200}
              />
            </SplitPane>
          ) : num === 6 ? (
            <SplitPane
              split={option1}
              defaultSize={parseInt(localStorage.getItem("Grid_6_H"), 10)}
              size={parseInt(localStorage.getItem("Grid_6_H"))}
              onChange={(size) => {
                this.setState({
                  Grid_6_H: size
                })
              }}
              minSize={20}
              maxSize={490}
            >
              <Threegrid
                option={option2}
                defaultSizepara2={
                  parseInt(localStorage.getItem("Grid_6_Up1"), 10)
                }
                size={parseInt(localStorage.getItem("Grid_6_Up1"))}
                onChangehandler2={(size) => {
                  this.setState({
                    Grid_6_Up1: size
                  })
                }}
                size2={parseInt(localStorage.getItem("Grid_6_Up2"))}
                onChangehandler={(size2) => {
                  this.setState({
                    Grid_6_Up2: size2
                  })
                }}
                defaultSizepara={
                  parseInt(localStorage.getItem("Grid_6_Up2"), 10)
                }
                minSizeP1={100}
                maxSizeP1={1150}
              />

              <Threegrid
                defaultSizepara2={
                  parseInt(localStorage.getItem("Grid_6_Dn1"), 10)
                }
                size={parseInt(localStorage.getItem("Grid_6_Dn1"))}
                onChangehandler2={(size) =>
                  this.setState({
                    Grid_6_Dn1: size
                  })
                }
                size2={parseInt(localStorage.getItem("Grid_6_Dn2"))}
                onChangehandler={(size2) => {
                  this.setState({
                    Grid_6_Dn2: size2
                  })
                }}
                defaultSizepara={
                  parseInt(localStorage.getItem("Grid_6_Dn2"), 10)
                }
                option={option2}
                minSizeP1={100}
                maxSizeP1={1150}
              />
            </SplitPane>
          ) : null}

          {/* twogrids option */}
          {/* if(props==2){ */}
          {/* <Twogrid 
        option={option2}
        defaultSizepara={parseInt(localStorage.getItem('2Grid1'), 10) || "50%"}
        onChangehandler={(size) => localStorage.setItem('2Grid1', size)}
        minSizeG={100} maxSizeG={2200}
      /> */}

          {/* threegrids option */}
          {/* {<Threegrid  size="600px" 
      option={option2} 
      defaultSizepara2={parseInt(localStorage.getItem('3Grid1'), 10) || "33.3%"}
      onChangehandler2={(size) => localStorage.setItem('3Grid1', size)}
      onChangehandler={(size) => localStorage.setItem('3Grid2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('3Grid2'), 10) || "50%"}
      minSizeP1={100} maxSizeP1={2000}
        />}  */}

          {/* props==4 */}
          {/* <SplitPane split={option1}  
      defaultSize={parseInt(localStorage.getItem('4GridH'), 10) || "50%"}
      onChange={(size) => localStorage.setItem('4GridH', size)} 
      minSize={80} maxSize={1000} 
      >
      <Twogrid 
      option={option2}
      defaultSizepara={parseInt(localStorage.getItem('4GridUp'), 10) || "50%" }
      onChangehandler={(size) => localStorage.setItem('4GridUp', size)}
      minSizeG={100}
      maxSizeG={2200}
      /> 
      <Twogrid  
      option={option2} 
      defaultSizepara={parseInt(localStorage.getItem('4GridDn'), 10) || "50%"}
      onChangehandler={(size) => localStorage.setItem('4GridDn', size)}
      minSizeG={100}
      maxSizeG={2200}
      /> 
      </SplitPane>       */}

          {/* 5 count */}
          {/* <SplitPane
          split={option1}
          defaultSize={parseInt(localStorage.getItem("5GridH"), 10) || "50%"}
          onChange={(size) => localStorage.setItem("5GridH", size)}
          minSize={80}
          maxSize={1050}
        >
          <Twogrid
            option={option2}
            defaultSizepara={
              parseInt(localStorage.getItem("5GridUp1"), 10) || "50%"
            }
            onChangehandler={(size) => localStorage.setItem("5GridUp1", size)}
            minSizeG={100}
            maxSizeG={2200}
          />
          <Threegrid
            option={option2}
            defaultSizepara2={
              parseInt(localStorage.getItem("5GridDn1"), 10) || "33.3%"
            }
            onChangehandler2={(size) => localStorage.setItem("5GridDn1", size)}
            onChangehandler={(size) => localStorage.setItem("5GridDn2", size)}
            defaultSizepara={
              parseInt(localStorage.getItem("5GridDn2"), 10) || "50%"
            }
            minSizeP1={100}
            maxSizeP1={2000}
          />
        </SplitPane> */}

          {/* 6 count */}
          {/* <SplitPane split={option1}  
      defaultSize={parseInt(localStorage.getItem('6GridH1') , 10) || "50%"}
      onChange={(size) => localStorage.setItem('6GridH1', size)} 
      minSize={80}
      maxSize={1050} >
      <Threegrid 
      option={option2}
      defaultSizepara2={parseInt(localStorage.getItem('6GridUp1'),10) || "33.3%"}
      onChangehandler2={(size) => localStorage.setItem('6GridUp1', size)}
      onChangehandler={(size) => localStorage.setItem('6GridUp2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('6GridUp2'), 10) || "50%"}
      minSizeP1={100}
      maxSizeP1={2000}
      />

      <Threegrid 
      defaultSizepara2={parseInt(localStorage.getItem('6GridDn1'), 10) || "33.3%"}
      onChangehandler2={(size) => localStorage.setItem('6GridDn1', size)}
      onChangehandler={(size) => localStorage.setItem('6GridDn2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('6GridDn2'), 10) || "50%"}
      option={option2}
      minSizeP1={100}
      maxSizeP1={2000} />

      </SplitPane> */}

          {/* ////////////////////////////////COMING SOON //////////////////////////////////////////// */}
          {/*    |    */}
          {/*   \./    */}
          {/* 7 count */}
          {/* <SplitPane split={option1}  defaultSize="350px" minSize={-1} maxSize="33.3%">
      <Threegrid 
      option={option2}
      defaultSizepara2={parseInt(localStorage.getItem('3g1'), 10)}
      onChangehandler2={(size) => localStorage.setItem('3g1', size)}
      onChangehandler={(size) => localStorage.setItem('3g2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('3g2'), 10)}
      />
      <SplitPane  defaultSize = {parseInt(localStorage.getItem('2v2'), 10)}
      onChange={(size) => localStorage.setItem('2V2', size)}  >
        <div>
          <Twogrid 
           option={option2}
           defaultSizepara={parseInt(localStorage.getItem('2v1'), 10)}
           onChangehandler={(size) => localStorage.setItem('2v1', size)}
         /></div>
        <div> 
        <Twogrid 
         option={option2}
         defaultSizepara={parseInt(localStorage.getItem('2v3'), 10)}
        onChangehandler={(size) => localStorage.setItem('2v3', size)} 
         />
          </div>
      </SplitPane>
      </SplitPane> */}
          {/* 8 count */}
          {/* <SplitPane split={option1} defaultSize="50%">
          <SplitPane defaultSize="50%">
            <div><Twogrid size="50%" option={option2}/></div>
            <div><Twogrid size="50%" option={option2}/></div>
          </SplitPane>
          <SplitPane defaultSize="50%">
            <div><Twogrid size="50%" option={option2}/></div>
            <div><Twogrid size="50%" option={option2}/></div>
          </SplitPane>
      </SplitPane> */}
          {/* 9 count */}
          {/* <SplitPane split="horizontal" defaultSize="33.3%">
        <Threegrid size="40.0%"/>
        <SplitPane split="horizontal" defaultSize="50.0%">
          <Threegrid size="40.0%"/>
          <Threegrid size="40.0%"/>
        </SplitPane>
      </SplitPane> */}
          {/* 10 count */}
          {/* <SplitPane split="horizontal" defaultSize="50.0%">
        <SplitPane split={option2} defaultSize="40.0%">
            <div><Twogrid option={option2}size="40.0%"/></div>
            <div><Threegrid option={option2}size="40.0%"/></div>
          </SplitPane>
          <SplitPane split={option2} defaultSize="40.0%">
            <div><Twogrid option={option2}size="40.0%"/></div>
            <div><Threegrid option={option2}size="40.0%"/></div>
          </SplitPane>
      </SplitPane> */}
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>
        <div>
          <button type="submit" onClick={() => this.clicksave()}>Save</button>
        </div>
      </div>
    );
  }
}
export default Editor1;