import React from 'react'
import './dashHead.css'
import * as BsIcons from "react-icons/bs";

function dashboardHeader() {
  return (
    <>
      <header className="header-container">
        <div className="">
          <h2 className="header-title">
            Hello Shahrukh <p className="hi-emoji">&#128075; ,</p>
          </h2>
        </div>
        <div className="head-serch-contnr">
          <span className="head-search">
            <BsIcons.BsSearch />
          </span>
          <input
            className="head-search-input"
            type="search"
            name="Search"
            id=""
            placeholder="Search"
          />
        </div>
      </header>
    </>
  )
}

export default dashboardHeader