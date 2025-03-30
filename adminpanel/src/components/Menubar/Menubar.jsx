import React from 'react'

const Menubar = ({toggleSidebar,
  sidebarVisible
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <button className="btn btn-primary" id="sidebarToggle" onClick={toggleSidebar}>
          <i className={`bi ${sidebarVisible ? 'bi-arrow-left' : 'bi-arrow-right'}`}></i>
        </button>
      </div>
    </nav>
  )
}

export default Menubar;