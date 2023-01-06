import "./typography.css"

const Typography = ()=>{
  
 
  return(
    <section className="col-12 m-0 row justify-content-center  " id="Heading">
     <h3 className="col-12 text-white p-2 ">Typography</h3>
 <section className="row col-12  ">

<div className="col-12 p-0 m-0 row justify-content-between ">
<Headings1/>
<Headings2/>
</div>
<div className="col-12 p-0 m-0 row justify-content-between ">
<Headings3/>
<Headings4/>
</div>

 </section>
    </section>
   )
 }
 
//  let button = ["h1","h2","h3","h4","h5","h6"]

 function Headings1(){
   
 return(
<section className="  col-12 col-lg-5 parent" >
    <h5 className="text-white">Headings</h5>
    <p className="text-secondary">Add tags <span className="text-danger">h1</span> to <span className="text-danger">h6</span> or class <span className="text-danger">.h1 </span> to <span className="text-danger">.h6</span></p>
  <ul className=" p-0 m-0">
   <li className="col-12  mb-2 text-white">
<h1>h1.Heading</h1>
   </li>
   <li className="col-12  mb-2 text-white">
<h2>h2.Heading</h2>
   </li>
   <li className="col-12  mb-2 text-white">
<h3>h3.Heading</h3>
   </li>
   <li className="col-12  mb-2 text-white">
<h4>h4.Heading</h4>
   </li>
   <li className="col-12  mb-2 text-white">
<h5>h5.Heading</h5>
   </li>
   <li className="col-12  mb-2 text-white">
<h6>h6.Heading</h6>
   </li>
  </ul>
 </section>
 )
  
 }
 function Headings2(){
   
 return(
<section className=" d-none d-md-block col-md-12 col-lg-6 parent" >
    <h5 className="text-white">Display Headings</h5>
    <p className="text-secondary">Add class <span className="text-danger">.display1</span> to <span className="text-danger">.display-4</span></p>
  <ul className=" p-0 m-0">
   <li className="col-12  mb-2 text-white">
<p className="display-1">Display1</p>
   </li>
   <li className="col-12  mb-2 text-white">
<p className="display-2">Display2</p>
   </li>
   <li className="col-12  mb-2 text-white">
<p className="display-3">Display3</p>
   </li>
   <li className="col-12  mb-2 text-white">
<p className="display-4">Display4</p>
   </li>
  </ul>
 </section>
 )
  
 }
 
 function Headings3(){
   
 return(
<section className="  col-12 col-lg-5 parent" >
    <h5 className="text-white">Text colors</h5>
    <p className="text-secondary">Use class <span className="text-danger">.text-primary</span>, <span className="text-danger">.text-secondary</span> etc. for text in theme colors</p>
  <ul className=" p-0 m-0">
   <li className="col-12  mb-2 text-white">
<p className="text-primary">text-primary</p>
   </li>
   <li className="col-12  mb-2 text-white">
   <p className="text-success">text-success</p>
   </li>
   <li className="col-12  mb-2 text-white">
   <p className="text-danger">text-danger</p>
   </li>
   <li className="col-12  mb-2 text-white">
   <p className="text-secondary">text-secondary</p>

   </li>
   <li className="col-12  mb-2 text-white">
   <p className="text-warning">text-warning</p>

   </li>
   <li className="col-12  mb-2 text-white">
   <p className="text-info">text-info</p>

   </li>
  </ul>
 </section>
 )
  
 }
 function Headings4(){
   
 return(
<section className="  col-12 col-lg-6 parent" >
   <div className="col-12 mb-3">
<h5 className="col-12 text-white">Mute</h5>
<span className="col-12 d-flex text-secondary">use class <span className="text-danger">.text-muted</span></span>
<p className="text-muted col-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore fugiat atque odio veritatis expedita unde impedit sit laudantium magnam possimus quisquam animi ipsam, voluptate, aliquam delectus ipsa. Accusantium, maiores!</p>
   </div>
   <div className="col-12 mb-3">
<h5 className="col-12 text-success">Strike</h5>
<span className="col-12 d-flex text-secondary">Wrap content in  <span className="text-danger">del</span> tag</span>
<del className="text-white col-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore fugiat atque odio veritatis expedita unde impedit sit laudantium magnam possimus quisquam animi ipsam, voluptate, aliquam delectus ipsa. Accusantium, maiores!</del>
   </div>
   <div className="col-12 mb-3">
<h5 className="col-12 text-success">Capitalized</h5>
<span className="col-12 d-flex text-secondary">Use class  <span className="text-danger">.text-capitalize</span> tag</span>
<p className="text-white text-capitalize col-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore fugiat atque odio veritatis expedita unde impedit sit laudantium magnam possimus quisquam animi ipsam, voluptate, aliquam delectus ipsa. Accusantium, maiores!</p>
   </div>
 </section>
 )
  
 }
 

export default Typography





