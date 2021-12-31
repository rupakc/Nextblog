
function CustomCard({props}) {
  return(
    <div style={{display:"inline-grid", padding:"0.5rem", width:"20rem", height:"auto"}}>
      <div>
        <article className="card">
        <header style={{textAlign:"center"}}>
          <h3> {props.title} </h3>
        </header>
         <div style={{textAlign:"center", textJustify: "inter-word", margin:"0.1rem",padding:"0.1rem"}} dangerouslySetInnerHTML={{__html: props.description}}>

          </div>

          <hr/>
          <div style={{textAlign:"center"}}>
            {props.toolList.map((toolName,index) =>
              <span class="label warning" key={index} style={{display:"inline-grid",fontSize:"1rem"}}>{toolName}</span>
            )}
          </div>
          <hr/>
          <footer style={{textAlign: "center"}}>
          <div style={{margin: 0, padding:0}}>
            <a href={props.link} className="pseudo button icon-g" target="_blank">
              <button className="success">Get Code</button>
            </a>
          </div>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default CustomCard;
