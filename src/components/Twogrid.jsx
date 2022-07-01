import React from 'react'
import SplitPane from "react-split-pane";
import logo from "./logoo.png";
function Twogrid({ option, size, defaultSizepara, onChangehandler}) {
    return (
        <div>
            <SplitPane split={option} defaultSize={defaultSizepara}
                onChange={onChangehandler} minSize={8} maxSize={2200} primary="first">
                <canvas style={{ width: "100%", height: "100%", backgroundColor: "rgb(61, 34, 78)", }}>layout2 <img src={logo} alt="logo" width="auto" height="auto" />h1</canvas>
                <canvas style={{ width: "100%", height: "100%", backgroundColor: "rgb(61, 34, 78)", }} >layout3 <img src={logo} alt="logo" width="auto" height="auto" />h2</canvas>
            </SplitPane>
        </div>
    )
}

export default Twogrid
