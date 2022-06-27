import React from "react";
import "./style.css";
import SplitPane from "react-split-pane";
import logo from "./logoo.png";
export const Editor1 = () => {
  return (
    <div>

      <SplitPane split="vertical" defaultSize="500px" minSize={0} maxSize="100%" >        
          <SplitPane split="horizontal" width="50%" minSize={5} defaultSize="50%" maxSize="100%" >
          <div style={{backgorundwidth: "100%", height: "100%", backgroundColor: "white"}}>layout1 <img src={logo} alt="logo" width="auto" height="auto" /></div>
          <div style={{backgorundwidth: "100%", height: "100%",width: "100%" , backgroundColor: "#818589"}}>layout4 <img src={logo} alt="logo" width="auto" height="auto" /></div>
          </SplitPane>
        
      

        <SplitPane split="horizontal"  defaultSize="300px" minSize={-1} maxSize="33.3%">
          <div style={{width: "100%", height: "100%", backgroundColor: "#484848",}}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
          <SplitPane defaultSize="300px"  split="horizontal" minSize={5}>
          <div style={{width: "100%", height: "100%", backgroundColor: "#36454F",}}>layout5 <img src={logo} alt="logo" /></div>
          <div style={{width: "100%", height: "100%", backgroundColor: "#A0A0A0",}}>layout3<img src={logo} alt="logo" /></div>
          </SplitPane>
        </SplitPane>

      </SplitPane>
    </div>
  );
};
export default Editor1;
