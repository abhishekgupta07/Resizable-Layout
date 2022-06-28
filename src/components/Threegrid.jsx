import React from 'react'
import SplitPane from "react-split-pane";
import logo from "./logoo.png";
import Twogrid from './Twogrid';
function Threegrid({ option,size }) {
    return (
        <div>
            <SplitPane split={option} defaultSize={size} minSize={0} maxSize="1000px" primary='first' >
                <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                {/* <SplitPane split={option} defaultSize="500px" minSize={0} maxSize="calc(1700px-1000px)" primary='second' >
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                </SplitPane> */}

                <Twogrid option={option} size={size} />
            </SplitPane>
        </div>
    )
}

export default Threegrid
