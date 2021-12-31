
function Navbar() {
  return (
    <div style={{overflow: "hidden", height: "10rem"}}>
<nav className="demo">
  <a href="/" className="brand">
    <span>About Me</span>
  </a>

  <input id="bmenub" type="checkbox" className="show"/>
  <label htmlFor="bmenub" className="burger pseudo button"> Menu </label>

  <div class="menu">
  <a href="/sections/projects" className="pseudo button icon-g"> Projects </a>
  <a href="/sections/skills" className="pseudo button">Skills</a>
  <a href="/sections/research" className="pseudo button">Research</a>
  </div>
</nav>

</div>
  )
}

export default Navbar;
