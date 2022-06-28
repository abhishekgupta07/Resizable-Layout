import React from "react";
import "./style.css";
import Twogrid from "./Twogrid";
import Threegrid from "./Threegrid"
import SplitPane from "react-split-pane";
import Split from "react-split";
let option1="horizontal";
let option2="vertical";

export const Editor1 = (props) => {
  return (
    <div>
      {/* twogrids option */}
      {/* if(props==2){
       <Twogrid option={option2} /> 
      }*/}
      {/* threegrids option */}
      {/* {
         <Threegrid option={option2} /> 
      }  */}
      {/* props==4 */}
      {/* <SplitPane split={option2}  defaultSize="300px" minSize={-1} maxSize="33.3%">
     <Twogrid option={option2} /> 
     <Twogrid option={option1} /> 
      </SplitPane> */}

      {/* 5 count */}
      {/* <SplitPane split={option1}  defaultSize="300px" minSize={-1} maxSize="33.3%">
      <Twogrid option={option2} /> 
      <Threegrid option={option2} />
      </SplitPane> */}
      {/* 6 count */}
      {/* <SplitPane split={option1}  defaultSize="300px" minSize={-1} maxSize="33.3%">
      <Threegrid option={option2} />
      <Threegrid option={option2} />
      </SplitPane> */}

{/* 7 count */}
{/* <SplitPane split="horizontal">
<Threegrid/>
      <SplitPane>
        <div><Twogrid/></div>
        <div> <Twogrid/></div>
      </SplitPane>
      </SplitPane> */}

{/* 8 count */}
<SplitPane split="horizontal">

  <SplitPane>
    <div><Twogrid/></div>
    <div><Twogrid/></div>
  </SplitPane>
  <SplitPane>
    <div><Twogrid/></div>
    <div><Twogrid/></div>
  </SplitPane>
</SplitPane>


      {/* 9 count */}
      {/* <SplitPane split="horizontal">
        <Threegrid/>
        <SplitPane split="horizontal">
          <Threegrid/>
          <Threegrid/>
        </SplitPane>
      </SplitPane> */}

      {/* 10 count */}
           


    </div>
  );
};
export default Editor1;
