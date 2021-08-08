import React, { useEffect, useState } from 'react'
import SanityClient from '../Client';
import { Link, useParams,useLocation } from "react-router-dom";


export default function Result() {

    const [search, Setsearch] = useState(null);
    var { slug } = useParams();
    var {location}= useLocation();

    useEffect(() => {

        SanityClient.fetch(

            "*[(_type=='movie' || _type =='series') && title match '*" + slug + "*' ] { title,Date,slug,poster{asset->{url}}}"
        )

            .then((search) => Setsearch(search))
            .catch(console.error);

    }, [])

    return (
        <div className="res-container">

            <h1 className="res">Results</h1>

            <div className="von">

                {
                    search &&

                    search.map((movie) => (



                        <div className="mov" key={movie}>

                            <div className="pic-container">

                                <Link style={{ textDecoration: "none" }} to={"/" + movie.slug.current} key={movie.slug.current}>

                                    <img className="Movie-pics" src={movie.poster.asset.url} alt="poster-image" />

                                    <h2 className="con-text" key={movie.title}>{movie.title}</h2>

                                    <h2 className="date-mov" key={movie.releaseDate}>{movie.Date}</h2>
                                </Link>

                            </div>

                        </div>



                    ))

                }

            </div>

        </div>
    )
}

