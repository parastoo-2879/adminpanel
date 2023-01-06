import './menu.css'
import './local.css'
import pro from "./../img/pro1.jfif"
import Header from "./global/header"
import {Outlet,Link} from 'react-router-dom'
const Menu = ()=>{


function show(){
document.getElementById("submenu").classList.toggle("d-block")
}
function show2(){
document.getElementById("submenu2").classList.toggle("d-block")
}
function Close(){
  document.getElementById("mobile-menu").style.left="-100%"
}

return(
<section className=" col-12 row p-0 m-0 ">

  <div className='d-none d-lg-block col-lg-2  mainMenu'>
    <section className='col-12  m-0 p-0'>
      <div id='logo'>
        <img src="https://www.bootstrapdash.com/demo/corona-free/jquery/template/assets/images/logo.svg" alt="" />
      </div>
      <div id='pro' className='d-flex justify-content-around'>
        <figure className='d-flex  col-4 h-100 align-items-center'>
          <img src={pro} alt="" />
        </figure>
        <p className=' row p-0 m-0 align-content-center'>
          <h6 className='col-12 text-white'>Parastoo.Gh</h6>
          <span className='d-flex col-12'>Member Gold</span>
        </p>
      </div>
    </section>

    <nav className=' mt-5 p-0 col-12 '>
      <ul className='col-12 p-0'>
        <li className='col-12'>
          <Link to="/"><span><i className="bi bi-speedometer "></i></span> <span>Dashboard</span></Link>
        </li>
        <li onClick={show} className='col-12'>
          <Link><span><i className="bi bi-laptop "></i></span><span> Basic UI Elements</span></Link>
          <ul className='d-none' id='submenu'>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/dropdown">Dropdown</Link>
            </li>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
          </ul>
        </li>
        <li className='col-12'>
          <Link to="/form"><span><i className="bi bi-list-ul "></i></span> <span>Form Elements</span></Link>
        </li>
        <li className='col-12'>
          <Link to="/icon"><span><i class="bi bi-emoji-smile"></i></span> <span>Icon</span></Link>
        </li>
      </ul>

    </nav>

  </div>

  <div className='' id='mobile-menu'>
    <span className='text-danger d-flex  justify-content-end p-2' onClick={Close}><i class="bi bi-x-square"></i></span>
    <h5 className='text-white col-12 d-flex  justify-content-center' id='mobileLogo'>CORONA</h5>
    
    <nav className='p-0'>
      <ul className='col-12 p-0 m-0'>
        <li className=' d-flex justify-content-center'onClick={Close}>
          <Link to="/" className='col-12  row p-0 justify-content-around'><span className=' d-flex col-2 '><i className="bi bi-speedometer "></i></span> <span className='  d-flex col-10'>Dashboard</span></Link>
        </li>
        <li className='row  justify-content-center' onClick={show2}>
          <Link className='col-12  row p-0 justify-content-around'><span className='d-flex col-2  align-items-center'><i className="bi bi-laptop "></i></span><span className='  d-flex col-10'> Basic UI Elements</span></Link>
          <ul className='d-none col-12 p-0 m-0' id='submenu2'>
            <li className='d-flex  justify-content-center'onClick={Close}>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li className='d-flex justify-content-center'onClick={Close}>
              <Link to="/dropdown">Dropdown</Link>
            </li>
            <li className='d-flex justify-content-center'onClick={Close}>
              <Link to="/typography">Typography</Link>
            </li>
          </ul>
        </li>
        <li className='d-flex  justify-content-center'onClick={Close}>
          <Link to="/form" className='col-12  row p-0 justify-content-around'><span className='d-flex col-2  align-items-center'><i className="bi bi-list-ul "></i></span> <span className='  d-flex col-10'>Form Elements</span></Link>
        </li>
        <li className='d-flex  justify-content-center'onClick={Close}>
          <Link to="/icon" className='col-12  row p-0 justify-content-around'><span className='d-flex col-2  align-items-center'><i class="bi bi-emoji-smile"></i></span> <span className='  d-flex col-10'>Icon</span></Link>
        </li>
      </ul>

    </nav>

  </div>

  <div className='col-12 col-md-12 col-lg-10 row p-0 m-0' id='wrapper'>
    <Header />
    <div className='col-12 p-0 m-0 d-flex' >
      <Outlet className="col-12" />
    </div>
  </div>
</section>
)
}
export default Menu