import React from 'react'
import './dashCont.css'
import * as AiIcons from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

function dashboardContent() {
  const data = [
    {
      svgImgColour:'green',
      svgImg:<AiIcons.AiOutlineDollarCircle />,
      tagName:'Earning',
      amount:'$198k',
      iconArrow:<BiIcons.BiUpArrowAlt />,
      iconArrowClass:'icon-arrow-up',
      percentAmount:'37.8%',
      month:'this month'
    },
    {
      svgImgColour:'violet',
      svgImg:<GrNotes />,
      tagName:'Orders',
      amount:'$2.4k',
      iconArrow:<BiIcons.BiDownArrowAlt />,
      iconArrowClass:'icon-arrow-down',
      percentAmount:'2%',
      month:'this month'
    },
    {
      svgImgColour:'blue',
      svgImg:<MdOutlineAccountBalanceWallet />,
      tagName:'Balance',
      amount:'$2.4k',
      iconArrow:<BiIcons.BiDownArrowAlt />,
      iconArrowClass:'icon-arrow-down',
      percentAmount:'2%',
      month:'this month'
    },
    {
      svgImgColour:'red',
      svgImg:<HiShoppingBag />,
      tagName:'Total Sales',
      amount:'$89k',
      iconArrow:<BiIcons.BiUpArrowAlt />,
      iconArrowClass:'icon-arrow-up',
      percentAmount:'11%',
      month:'this month'
    },
  ]
  return (
    <>
      <div className="card-container">
        {data.map((data, index) => {
          return (
            <div className="card-div" key={index}>
              <div className="card-img">
                <span
                  className="svg-img"
                  style={{ color: `${data.svgImgColour}` }}
                >
                  {data.svgImg}
                </span>
              </div>
              <div className="card-content">
                <div className="main-para">
                  <p className="tag-name">{data.tagName}</p>
                  <p className="amount">{data.amount}</p>
                  <div className="status">
                    <span className={`icon-arrow ${data.iconArrowClass}`}>
                      {data.iconArrow}
                    </span>
                    <span className={`percent-amount ${data.iconArrowClass}`}>
                      {data.percentAmount}&nbsp;
                    </span>
                    <span className="this-month">{data.month}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="graph-container">
        <div className="header-info">
          <div className="options">
            <div className="flex-row">
              <label htmlFor="range-select" className="title">
                Overview
              </label>
              <label htmlFor="range-select" className="sub-heading">
                Monthly Earning
              </label>
            </div>
            <select className="overview-select" name="range" id="range-select">
              <option value="quaterly">Quaterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="bar-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <XAxis dataKey="name" />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default dashboardContent
      // <div className='card-div'>
      //   <div className='card-img'>
      //     <span className="svg-img"><AiIcons.AiOutlineDollarCircle /></span>
      //   </div>
      //   <div className='card-content'>
      //     <div className='main-para'>
      //       <p className='tag-name'>Earning</p>
      //       <p className='amount'>$198k</p>
      //       <div className='status'>
      //         <span className='icon-arrow icon-arrow-up'><BiIcons.BiUpArrowAlt /></span>
      //         <span className="percent-amount icon-arrow-up">37.8%&nbsp;</span>
      //         <span className='this-month'>this month</span>
      //       </div>
      //     </div>
      //   </div>
      // </div>