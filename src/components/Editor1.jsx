import React, { Component } from "react";
import "./style.scss";
import Twogrid from "./Twogrid";
import Threegrid from "./Threegrid";
import SplitPane from "react-split-pane";
import Split from "react-split";
import { grid } from "@mui/system";
let option1 = "horizontal";
let option2 = "vertical";

const data = [
  { a: 0, b: 2 },
  {a:1,b:1},
  {a:0, b:2}
];

const twogri = (gridValue) => {
  return (
    <Twogrid
      option={option2}
      defaultSizepara={parseInt(localStorage.getItem("2Grid1"), 10) || "50%"}
      onChangehandler={(size) => localStorage.setItem("2Grid1", size)}
      minSizeG={100}
      maxSizeG={2200}
    />
  );
};

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

const func2 = (a) => {
  let Arr1 = [];
  for (let i = 0; i < a; i++) {
    Arr1.push(twogri());
  }
  return Arr1;
};

const func3 = (b) => {
  let Arr2 = [];
  for (let j = 0; j < b; j++) {
    Arr2.push(threegri());
  }
  return Arr2;
};

class Editor1 extends Component {
  render() {
    return (
      <div>
        <div className="xyz">
          <SplitPane split="horizontal">
            {data.map(
              (item) => {
                console.log(item)
                const c = [];
                const a = func2(item.a);
                const b = func3(item.b);
                c.push(a, b);
                return c;
              }
            )}
          </SplitPane>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* {console.log(func2({ grid2: 1, grid3: 1 }))} */}
          {/* <SplitPane split="horizontal"> */}
          {/* {func2({ grid2: 1, grid3: 1 })} */}
          {/* {twogri()}
            {threegri()} */}
          {/* {func2({ grid2: 1, grid3: 1 })} */}
          {/* {func3(2)} */}

          {/* <SplitPane split="vertical"> */}
          {/* </SplitPane> */}
          {/* {components2.map(func2 =>( <div>{func2({gid2:1,grid3:1})}</div>))} */}
          {/* <SplitPane split="vertical">
          {components1.map(functns =>( <div>{functns}</div>))}
</SplitPane> */}
          {/* </SplitPane> */}

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* <SplitPane split="horizontal">
          {
          runcallback(()=>{
            const components1=[];
            for(let i=0;i<2;i++){
              components1.push(twogri());
            }
            return components1;
          })
          }

        {
          runcallback_2(()=>{
            let components2=[];
            for(let j=0;j<0;j++){
              components2.push(threegri());
            }
            return components2;
          })
        }
        
        </SplitPane> */}

          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* {num === 2 ? (
            <Twogrid
              option={option2}
              defaultSizepara={
                parseInt(localStorage.getItem("2Grid1"), 10) || "50%"
              }
              // onChangehandler={(size) => localStorage.setItem("2Grid1", size)}////////////////
              minSizeG={100}
              maxSizeG={2200}
            />
          ) : num === 3 ? (
            <Threegrid
              size="600px"
              option={option2}
              defaultSizepara2={
                parseInt(localStorage.getItem("3Grid1"), 10) || "33.3%"
              }
              onChangehandler2={(size) => localStorage.setItem("3Grid1", size)} /////////////////
              onChangehandler={(size) => localStorage.setItem("3Grid2", size)} ///////////////////
              defaultSizepara={
                parseInt(localStorage.getItem("3Grid2"), 10) || "50%"
              }
              minSizeP1={100}
              maxSizeP1={2000}
            />
          ) : num === 4 ? (
            <SplitPane
              split={option1}
              defaultSize={
                parseInt(localStorage.getItem("4GridH"), 10) || "50%"
              }
              onChange={(size) => localStorage.setItem("4GridH", size)} /////////////////////////////
              minSize={80}
              maxSize={1000}
            >
              <Twogrid
                option={option2}
                defaultSizepara={
                  parseInt(localStorage.getItem("4GridUp"), 10) || "50%"
                }
                onChangehandler={(size) =>
                  localStorage.setItem("4GridUp", size)
                } ///////////////////////
                minSizeG={100}
                maxSizeG={2200}
              />
              <Twogrid
                option={option2}
                defaultSizepara={
                  parseInt(localStorage.getItem("4GridDn"), 10) || "50%"
                }
                onChangehandler={(size) =>
                  localStorage.setItem("4GridDn", size)
                } ////////////////////////
                minSizeG={100}
                maxSizeG={2200}
              />
            </SplitPane>
          ) : num === 5 ? (
            <SplitPane
              split={option1}
              defaultSize={
                parseInt(localStorage.getItem("5GridH"), 10) || "50%"
              }
              onChange={(size) => localStorage.setItem("5GridH", size)} ////////////////////////////
              minSize={80}
              maxSize={1050}
            >
              <Twogrid
                option={option2}
                defaultSizepara={
                  parseInt(localStorage.getItem("5GridUp1"), 10) || "50%"
                }
                onChangehandler={(size) =>
                  localStorage.setItem("5GridUp1", size)
                } ///////////////////////////////
                minSizeG={100}
                maxSizeG={2200}
              />
              <Threegrid
                option={option2}
                defaultSizepara2={
                  parseInt(localStorage.getItem("5GridDn1"), 10) || "33.3%"
                }
                onChangehandler2={(size) =>
                  localStorage.setItem("5GridDn1", size)
                }
                onChangehandler={(size) =>
                  localStorage.setItem("5GridDn2", size)
                } /////////////////////////
                defaultSizepara={
                  parseInt(localStorage.getItem("5GridDn2"), 10) || "50%"
                }
                minSizeP1={100}
                maxSizeP1={2000}
              />
            </SplitPane>
          ) : num === 6 ? (
            <SplitPane
              split={option1}
              defaultSize={
                parseInt(localStorage.getItem("6GridH1"), 10) || "50%"
              }
              onChange={(size) => localStorage.setItem("6GridH1", size)} ////////////////////////////
              minSize={80}
              maxSize={1050}
            >
              <Threegrid
                option={option2}
                defaultSizepara2={
                  parseInt(localStorage.getItem("6GridUp1"), 10) || "33.3%"
                }
                onChangehandler2={
                  (size) => localStorage.setItem("6GridUp1", size) //////////////////////////////////
                }
                onChangehandler={(size) =>
                  localStorage.setItem("6GridUp2", size)
                } ///////////////////////
                defaultSizepara={
                  parseInt(localStorage.getItem("6GridUp2"), 10) || "50%"
                }
                minSizeP1={100}
                maxSizeP1={2000}
              />

              <Threegrid
                defaultSizepara2={
                  parseInt(localStorage.getItem("6GridDn1"), 10) || "33.3%"
                }
                onChangehandler2={
                  (size) => localStorage.setItem("6GridDn1", size) ////////////////////////
                }
                onChangehandler={(size) =>
                  localStorage.setItem("6GridDn2", size)
                } /////////////////////
                defaultSizepara={
                  parseInt(localStorage.getItem("6GridDn2"), 10) || "50%"
                }
                option={option2}
                minSizeP1={100}
                maxSizeP1={2000}
              />
            </SplitPane>
          ) : null} */}

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
          <button
            type="button"
            onClick={(e) => {
              localStorage.setItem("2Grid1", e);
              // console.log(e);
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default Editor1;
