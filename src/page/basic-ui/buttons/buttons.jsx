import "./button.css"

const Buttons = ()=>{
  return(
   <section className="col-12 m-0 row justify-content-center " id="buttons">
    <h3 className="col-12 text-white p-2">Buttons</h3>
<section className="row col-12 ">
<InnerButtons1 />
<InnerButtons2/>
<InnerButtons3/>
<InnerButtons4/>
</section>
   </section>
  )
}

let button = ["primary","secondary","success","danger","warning","info","light","dark"]

function InnerButtons1(){
  return(
    <section className="col-12 parent">
<h4 className="text-white col-12">Normal Buttons</h4>
<p className="text-secondary col-12">Add class <span className="text-danger">.btn-color</span> for buttons in theme colors</p>
<section  className="d-flex flex-wrap col-12  part">
{
  button.map(item=>{
    return(
      <button className={"btn " + " btn-" + item}>{item}</button>
    )
  })
}
</section>
    </section>
  )
}

function InnerButtons2(){
  return(
    <section className="col-12 parent">
<h4 className="text-white col-12">Outlined Buttons</h4>
<p className="text-secondary col-12">Add class <span className="text-danger">.btn-outline-color </span>for outline buttons</p>
<section  className="d-flex flex-wrap col-12  part">
{
  button.map(item=>{
    return(
      <button className={"btn " + " btn-outline-" +item}>{item}</button>
    )
  })
}
</section>
    </section>
  )
}

function InnerButtons3(){
  return(
    <section className="col-12 parent">
<h4 className="text-white col-12">Rounded Buttons</h4>
<p className="text-secondary col-12">Add class <span className="text-danger">.btn-rounded </span></p>
<section  className="d-flex flex-wrap col-12  part" id="rounded">
{
  button.map(item=>{
    return(
      <button className={"btn " + " btn-" +item}>{item}</button>
    )
  })
}
</section>
    </section>
  )
}

function InnerButtons4(){
  return(
<section className="col-12 parent ">
<h3 className="col-12 text-white">Button groups</h3>
<p className="text-secondary col-12">Wrap a series of buttons with <span className="text-danger">.btn in .btn-group</span></p>
<div className="btn-group btn-group-toggle  col-12" data-toggle="buttons">
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Active
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off" /> Radio
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
  </label>
</div>
</section>
  )
}



export default Buttons