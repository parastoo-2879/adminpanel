import "./style.css"
import "./local.css"
import pro from "./../../img/pro1.jfif"
const Header=()=>{
function flag_dropdown(){
document.getElementById("Dropdown_header").classList.toggle("d-block")
}

function menu(){
    document.getElementById("mobile-menu").style.left=0
}

return(

<section className="col-12 row p-0 m-0">
  <header className=" row p-0 m-0 col-12 ">

    <div className=" p-0 m-0 col-1  d-lg-flex col-lg-6">
      <span className="d-flex col-1 justify-content-center" onClick={menu}> <i className="bi bi-list  d-flex justify-content-center "></i></span>
      <input type="text" placeholder=" Search products " className=" d-none d-lg-block col-lg-10 p-lg-2" />
    </div>

    <div className="col-10 col-lg-6 p-0 m-0   ">
      <div className="col-3 col-lg-7 d-flex h-100 p-0 m-0 justify-content-around align-items-center ">
        <span id="pro-btn" className="d-none d-lg-flex"> + Create New Project</span>
        <i class="bi bi-grid-fill" className="d-none d-lg-flex"></i>
        <i class="bi bi-envelope"></i>
        <i class="bi bi-bell-fill"></i>
      </div>

      <figure className=" col-8   col-lg-5 d-flex p-0 m-0  align-items-center">
        <img src={pro} alt="" />
        <figcaption className="col " onClick={flag_dropdown}><span>Parastoo.Gh</span> <i
            class="bi bi-caret-down-fill"></i>
          <Dropdown_header />
        </figcaption>
      </figure>
    </div>

  </header>
</section>

)
}

const Dropdown_header =()=>{
return(
<div id="Dropdown_header" className="d-none">
  <h5 className="p-3">Profile</h5>
  <p>
    <span><i class="bi bi-gear-fill"></i></span>
    <span> Setting</span>
  </p>
  <p>
    <span><i class="bi bi-box-arrow-right"></i></span>
    <span> Logout</span>
  </p>
  <p className="d-flex align-items-center">Advanced settings</p>
</div>
)
}



// parent
// const rightcomponent = ({children})=>{

// }
export default Header