import React from "react";
import Split from "react-split";
import "./style.css";
import SplitPane from "react-split-pane";
import logo from './logoo.png'
export const Editor1 = () => {
  return (
    <div>
      <SplitPane split="vertical" defaultSize="50%" minSize={0} maxSize="100%">
        <div  style={{ backgorundwidth: "100%", height: "100%", backgroundColor: "#202020" }}>
          layout1
          <img src={logo} alt="logo" />

        </div>

        <SplitPane
          split="horizontal"
          defaultSize="30%"
          minSize={0}
          maxSize="100%"
        >
          <div style={{ width: "100%", height: "100%",backgroundColor: "#484848"}}>
            layout2
            <SplitPane
            split="horizontal">
            <div style={{ width: "100%", height: "100%",backgroundColor: "white"}}>
            </div>
            </SplitPane>


          </div>

          <div style={{ width: "100%", height: "100%", backgroundColor: "#A0A0A0"}}>
            layout3
            <img src={logo} alt="logo" />
          </div>
        </SplitPane>
      </SplitPane>
    </div>
  );
};
export default Editor1;
