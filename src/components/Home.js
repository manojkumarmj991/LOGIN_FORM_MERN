import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            <center><h1>Hello!!!</h1><h2> {location.state.id} </h2></center>
            <center> <h1>welcome</h1>
            <br></br><h2>TO</h2>
            <h1>Home Page</h1></center>

        </div>
    )
}

export default Home