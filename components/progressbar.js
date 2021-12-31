import "../node_modules/buttercake/dist/css/buttercake.min.css";

function Progressbar({props}) {
  return(
    <div className="progress warning">
        <div className="progress-bar" style={{width: "55%"}}></div>
    </div>
  )
}

export default Progressbar
