import React, { useState } from 'react';
import Vector from './vector.jpg'
import { Link } from 'react-router-dom';


export default function Head() {


    const [search, Setsearch] = useState(null);
    
    return (


        <div className="Head-container">

            <div className="Head-slo"><Link style={{ textDecoration: "none", color: "#FFFFFF" }} to="/">Vilm</Link></div>

            <form className="Head-search-container">

                <input className="Head-search" type={Text} onChange={ (e) => Setsearch(e.target.value)}/>

                <Link to={"/Results/" +search}>
                    <button  type="submit" style={{ background: "none", border: "none" }}>
                        <img className="search-icon" src={Vector} alt="search-icon" />
                    </button>
                </Link>

            </form>

        </div >

    )
}






