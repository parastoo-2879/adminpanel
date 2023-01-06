import "./dropdown.css"

const Dropdown = ()=>{


 
    return(
     <section className="col-12 m-0 row justify-content-center " id="dropdowns">
      <h3 className="col-12 text-white p-2">Dropdowns</h3>
  <section className="row col-12 ">
  <Dropdown1/>
<div className="col-12 p-0 m-0 row justify-content-between">
<Dropdown2/>
<Dropdown3/>
</div>
  </section>
     </section>
    )
  }
  
  let button = ["primary","secondary","success","danger","warning","info","light","dark"]

    function drop(e){
     e.target.nextElementSibling.classList.toggle("d-block")
    }

  function Dropdown1(){
  
    return(
      <section className="col-12  parent row align-items-center">
  <h4 className="text-white col-12">Basic Dropdown</h4>
  <p className="text-secondary col-12">Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <span className="text-danger">.dropdown</span></p>
  <section  className="d-flex flex-wrap col-12  ">
  {

  button.map(item=>{
    return(
      <div className="dropdown m-1">
<button className={"btn " + "btn-"+ item + " dropdown-toggle"} type="button" id={item} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={drop}>
  Dropdown button
</button>
<div className="dropdown-menu border" aria-labelledby={item}>
  <a className="dropdown-item" href="#">Action</a>
  <a className="dropdown-item" href="#">Another action</a>
  <a className="dropdown-item" href="#">Something else here</a>
</div>
</div>
    )
  })

  }
  </section>
      </section>
    )
  }
  
  function Dropdown2(){
    return(
      <section className="col-12 col-lg-5 row align-items-center parent">
  <h4 className="text-white col-12">Dropdown Outline</h4>
  <p className="text-secondary col-12">Add class <span className="text-danger">.btn-outline-color</span> to the button inside <span className="text-danger">.dropdown</span></p>
  <section  className="d-flex flex-wrap col-12  ">
  {

  button.map(item=>{
    return(
      <div className="dropdown m-1">
<button className={"btn " + " btn-outline-" +item + " dropdown-toggle"} type="button" id={item} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={drop}>
  Dropdown button
</button>
<div className="dropdown-menu border" aria-labelledby={item}>
  <a className="dropdown-item" href="#">Action</a>
  <a className="dropdown-item" href="#">Another action</a>
  <a className="dropdown-item" href="#">Something else here</a>
</div>
</div>
    )
  })
  
  }
  </section>
      </section>
    )
  }

  function Dropdown3(){
    return(
      <section className="col-12 col-lg-6 parent row align-items-center">
  <h4 className="text-white col-12">Split Button Dropdowns</h4>
  <p className="text-secondary col-12">Wrap two buttons in <span className="text-danger">.btn-group</span> and add <span className="text-danger">.dropdown-toggle-split</span> to the toggling button</p>
  <section  className="d-flex flex-wrap col-11  ">
  {

  button.map(item=>{

    return(
      <div className="btn-group m-1">
        <button type="button" className={"btn"+" btn-"+item}>Action</button>
        <button type="button" className={"btn"+ " btn-"+item + " dropdown-toggle dropdown-toggle-split"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={drop}>
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    )
  })
  
  }
  </section>
      </section>
    )
  }
  
  

export default Dropdown



