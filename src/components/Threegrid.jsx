import React, { useEffect } from 'react'
import SplitPane from "react-split-pane";
import logo from "./logoo.png";
import Twogrid from './Twogrid';
let secondpane = "550px";
function Threegrid({ option, size, defaultSizepara2, onChangehandler2, defaultSizepara, onChangehandler }) {
    return (
        <div>
                  {/* <canvas id="abc" width="2200px" height= "1000px" style={{backgroundColor: "grey"}}> */}

            <SplitPane split={option} defaultSize={defaultSizepara2} minSize={10} maxSize={secondpane} primary='first' onChange={onChangehandler2} >
                <canvas style={{ width: "100%", height: "100%", backgroundColor: "gray", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></canvas>
                {/* <SplitPane split={option} defaultSize={defaultSizepara} minSize={8} maxSize={-5} primary='second' onChange={onChangehandler} >
                    <div style={{ width: "auto", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                </SplitPane> */}
                <Twogrid option={option} 
                defaultSizepara={defaultSizepara}
                onChangehandler={onChangehandler}
                 />
            </SplitPane>
            {/* </canvas> */}

        </div >
    )
}

export default Threegrid
