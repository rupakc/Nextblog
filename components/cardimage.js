function CardImage({props}) {
  return(
    <div style={{display:"inline-grid", padding:"0.5rem", width:"20rem", height:"auto"}}>
      <div>
        <article className="card">
          <img className="stack" src={props.imageSource} alt={props.imageText} style={{height: "10rem"}}/>
          <footer style={{textAlign: "center"}}>
            <div style={{margin: 0, padding:0}}>
              <a href="#" className="button stack" style={{textAlign: "center"}}>
                {props.imageText}
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default CardImage;
