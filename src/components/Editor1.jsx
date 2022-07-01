import React from "react";
import "./style.scss";
import Twogrid from "./Twogrid";
import Threegrid from "./Threegrid";
import SplitPane from "react-split-pane";
import Split from "react-split";
let option1 = "horizontal";
let option2 = "vertical";
// let size = "600px";
export const Editor1 = () => {
  return (
<div>
  
        {/* twogrids option */}
      {/* if(props==2){ */}
      {/* <Twogrid 
        option={option2}
        defaultSizepara={parseInt(localStorage.getItem('2Grid1'), 10)}
        onChangehandler={(size) => localStorage.setItem('2Grid1', size)}
      /> */}



      {/* threegrids option */}
      {/* {<Threegrid  size="600px" 
      option={option2} 
      defaultSizepara2={parseInt(localStorage.getItem('3Grid1'), 10)}
      onChangehandler2={(size) => localStorage.setItem('3Grid1', size)}
      onChangehandler={(size) => localStorage.setItem('3Grid2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('3Grid2'), 10)}    
        />}  */}


      {/* props==4 */}
      <SplitPane split={option1}  defaultSize="300px" minSize={-1} maxSize="33.3%">
      <Twogrid 
      option={option2}
      defaultSizepara={parseInt(localStorage.getItem('4GridUp'), 10)}
      onChangehandler={(size) => localStorage.setItem('4GridUp', size)}
      /> 
      <Twogrid  
      option={option2} 
      defaultSizepara={parseInt(localStorage.getItem('4GridDn'), 10)}
      onChangehandler={(size) => localStorage.setItem('4GridDn', size)}
      /> 
      </SplitPane>      



      {/* 5 count */}
      {/* <SplitPane split={option1}  defaultSize="300px" minSize={-1} maxSize="33.3%">
      <Twogrid 
      option={option2} 
      defaultSizepara={parseInt(localStorage.getItem('5GridUp1'), 10)}
      onChangehandler={(size) => localStorage.setItem('5GridUp1', size)}
      /> 
      <Threegrid 
       option={option2} 
       defaultSizepara2={parseInt(localStorage.getItem('5GridDn1'), 10)}
       onChangehandler2={(size) => localStorage.setItem('5GridDn1', size)}
       onChangehandler={(size) => localStorage.setItem('5GridDn2', size)}      
       defaultSizepara={parseInt(localStorage.getItem('5GridDn2'), 10)}
    />
      </SplitPane> */}



      {/* 6 count */}
      <SplitPane split={option1}  defaultSize="350px" minSize={-1} maxSize="33.3%">
      <Threegrid 
      option={option2}
      defaultSizepara2={parseInt(localStorage.getItem('6GridUp1'),10)}
      onChangehandler2={(size) => localStorage.setItem('6GridUp1', size)}
      onChangehandler={(size) => localStorage.setItem('6GridUp2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('6GridUp2'), 10)}
      />

      <Threegrid 
      defaultSizepara2={parseInt(localStorage.getItem('6GridDn1'), 10)}
      onChangehandler2={(size) => localStorage.setItem('6GridDn1', size)}
      onChangehandler={(size) => localStorage.setItem('6GridDn2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('6GridDn2'), 10)}
      option={option2} />

      </SplitPane>






{/* ////////////////////////////////COMING SOON //////////////////////////////////////////// */}
                                  {/*    |    */}
                                  {/*   \./    */}
    



      {/* 7 count */}
      {/* <SplitPane split={option1}  defaultSize="350px" minSize={-1} maxSize="33.3%">
      <Threegrid 
      option={option2}
      defaultSizepara2={parseInt(localStorage.getItem('6GridUp1'),10)}
      onChangehandler2={(size) => localStorage.setItem('6GridUp1', size)}
      onChangehandler={(size) => localStorage.setItem('6GridUp2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('6GridUp2'), 10)}
      />

      <Threegrid 
      defaultSizepara2={parseInt(localStorage.getItem('6GridDn1'), 10)}
      onChangehandler2={(size) => localStorage.setItem('6GridDn1', size)}
      onChangehandler={(size) => localStorage.setItem('6GridDn2', size)}      
      defaultSizepara={parseInt(localStorage.getItem('6GridDn2'), 10)}
      option={option2} />

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
  );
};
export default Editor1;
