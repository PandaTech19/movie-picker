import React, { useEffect, useState } from 'react';
import SanityClient from '../Client';
import Portabletext from '@sanity/block-content-to-react';
import Star from './star.jpg';






export default function Screen() {

    const [screen, setscreen] = useState(null);

    useEffect(() => {

        SanityClient.fetch(

            `*[_type=='background']{
              
                title,
                description,
                rating,
                poster{asset->{url},
           


            }}`

        )
            .then((data) => setscreen(data))
            .catch(console.error);

    }, [])

    return (
        <div>
            {
                screen &&
                screen.map((Bg) => (

                    <div style={{ background: `url(${Bg.poster.asset.url})`, backgroundSize: "cover" }} className="Screen-container">

                       
                            <h1 className="bg-title" key={Bg.title}>{Bg.title}</h1>

                            <div className="bg-descrip"><Portabletext className="block" blocks={Bg.description} /></div>

                            <div className="bg-rating">
                                <img className="bg-star" src={Star} />

                                <span className="bg-rate" key={Bg.rating}>{Bg.rating}</span>
                            </div>

                     





                    </div>

                ))
            }



        </div>
    )
}


