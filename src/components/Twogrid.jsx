import React from 'react'
import SplitPane from "react-split-pane";
import logo from "./logoo.png";
function Twogrid({ option ,size}) {
    return (
        <div>
            <SplitPane split={option} defaultSize={size} minSize={0} maxSize="100%" primary= "first" >
                <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" />h1</div>
                <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" />h2</div>
            </SplitPane>
        </div>
    )
}

export default Twogrid
