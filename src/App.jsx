import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./global.css"
import Dashboard from "./page/dashborad/dashboard"
// import BasicUIElements from "./page/basic-ui/basic-ui"
import Buttons from "./page/basic-ui/buttons/buttons"
import Dropdown from "./page/basic-ui/dropdown/dropdown"
import Typography from "./page/basic-ui/typography/typography"

import Form from "./page/form/form"
import Icon from "./page/icon/icon"
import Menu from "./page/menu"
import Notfound from "./page/notfound"

const Main = ()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Menu/>}>
<Route index element={<Dashboard/>}/>
{/* <Route path="basic-ui" element={<BasicUIElements/>}/> */}
<Route path="buttons" element={<Buttons/>}/>
<Route path="dropdown" element={<Dropdown/>}/>
<Route path="typography" element={<Typography/>}/>
<Route path="form" element={<Form/>}/>
<Route path="icon" element={<Icon/>}/>
<Route path="*" element={<Notfound/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  )
  }

  export default Main