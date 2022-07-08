import React, { useEffect } from 'react'
import SplitPane from "react-split-pane";
import Twogrid from './Twogrid';
let secondpane = "550px";
function Threegrid({ option, size, defaultSizepara2, onChangehandler2,minSizeP1,maxSizeP1, defaultSizepara, onChangehandler,size2}) {
    return (
        <div>

            <SplitPane split={option} defaultSize={defaultSizepara2} minSize={minSizeP1} maxSize={maxSizeP1} primary='first' onChange={onChangehandler2} size={size}>
                <canvas style={{ width: "100%", height: "100%", backgroundColor: "rgb(61, 34, 78)", }}>layout2 </canvas>
                {/* <SplitPane split={option} defaultSize={defaultSizepara} minSize={8} maxSize={-5} primary='second' onChange={onChangehandler} >
                    <canvas style={{ width: "auto", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></canvas>
                    <canvas style={{ width: "100%", height: "100%", backgroundColor: "#484848", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" /></canvas>
                </SplitPane> */}
                <Twogrid option={option} 
                defaultSizepara={defaultSizepara}
                onChangehandler={onChangehandler}
                minSizeG={100}
                size={size2}
                 />
            </SplitPane>
            {/* </canvas> */}

        </div >
    )
}

export default Threegrid
