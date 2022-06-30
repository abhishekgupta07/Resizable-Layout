import React, { useEffect } from 'react'
import SplitPane from "react-split-pane";
import logo from "./logoo.png";
import Twogrid from './Twogrid';
let secondpane = "550px";
function Threegrid({ option, size,defaultSizepara2, onChangehandler2 }) {
    return (
        <div>
            <SplitPane split={option} defaultSize={defaultSizepara2} minSize={10} maxSize={secondpane} primary='first' onChange={onChangehandler2} >
                <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                {/* <SplitPane split={option} defaultSize={secondpane} minSize={8} maxSize={-5} primary='second' >
                    <div style={{ width: "auto", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></div>
                </SplitPane> */}

                <Twogrid option={option} 
                defaultSizepara={parseInt(localStorage.getItem('2v2'), 10)}
                onChangehandler={(size)=>{localStorage.setItem('2v2',size)}}
                 />
            </SplitPane>
        </div >
    )
}

export default Threegrid
