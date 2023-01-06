import "./form.css"
const Form = ()=>{
  return(
    <section className="col-12 m-0 row justify-content-center  " id="form">
    <h3 className="col-12 text-white p-2 ">Form Elements</h3>
<section className="row col-12  ">

<div className="col-12 p-0 m-0 row justify-content-between ">
<Form1/>
<Form2/>
</div>
<div className="col-12 p-0 m-0 row justify-content-between ">

</div>

</section>
   </section>
  )
}


 function Form1(){
   
 return(
<section className=" col-12 col-lg-5 parent" >
    <h5 className="text-white">Default Form</h5>
    <p className="text-secondary">Basic form layout</p>
  <form action="" className="m-0">
<label for="user" className="col-12 d-flex p-0 text-white">Username</label>
<input type="text" placeholder="Username" id="user" className="col-12 p-1" />

<label for="email" className="col-12 d-flex p-0 text-white">Email</label>
<input type="email" placeholder="Email" id="email" className="col-12 p-1" />

<label for="pass" className="col-12 d-flex p-0 text-white">Password</label>
<input type="password" placeholder="Password" id="pass" className="col-12 p-1" />

<label for="cpass" className="col-12 d-flex p-0 text-white">Confirm password</label>
<input type="password" placeholder="Password" id="cpass" className="col-12 p-1" />

<div className="col-12 d-flex p-0" id="remember"><input type="checkbox" className="mr-1" /> <span className="text-secondary col-10">remember me</span>
</div>
<div>
  <button className="btn btn-primary m-1">Submit</button>
  <button className="btn btn-secondary">Cancel</button>
</div>
  </form>
 </section>
 )
  
 }


 function Form2(){
   
 return(
<section className=" col-12 col-lg-6   parent" id="form2" >
    <h5 className="text-white">Horizontal Form</h5>
    <p className="text-secondary">Horizontal Form
Horizontal form layout</p>
  <form action="" className="m-0 p-0">
<div className="row col-12 p-0 m-0 ">
<label for="user" className="col-12 col-md-5 d-flex pl-3 text-white">Username</label>
<input type="text" placeholder="Username" id="user" className="col-12 col-md-7 p-1" />
</div>

<div className="row col-12 p-0 m-0">
<label for="email" className="col-12 col-md-5 d-flex pl-3 text-white">Email</label>
<input type="email" placeholder="Email" id="email" className="col-12 col-md-7 p-1" />
</div>

<div className="row col-12 p-0 m-0">
<label for="pass" className="col-12 col-md-5 d-flex pl-3 text-white">Password</label>
<input type="password" placeholder="Password" id="pass" className="col-12 col-md-7 p-1" />
</div>

<div className="row col-12 p-0 m-0 ">
<label for="cpass" className="col-12 col-md-5  d-flex pl-3 text-white">Confirm password</label>
<input type="password" placeholder="Password" id="cpass" className="col-12 col-md-7 p-1" />
</div>

<div className="col-12 d-flex p-0 m-0" id="remember"><input type="checkbox" className="mr-1" /> <span className="text-secondary col-10">remember me</span>
</div>
<div>
  <button className="btn btn-primary m-1">Submit</button>
  <button className="btn btn-secondary">Cancel</button>
</div>
  </form>
 </section>
 )
  
 }



 export default Form





