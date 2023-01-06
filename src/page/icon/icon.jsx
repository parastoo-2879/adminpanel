import "./icon.css"



const Icon = ()=>{
const state = [
  "bi bi-0-circle",
  "bi bi-0-circle-fill",
  "bi bi-0-square",
  "bi bi-0-square-fill",
  "bi bi-1-circle",
  "bi bi-airplane-engines",
  "bi bi-alarm-fill",
  "bi bi-alexa",
  "bi bi-align-top",
  "bi bi-alipay",
  "bi bi-archive-fill",
  "bi bi-arrow-down-left-circle-fill",
  "bi bi-arrow-through-heart-fill",
  "bi bi-badge-3d-fill",
  "bi bi-arrows-fullscreen",
  "bi bi-badge-tm-fill",
  "bi bi-bag-fill",
  "bi bi-aspect-ratio",
  "bi bi-badge-3d",
  "bi bi-binoculars",
  "bi bi-bookshelf",
  "bi bi-book-half",
  "bi bi-bootstrap-reboot",
  "bi bi-box2-heart",
  "bi bi-building-gear",
  "bi bi-calendar-month-fill",
  "bi bi-calendar-check",
  "bi bi-file-earmark-richtext-fill"
]
return(
<section className="col-12 m-0 row justify-content-center  " id="iconparent">
  <h3 className="col-12 text-white p-2 ">Icons</h3>
  <section className="row col-12 parent  " id="icons">

    <div className="col-12 p-0 m-0 row justify-content-between " >
{
  state.map(item=>{
    return(
      <div className='border col-12 col-lg-3 row align-items-center  m-0'>
         <i className={item +"   col-3 text-primary"}></i>
        <span className='d-flex  col-8 text-white'>{item}</span>
       
      </div>
    )
  })
}
    </div>


  </section>
</section>
)
}
export default Icon

// const Chart = ()=>{
// return(
// <section className="col-12 m-0 row justify-content-center  " id="Heading">
  // <h3 className="col-12 text-white p-2 ">Chart</h3>
  // <section className="row col-12  ">

    // <div className="col-12 p-0 m-0 row justify-content-between ">

      // </div>


    // </section>
  // </section>
// )
// }



// export default Chart