import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import"./dashboard.css"
import "./local.css"


import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// pics
import flag1 from './../../img/united-states-of-america.png'
import flag2 from './../../img/germany.png'
import flag3 from './../../img/australia.png'
import flag4 from './../../img/united-kingdom.png'
import flag5 from './../../img/romania.png'
import flag6 from './../../img/brazil.png'

const percentage = 30;
const Dashboard = ()=>{
  return(
    <div className="col-12 m-0 row justify-content-center " id="dashboard">
<div className='row   justify-content-center'>

<Items/>

<div className="col-11 row m-0  p-0 col-lg-10 justify-content-around">
<Progressbar/>
  <Projects/>
</div>
<div className="col-11 m-0 row p-0  col-lg-10  mt-3 justify-content-around ">
<Messages/>
<DemoCarousel/>
</div>
<div className='col-11 m-0 row col-lg-10   mt-3 justify-content-around 'id='worldmap'>
  <Table/>
<MapChart/>
</div>
</div>
    </div>
  )
}



// **************************************
// items 

function Items(){
  const state = [
    {
      price:"$12.34",
      percent:3.5,
      name:"Potential growth",
      icon:'bi bi-arrow-up-right-square'
    },
    {
      price:"$17.34",
      percent:11,
      name:"Revenue current",
      icon:'bi bi-arrow-up-right-square'
    },
    {
      price:"$12.34",
      percent:-2.4,
      name:"Daily Income",
      icon:'bi bi-arrow-down-left-square'
    },
    {
      price:"$31.53",
      percent:3.5,
      name:"Expense current",
      icon:'bi bi-arrow-up-right-square'
    }
  ]


return(
  <section id="items" className="row m-0   p-0 col-lg-12  justify-content-center">
{
  state.map(item=>{
    return(
      <div className="row m-0 ">
        <p className="col-8 h-100 justify-content-center row p-0 m-0 align-items-center">
          <h4 className="col-8">{item.price}</h4>
       <span className=" d-flex  justify-content-end col-4">%{item.percent}</span>
       <span className="d-flex col-12">{item.name}</span>
        </p>
        <span className="d-flex col-4 justify-content-center align-items-center h-100"><i className={item.icon}></i></span>
      </div>
    )
  })
}
  </section>
)

}


// **************************************

// progress bar
function Progressbar(){
  return(
    <section className="col-12 col-lg-4 row m-0 justify-content-center mb-4 mb-lg-0" id='progress'>
<h3 className=' col-12 text-white mt-2 p-0 '>Transaction History</h3>
<div className='col-10'>

      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "green",
          trailColor: "gold"
        })}
      />
   
</div>
<div className='col-12'>
<section className='row'>
 <p className='col-9'>
  <h6 className='text-white'>Transfer to Paypal</h6>
  <span className='text-secondary'>07 Jan 2019, 09:12AM</span>
  </p>
  <h6 className='col-3 text-white'>$236</h6>
</section>
<section className='row'>
 <p className='col-9'>
  <h6 className='text-white'>Tranfer to Stripe</h6>
  <span className='text-secondary'>07 Jan 2019, 09:12AM</span>
  </p>
  <h6 className='col-3 text-white'>$535</h6>
</section>

</div>
    </section>
  )
}




// **************************************

// projects
function Projects(){
const state = [
  {
    icon:"bi bi-file-earmark",
    title:"Admin dashboard design",
    subtitle:"Broadcast web app mockup",
    time:"15 minutes ago",
    tasks:"30 tasks, 5 issues"
  },
  {
    icon:"bi bi-cloud-arrow-down-fill",
    title:"Wordpress Development",
    subtitle:"Upload new design",
    time:"1 hour ago",
    tasks:"23 tasks, 5 issues"
  },
  {
    icon:"bi bi-clock",
    title:"Project meeting",
    subtitle:"New project discussion",
    time:"35 minutes ago",
    tasks:"15 tasks, 2 issues"
  },
  {
    icon:"bi bi-envelope-open",
    title:"Broadcast Mail",
    subtitle:"Sent release details to team",
    time:"55 minutes ago",
    tasks:"35 tasks, 7 issues"
  },
  {
    icon:"bi bi-circle-square",
    title:"UI Design",
    subtitle:"New application planning",
    time:"50 minutes ago",
    tasks:"27 tasks, 4 issues"
  },

]




  return(
<section id="projects" className="   col-12 col-lg-8">
  <div className="d-flex justify-content-around align-items-center mb-2">
    <h4 className="col-sm-6 col-lg-7  h-100 p-0 m-0 d-flex align-items-center text-white">Open Projects</h4>
    <span className="col-6 col-lg-3 text-secondary d-none d-sm-flex">Your data status</span>
  </div>
  <ul className="m-0 p-0">
    {
  state.map(item=>{
    return(
      <li className="row m-0  justify-content-between">

<div className="d-flex  col-12 col-lg-8">
  <span className=" d-flex col "><i className={item.icon}></i></span>
  <p className="col-9 ">
    <h6 className="text-white">{item.title}</h6>
    <span className=" text-secondary ">{item.subtitle}</span>
  </p>
</div>
<div className="row m-0 col-12  text-secondary col-lg-4 ">
  <span className="col-12 d-flex justify-content-center justify-content-lg-start">{item.time} </span>
  <span className="col-12 d-flex justify-content-center justify-content-lg-start">{item.tasks} </span>
</div>
      </li>
    )
  })
}
  </ul>

</section>
  )
}

// **************************************
// Messages
function Messages(){
  
  const state=[
    {
      img:"https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/faces/face6.jpg",
      name:"Leonard",
      text:"Well, it seems to be working now.",
      time:"5 minutes ago"
    },
    {
      img:"https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/faces/face8.jpg",
      name:"Luella Mills",
      text:"Well, it seems to be working now.",
      time:"10 Minutes Ago"
    },
    {
      img:"https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/faces/face9.jpg",
      name:"Ethel Kelly",
      text:"Please review the tickets",
      time:"2 Hours Ago"
    },
    {
      img:"https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/faces/face11.jpg",
      name:"Herman May",
      text:"Thanks a lot. It was easy to fix it .",
      time:"4 Hours Ago"
    },
  ]
  
  return(
<section className="row col-12 col-lg-6  mt-2 mb-3 mb-lg-0 m-0 " id="message">
  <div className="col-12 d-flex ">
    <h3 className="text-white col-8">Message</h3>
    <span className="text-secondary col-4 d-flex align-items-center justify-content-center">View all</span>
  </div>
  <ul className="col-12 row p-0 m-0">
  {
    state.map(item=>{
      return(
        <li className="col-12 row  m-0 ">
          <figure className="col-8 d-flex  justify-content-around ">
            <img src={item.img} alt=""  />
          <figcaption className="col row">
            <b className="text-white col-12">{item.name}</b>
            <span className="text-secondary col-12">{item.text}</span>
          </figcaption>
          </figure>
          <span className="d-flex col-4  text-secondary ">{item.time}</span>
        </li>
      )
    })
  }
  </ul>
</section>
  )
}

// **************************************
// sliders


class DemoCarousel extends Component {
    render() {
        return (
           <div className='col-12 col-lg-6 mt-2 p-1 m-0 row' id='slider'>
            <h3 className='text-white col-12 m-2'>Portfolio Slide</h3>
             <Carousel className='col-12 '>
                <div>
                    <img src="https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/dashboard/Img_5.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/dashboard/img_6.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/dashboard/Rectangle.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
           </div>
        );
    }
};



// **************************************
// table

function Table (){

const state = [
  {
    flag:flag1,
    name:"USA",
    number:"1500",
    percent:"56.35%"
  },
  {
    flag:flag2,
    name:"Germany",
    number:"800",
    percent:"75.43%"
  },
  {
    flag:flag3,
    name:"Australia",
    number:"760",
    percent:"44.36%"
  },
  {
    flag:flag4,
    name:"UK",
    number:"450",
    percent:"65.12%"
  },
  {
    flag:flag5,
    name:"Romania",
    number:"620",
    percent:"35.75%"
  },
  {
    flag:flag6,
    name:"Brazil",
    number:"230",
    percent:"90.01%"
  },
]

  return(
    <div id='table' className=' col-12 col-lg-6   '>
      <h3 className='col-12 text-white m-1 mt-2'>Visitors By Countries</h3>
<ul className='col-12 mt-2'>
{
  state.map(item=>{
  return(
    <li className='row m-0 col-12  justify-content-around text-secondary'>
      <div className='col-6 d-flex align-items-center'>
        <img src={item.flag} alt=""  className='col-4 flag'/>
        <span className='col-9'>{item.name}</span>
      </div>
      <div className='col-6 d-flex'>
        <span className='col-6'>{item.number}</span>
        <span className='col-6'>{item.percent}</span>
      </div>
    </li>
  )
  })
}
</ul>
    </div>
  )
}




// **************************************
// map



const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

function MapChart() {
  return (
    <ComposableMap className=' col-12 col-lg-6' >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}




export default Dashboard