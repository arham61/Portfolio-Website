function Navbar() {
  const scrollTo = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <navbar className="navbar" >
        <span className='title'>Arham</span>
        <div className="nav-link">
        <span className='nav-link nav-about'><a href="#about" onClick={(e) => scrollTo('about',e)}> About </a></span>
        <span className='nav-link nav-home'><a href='#projects' onClick={(e) => scrollTo('projects',e)}> Projects </a></span>
        <span className='nav-link nav-portfolio'><a href='https://docs.google.com/document/d/1ZIlmmBk92QQJMyEe3WQQsZK8b_4ERY5O/edit?usp=drive_link&ouid=111357375241856587233&rtpof=true&sd=true'> Resume </a></span>
        <span className='nav-link nav-contact'><a href='mailto:arhamh61@gmail.com'> Contact </a></span>
        </div>
      </navbar>
    )
  }

  export default Navbar;