import React, { Component } from "react";
import "./style.scss";

import Twogrid from "./Twogrid";
import Threegrid from "./Threegrid";
import SplitPane from "react-split-pane";
let option1 = "horizontal";
let option2 = "vertical";


function twogri() {
  return (
    <div>
      <Twogrid
        option={option2}
        defaultSizepara={parseInt(localStorage.getItem("2Grid1"), 10) || "50%"}
        onChangehandler={(size) => localStorage.setItem("2Grid1", size)}
        minSizeG={100}
        maxSizeG={2200}
      />
    </div>
  );
}
const threegri = () => {
  return (
    <Threegrid
      size="600px"
      option={option2}
      defaultSizepara2={parseInt(localStorage.getItem("3Grid1"), 10) || "33.3%"}
      onChangehandler2={(size) => localStorage.setItem("3Grid1", size)}
      onChangehandler={(size) => localStorage.setItem("3Grid2", size)}
      defaultSizepara={parseInt(localStorage.getItem("3Grid2"), 10) || "50%"}
      minSizeP1={100}
      maxSizeP1={2000}
    />
  );
};

class Editor1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Grid2_1: 
        parseInt(localStorage.getItem("Grid2_1")) || ((90 / 100) * 100+ "%"),
      Grid3_1: 
        JSON.parse(localStorage.getItem("Grid3_1")) || (50 / 100) * 100,
      Grid3_2: 
        JSON.parse(localStorage.getItem("Grid3_2")) || (50 / 100) * 100,
      Grid_4_H:
        JSON.parse(localStorage.getItem("Grid_4_H")) || (50 / 100) * 100,
      Grid_4_up:
        JSON.parse(localStorage.getItem("Grid_4_up")) || (50 / 100) * 100,
      Grid_4_Dn:
        JSON.parse(localStorage.getItem("Grid_4_Dn")) || (50 / 100) * 100,
      Grid_5_H:
        JSON.parse(localStorage.getItem("Grid_5_H")) || (50 / 100) * 100,
      Grid_5_Up1:
        JSON.parse(localStorage.getItem("Grid_5_Up1")) || (50 / 100) * 100,
      Grid_5_Dn1:
        JSON.parse(localStorage.getItem("Grid_5_Dn1")) || (50 / 100) * 100,
      Grid_5_Dn2:
        JSON.parse(localStorage.getItem("Grid_5_Dn2")) || (50 / 100) * 100,
      Grid_6_H:
        JSON.parse(localStorage.getItem("Grid_6_H")) || (50 / 100) * 100,
      Grid_6_Up1:
        JSON.parse(localStorage.getItem("Grid_6_Up1")) || (50 / 100) * 100,
      Grid_6_Up2:
        JSON.parse(localStorage.getItem("Grid_6_Up2")) || (50 / 100) * 100,
      Grid_6_Dn1:
        JSON.parse(localStorage.getItem("Grid_6_Dn1")) || (50 / 100) * 100,
      Grid_6_Dn2:
        JSON.parse(localStorage.getItem("Grid_6_Dn2")) || (50 / 100) * 100,
    };
  }
  clicksave = () => {
    alert("save changes");
    localStorage.setItem("Grid2_1", this.state.Grid2_1);
    localStorage.setItem("Grid3_1", this.state.Grid3_1);
    localStorage.setItem("Grid3_2", this.state.Grid3_2);
    localStorage.setItem("Grid_4_H", this.state.Grid_4_H);
    localStorage.setItem("Grid_4_up", this.state.Grid_4_up);
    localStorage.setItem("Grid_4_Dn", this.state.Grid_4_Dn);
    localStorage.setItem("Grid_5_H", this.state.Grid_5_H);
    localStorage.setItem("Grid_5_Up1", this.state.Grid_5_Up1);
    localStorage.setItem("Grid_5_Dn1", this.state.Grid_5_Dn1);
    localStorage.setItem("Grid_5_Dn2", this.state.Grid_5_Dn2);
    localStorage.setItem("Grid_6_H", this.state.Grid_6_H);
    localStorage.setItem("Grid_6_Up1", this.state.Grid_6_Up1);
    localStorage.setItem("Grid_6_Up2", this.state.Grid_6_Up2);
    localStorage.setItem("Grid_6_Dn1", this.state.Grid_6_Dn1);
    localStorage.setItem("Grid_6_Dn2", this.state.Grid_6_Dn2);
  };

  render() {
    const { num } = this.props;
    return (
      <div className="parentDiv" >
        <span style={{ fontSize: "17px", color:"lightgrey", paddingLeft:"12px" }}>Set Windows Orientation and View</span>
        <div className="xyz">
          {num === 2 ? (
            <Twogrid
              option={option2}
              defaultSizepara={parseInt(localStorage.getItem("Grid2_1"), 10)}
              size={parseInt(localStorage.getItem("Grid2_1"))}
              onChangehandler={(size) => {
                this.setState({
                  Grid2_1: size,
                });
              }}
              minSizeG={50}
              maxSizeG={780}
            />
          ) : num === 3 ? (
            <Threegrid
              option={option2}
              defaultSizepara2={
                this.state.Grid3_1
              }
              size={
                  this.state.Grid3_1
              }
              onChangehandler2={(size) => {
                this.setState({
                  Grid3_1: size,
                });
              }}
              defaultSizepara={parseInt(localStorage.getItem("Grid3_2"), 10)}
              size2={parseInt(localStorage.getItem("Grid3_2"))}
              onChangehandler={(size2) => {
                this.setState({
                  Grid3_2: size2,
                });
              }}
              minSizeP1={100}
              maxSizeP1={750}
              minSizeP12={70}
              maxSizeP12={700}
            />
          ) : num === 4 ? (
            <SplitPane
              split={option1}
              defaultSize={parseInt(localStorage.getItem("Grid_4_H"), 10)}
              size={parseInt(localStorage.getItem("Grid_4_H"))}
              onChange={(size) => {
                this.setState(
                  {
                    Grid_4_H: size,
                  },
                  () => this.forceUpdate()
                );
              }}
              minSize={20}
              maxSize={490}
            >
              <Twogrid
                option={option2}
                defaultSizepara={parseInt(
                  localStorage.getItem("Grid_4_up"),
                  10
                )}
                size={parseInt(localStorage.getItem("Grid_4_up"))}
                onChangehandler={(size) => {
                  this.setState(
                    {
                      Grid_4_up: size,
                    },
                    () => this.forceUpdate()
                  );
                }}
                minSizeG={50}
                maxSizeG={780}
              />
              <Twogrid
                option={option2}
                defaultSizepara={parseInt(
                  localStorage.getItem("Grid_4_Dn"),
                  10
                )}
                size={parseInt(localStorage.getItem("Grid_4_Dn"))}
                onChangehandler={(size) => {
                  this.setState(
                    {
                      Grid_4_Dn: size,
                    },
                    () => this.forceUpdate()
                  );
                }}
                minSizeG={100}
                maxSizeG={780}
              />
            </SplitPane>
          ) : num === 5 ? (
            <SplitPane
              split={option1}
              defaultSize={parseInt(localStorage.getItem("Grid_5_H"), 10)}
              size={parseInt(localStorage.getItem("Grid_5_H"))}
              onChange={(size) => {
                this.setState(
                  {
                    Grid_5_H: size,
                  },
                  () => this.forceUpdate()
                );
              }}
              minSize={20}
              maxSize={490}
            >
              <Twogrid
                option={option2}
                defaultSizepara={parseInt(
                  localStorage.getItem("Grid_5_Up1"),
                  10
                )}
                size={parseInt(localStorage.getItem("Grid_5_Up1"))}
                onChangehandler={(size) => {
                  this.setState(
                    {
                      Grid_5_Up1: size,
                    },
                    () => this.forceUpdate()
                  );
                }}
                minSizeG={50}
                maxSizeG={780}
              />
              <Threegrid
                option={option2}
                defaultSizepara2={parseInt(
                  localStorage.getItem("Grid_5_Dn1"),
                  10
                )}
                size={parseInt(localStorage.getItem("Grid_5_Dn1"))}
                onChangehandler2={(size) => {
                  this.setState(
                    {
                      Grid_5_Dn1: size,
                    },
                    () => this.forceUpdate()
                  );
                }}
                defaultSizepara={parseInt(
                  localStorage.getItem("Grid_5_Dn2"),
                  10
                )}
                size2={parseInt(localStorage.getItem("Grid_5_Dn2"))}
                onChangehandler={(size2) => {
                  this.setState(
                    {
                      Grid_5_Dn2: size2,
                    },
                    () => this.forceUpdate()
                  );
                }}
                minSizeP1={40}
                maxSizeP1={740}
                minSizeP12={50}
                maxSizeP12={740}
              />
            </SplitPane>
          ) : num === 6 ? (
            <SplitPane
              split={option1}
              defaultSize={parseInt(localStorage.getItem("Grid_6_H"), 10)}
              size={parseInt(localStorage.getItem("Grid_6_H"))}
              onChange={(size) => {
                this.setState({
                  Grid_6_H: size,
                });
              }}
              minSize={20}
              maxSize={490}
            >
              <Threegrid
                option={option2}
                defaultSizepara2={parseInt(
                  localStorage.getItem("Grid_6_Up1"),
                  10
                )}
                size={parseInt(localStorage.getItem("Grid_6_Up1"))}
                onChangehandler2={(size) => {
                  this.setState({
                    Grid_6_Up1: size,
                  });
                }}
                size2={parseInt(localStorage.getItem("Grid_6_Up2"))}
                onChangehandler={(size2) => {
                  this.setState({
                    Grid_6_Up2: size2,
                  });
                }}
                defaultSizepara={parseInt(
                  localStorage.getItem("Grid_6_Up2"),
                  10
                )}
                minSizeP1={50}
                maxSizeP1={700}
                minSizeP12={50}
                maxSizeP12={700}
              />

              <Threegrid
                defaultSizepara2={parseInt(
                  localStorage.getItem("Grid_6_Dn1"),
                  10
                )}
                size={parseInt(localStorage.getItem("Grid_6_Dn1"))}
                onChangehandler2={(size) =>
                  this.setState({
                    Grid_6_Dn1: size,
                  })
                }
                size2={parseInt(localStorage.getItem("Grid_6_Dn2"))}
                onChangehandler={(size2) => {
                  this.setState({
                    Grid_6_Dn2: size2,
                  });
                }}
                defaultSizepara={parseInt(
                  localStorage.getItem("Grid_6_Dn2"),
                  10
                )}
                option={option2}
                minSizeP1={50}
                maxSizeP1={700}
                minSizeP12={50}
                maxSizeP12={700}
              />
            </SplitPane>
          ) : null}
        </div>
        <div>
          <button type="submit" onClick={() => this.clicksave()}>
            Save
          </button>

        </div>
        

      </div>
                

    );
  }
}
export default Editor1;
