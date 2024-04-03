import {React} from 'react'
import './dashCont.css'
import * as AiIcons from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import { Label, BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

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
  ];

  const data2 = [
    {
      name: "Jan",
      range : "2700",
      fill :"#d2ceed"
    },
    {
      name: "Feb",
      range : "1900",
      fill :"#d2ceed"
    },
    {
      name: "Mar",
      range : "3900",
      fill :"#d2ceed"
    },
    {
      name: "Apr",
      range : "2800",
      fill :"#d2ceed"
    },
    {
      name: "May",
      range : "3200",
      fill :"#d2ceed"
    },
    {
      name: "Jun",
      range : "1500",
      fill :"#d2ceed"
    },
    {
      name: "Jul",
      range : "3500",
      fill :"#d2ceed"
    },
    {
      name: "Aug",
      range : "4000",
      fill :"#513aef"
    },
    {
      name: "Sep",
      range : "3700",
      fill :"#d2ceed"
    },
    {
      name: "Oct",
      range : "3300",
      fill :"#d2ceed"
    },
    {
      name: "Nov",
      range : "3000",
      fill :"#d2ceed"
    },
    {
      name: "Dec",
      range : "3700",
      fill :"#d2ceed"
    },
    
  ];

  const data3 = [
    { name: "Group A", value: 600, outerRadius: 120, fill: "#bd2f6a" },
    { name: "Group B", value: 300, outerRadius: 90, fill: "#e8e4ed" },
    { name: "Group C", value: 300, outerRadius: 70, fill: "#6322a3" },
  ];

  return (
    <>
      <div className="dashboard-container">
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
          <div className="bar-container">
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
                <select
                  className="overview-select"
                  name="range"
                  id="range-select"
                >
                  <option value="quaterly">Quaterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data2}>
                <XAxis dataKey="name" tick={{ fontWeight: "bolder" }} />
                <Bar dataKey="range" radius={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-container">
            <div className="">
              <h2 className="">Customers</h2>
              <p className="">Customer that by products</p>
            </div>
            <ResponsiveContainer>
              <PieChart width={"99%"} height={300}>
                <Pie
                  data={data3}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={70}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data3.map((e, index) => (
                    <Cell key={index} fill={e.fill} />
                  ))}
                  {data3.map((e, index) => (
                    <Cell key={index} outerRadius={e.outerRadius} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="">
              65% <span className="">Total new customers</span>
            </p>
          </div>
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