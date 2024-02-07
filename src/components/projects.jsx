import React from "react";

function GitBtn(){
    return(
        <button className="git-btn"><a href="https://github.com/arham61">View GitHub<i class="a-icon fa-solid fa-arrow-right-long"></i></a></button>
    )
}

function Cards(){
    return(
        <>
        <div id="projects" className="p-wrapper">
        <h1 className="p-h1" >Projects</h1>
        <div className="p-cards-container">
            <div className="p-card1">
                <h2>Landing Page</h2>
                <p>Its a static landing page made using HTML,CSS and Vanilla JavaScript</p>
                <a
        href="https://github.com/arham61/landing-page"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="icon fa-2x fa-brands fa-github"></i>
      </a>
            </div>
            <div className="p-card2">
                <h2>Tic-Tac-Toe</h2>
                <p>A simple tic tac toe game made using React.</p>
                <a
        href="https://github.com/arham61/Tic-tac-toe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="icon fa-2x fa-brands fa-github"></i>
      </a>
            </div>
            <div className="p-card3">
                <h2>Chat App</h2>
                <p>A simple chat application developed in GO using websokets.</p>
                <a
        href="https://github.com/arham61/Go-ChatBox"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="icon fa-2x fa-brands fa-github"></i>
      </a>
            </div>
        </div>
        <GitBtn/>
        </div>
        </>
    )
}


function Projects() {
    return(
        <>
        <Cards/>
        </>
    )
}

export default Projects;