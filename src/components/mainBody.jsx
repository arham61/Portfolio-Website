import Navbar from './navbar'

function MainBody() {
    return(
        <>
        <div className="body">
        <Navbar/>
      <div className="main-div">
        <div className="name">Arham Hussain</div>
        <div className="msg">Passionate about changing the world with technology.</div>
        <div className="social-links">
        <a
        href="https://github.com/arham61"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub
        <i class="fa-brands fa-github"></i>
      </a>
            <a href="https://www.instagram.com/arham0_o/" target="_blank"
        rel="noopener noreferrer">Instagram
            <i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/arham-hussain-5b4a92296" target="_blank"
        rel="noopener noreferrer">Linkedln
            <i class="fa-brands fa-linkedin"></i></a>
        </div>
        <button className="about-btn"><a href="/">More about me </a></button>
      </div>
      </div>
      </>
    )
  }

  export default MainBody