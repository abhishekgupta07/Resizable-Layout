import React, { Component } from 'react'
import "./sideBar.scss";
export class SideBar extends Component {
  render() {
    return (
      <div className='sidebarContainer sideBarButtons'>
      <button > Report Driver</button><br/><br/>
      <button> Dicom Viewer</button><br/><br/>
      <button> Annotations</button><br/><br/>
      <button> Pathology list<br/>&amp; reporting</button><br/><br/>
      <button> AI threshold</button><br/><br/>
      <button> Add Analysis</button><br/><br/>

      </div>
    )
  }
}

export default SideBar