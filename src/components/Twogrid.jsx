import React from 'react'
import SplitPane from "react-split-pane";
function Twogrid({ option, size, defaultSizepara, onChangehandler, minSizeG, maxSizeG}) {
    return (
        <div>
            <SplitPane split={option} defaultSize={defaultSizepara}
                onChange={onChangehandler} minSize={minSizeG} maxSize={maxSizeG} primary="second" size={size}>
                <canvas style={{ width: "100%", height: "100%", backgroundColor: "rgb(61, 34, 78)", }}>layout2 h1</canvas>
                <canvas style={{ width: "100%", height: "100%", backgroundColor: "rgb(61, 34, 78)", }} >layout3 h2</canvas>
            </SplitPane>
        </div>
    )
}

export default Twogrid
