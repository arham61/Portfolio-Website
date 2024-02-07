function Cards(){
    return(
        <>
        <div className="wrapper">
        <h1 className="s-h1" >What I Do</h1>
        <div className="s-cards-container">
            <div className="card-1">
                <h2>Web Development</h2>
                <p>I create responsive websites using Reactjs and Node.js.</p>
            </div>
            <div className="card-2">
                <h2>Golang Developer</h2>
                <p>I create simple and effective backend for websites using GO.</p>
            </div>
        </div>
        </div>
        </>
    )
}


function Skills() {
    return(
        <>
        <Cards/>
        </>
    )
}

export default Skills;