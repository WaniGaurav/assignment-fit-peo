import React from "react";
import './dashProduct.css'
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import maze from "./Data/one.jpg";
import maze1 from "./Data/two.jpg";

const data = [
  {
    img: maze,
    title: "Abstract 3D",
    desc: "A collection of abstract shapes that look modern and unique.",
    val1: " 32 in stock",
    val2: "$ 45.99",
    val3: "20",
  },
  {
    img: maze1,
    title: "Sarphen Illustration",
    desc: "A collection of illustration that look modern and unique.",
    val1: "32 in stock",
    val2: "$ 45.99",
    val3: "20",
  },
  
];

function dashboardProduct() {
  return (
    <>
      <div className="dashboard-prod-container">
        <div className="flexClass mar-gap">
          <p className="product-headline">Products Sell</p>
          <div className="flexContainer">
            <div className="search-bar">
              <span className="search-span">
                <BsIcons.BsSearch />
              </span>
              <input
                className="input-search"
                type="search"
                name="Search"
                id=""
                placeholder="Search"
              />
            </div>
            <div className="">
              <select
                  className="overview-select"
                  name="range"
                >
                  <option value="quaterly">Last 30 days</option>
                  <option value="yearly">last 10 days</option>
                </select>
            </div>
          </div>
        </div>
        <div className="flexClass mar-sub">
          <p className="prod-desc">Products Name</p>
          <div className="sasles-money">
            <p>Stock</p>
            <p>Price</p>
            <p>Total Sales</p>
          </div>
        </div>
        <div className="">
          {data.map((values, i) => {
            return (
              <div key={i}>
                <div className="flexClass">
                  <div className="prod-flex">
                    <img
                      className="prod-img"
                      src={values.img}
                      alt="img1"
                    />
                    <div className="flexColCenter">
                      <p className="prod-title">{values.title}</p>
                      <p className="prod-desc">{values.desc}</p>
                    </div>
                  </div>
                  <div className="sasles-money-val">
                    <p className="">{values.val1}</p>
                    <p className="val2-bold">{values.val2}</p>
                    <p>{values.val3}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default dashboardProduct