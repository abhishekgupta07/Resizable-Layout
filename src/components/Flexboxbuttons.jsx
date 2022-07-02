import React from 'react'
import "./flexbox.scss"
function Flexboxbuttons() {
    return (
        <div className='container'>
            <div className='parent-container-flex'>
                <div className='container-flex'>
                    <button type="button" class="parent-flex-item" id="flexchild-2-2" onClick={() => alert("button clicked")}>
                        <div className='child-container-flex'>
                            <div class="child-flex-item1" id="flex-child"></div>
                        </div>
                    </button>
                    <button class="parent-flex-item" id="flexchild-2-2" onClick={() => alert("button clicked")}>
                        <div className='child-container-flex'>
                            <div class="child-flex-item2" id="flex-child"></div>
                            <div class="child-flex-item2" id="flex-child"></div>
                        </div>
                    </button>
                    <button class="parent-flex-item" id="flexchild-2-2" onClick={() => alert("button clicked")}>
                        <div className='child-container-flex'>
                            <div class="child-flex-item-3" id="flex-child"></div>
                            <div class="child-flex-item-3" id="flex-child"></div>
                            <div class="child-flex-item-3" id="flex-child"></div>
                        </div>
                    </button>
                </div>
                <div className='container-flex'>
                    <button class="parent-flex-item" id="flexchild-2-2" onClick={() => alert("button clicked")}>
                        <div className='child-container-flex-4'>
                            <div class="child-flex-item4" >
                                <div class="child-flex-item4-child" ></div>
                                <div class="child-flex-item4-child" ></div>
                            </div>
                            <div class="child-flex-item4" >
                                <div class="child-flex-item4-child" ></div>
                                <div class="child-flex-item4-child" ></div>
                            </div>
                        </div>
                    </button>
                    <button class="parent-flex-item" id="flexchild-2-2" onClick={() => alert("button clicked")}>
                        <div className='child-container-flex-4'>
                            <div class="child-flex-item4" >
                                <div class="child-flex-item4-child" ></div>
                                <div class="child-flex-item4-child" ></div>
                            </div>
                            <div class="child-flex-item4">
                                <div class="child-flex-item5-child" ></div>
                                <div class="child-flex-item5-child" ></div>
                                <div class="child-flex-item5-child" ></div>
                            </div>
                        </div>
                    </button>
                    <button class="parent-flex-item" id="flexchild-2-2" onClick={() => alert("button clicked")}>
                        <div className='child-container-flex-4'>
                            <div class="child-flex-item4" >
                                <div class="child-flex-item5-child" ></div>
                                <div class="child-flex-item5-child" ></div>
                                <div class="child-flex-item5-child" ></div>
                            </div>
                            <div class="child-flex-item4" >
                                <div class="child-flex-item5-child" ></div>
                                <div class="child-flex-item5-child" ></div>
                                <div class="child-flex-item5-child" ></div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Flexboxbuttons
