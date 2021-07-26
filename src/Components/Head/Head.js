import React from 'react'
import Vector from './vector.jpg'
import { Link, Route } from 'react-router-dom'




function Head() {
    return (

        <div className="Head-container">
            <div className="Head-slo"><Link style={{ textDecoration: "none", color: "#FFFFFF" }} to="/">Vilm</Link></div>

            <div className="Head-search-container">

                <input className="Head-search" type={Text}></input>
                {/*<i class="fas fa-search" style={{color: "snow",display: "flex",fontSize: "2vw",marginLeft:"0.5vw",marginTop:"0.5vw",}}/>*/}
                <img className="search-icon" src={Vector} alt="search-icon" />

            </div>

        </div >


    )
}

export default Head





