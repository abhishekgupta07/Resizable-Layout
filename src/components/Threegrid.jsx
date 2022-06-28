import React from 'react'
import SplitPane from "react-split-pane";
import logo from "./logoo.png";
function Threegrid({ option }) {
    return (
        <div>
            <SplitPane split={option} defaultSize="200px" minSize={0} maxSize={-1520} primary='first' >
                <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                <SplitPane split={option} defaultSize="500px" minSize={0} maxSize="calc(1700px-1000px)" primary='second' >
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                </SplitPane>
            </SplitPane>
        </div>
    )
}

export default Threegrid
