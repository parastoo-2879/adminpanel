 import React, { useState } from "react"
import { useContext } from "react"
import "./index.css"
 
const data = {
  src:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  figcap:"That's my picture",
  h2:"This is a Title",
  p:{
    desc:"this is a sample",
    rate:" 3 stars"
  },
  comm:["perfect","awli","not bad"],
 view:125
}

 const Mycontext=React.createContext()

export default function Main(){
  return(
    <section className="row border border-danger">
     <Mycontext.Provider value={data}>
<Figure/>
<Article/>
<Section/>
    </Mycontext.Provider>   
    </section>
  
  )
}

function Figure(){
  return(
  <figure className="row col-4 border">
    <Img/>
    <Figcap/>
  </figure>
  )
}

function Img(){
  const data = useContext(Mycontext)
  return(
    <img src={data.src} alt="" className="col-11" />
  )
}

function Figcap(){
  const data = useContext(Mycontext)
  return(
    <figcaption className="col-11">{data.Figcap}</figcaption>
  )
}


function Article(){
return(
  <div className="col-4 row border">
    <H2/>
    <P/>
  </div>
)
}

function H2(){
  const data = useContext(Mycontext)
return(
  <h2 className="col-12 mb-1">{data.h2}</h2>
)
}

function P(){
  const data = useContext(Mycontext)
  return(
    <p className="col-12">{data.p.desc}
    <Rate/>
{/* <span>{data.p.rate}</span> */}
    </p>
  )
}

function Rate(){
  const data = useContext(Mycontext)
  return(
    <span>{data.p.rate}</span>
  )
}


function Section(){
  const data = useContext(Mycontext)
function show(){
return(
<>
{
    data.comm.map((item)=>{
      return(
    <>
    <span>{item}</span>
    <br />
    </>
      )
      })

  }
 
</> 
)
}
return(
  <section className="col-4 border row">
    <span className="col-12" id="com">{
      // data.comm.map((item)=>{
      //   return(
      // <> <span>{item}</span> <br /></>   
      //   )
      // })
      show()
    }</span>
    <span className="col-12">{data.view}</span>
  </section>
)
}