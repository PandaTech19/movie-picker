import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import SanityClient from '../Client.js';

export default function Onemovie() {
    
    const [Onemovie, setonemovie]=useState(null);
    
    const { slug } =useParams();

    useEffect(() => {

        SanityClient.fetch(
            `*[slug.current==$slug]{
                title,
                slug,
                poster{asset->url},

            }`,{slug} 
        )
            .then((data) => setonemovie(data[0]))
            .catch(console.error);


    },[slug]);


if(!Onemovie) return<div style={{color:"red"}}>Loading...</div>

console.log(Onemovie)


    return (
        <div>
           <p style={{color:'red'}}> You clicked<h2>{Onemovie.title}</h2></p>
          
        </div>
    )
}

 
