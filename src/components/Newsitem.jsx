import image from "../assets/image.png";
const Newsitem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 px-2 " style={{maxWidth:"299px"}}>
  <img src={src?src:image} style={{height:'200px',width:"270px"}} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,40)}</h5>
    <p className="card-text">{description?description.slice(0,100):"A news description typically provides a concise summary of the key events or developments covered in a news article."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Newsitem
