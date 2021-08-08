import React, { useState } from 'react';
import Vector from './vector.jpg'
import { Link } from 'react-router-dom';


export default function Head() {

    const [search, Setsearch] = useState(null);
  
    
    return (

        <div className="Head-container">

            <div className="Head-slo2"><Link style={{ textDecoration: "none", color: "#FFFFFF" }} to="/">Vilm</Link></div>


        </div >

    )
}






