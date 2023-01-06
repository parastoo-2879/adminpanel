import "./notfound.css"
import Gif from "./../img/404gif.gif"
const Notfound = ()=>{
  return(
  <section className="col-12  m-0 row justify-content-center " id="notfound">
<figure className="col-12">
  <img src={Gif} alt="" />
</figure>
  </section>
  )
}
export default Notfound