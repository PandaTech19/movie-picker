import React, { useEffect, useState } from 'react';
import SanityClient from '../Client';
import { Link } from 'react-router-dom';


export default function Allmovies() {


    const [moviedata, setmovie] = useState(null);


    useEffect(() => {





        SanityClient.fetch(

            `*[_type=='movie']
                    {
                    title,
                    Date,
                    slug,
                    year,
                    poster{asset->{url},
                }}`
        )

            .then((data) => setmovie(data))
            .catch(console.error);



    }, [])



    console.log(moviedata)



    return (



        <div className="Movie-container-All">

            <h1 className="You">Trending Movies</h1>

            <div className="von">

                {
                    moviedata &&

                    moviedata.map((movie) => (
 


                        <div className="mov" key={movie}>

                            <div className="pic-container">

                                <Link style={{ textDecoration: "none" }} to={"/" + movie.slug.current} key={movie.slug.current}>

                                    <img className="Movie-pics" src={movie.poster.asset.url} alt="poster-image" />


                                    <h2 className="con-text" key={movie.title}>{movie.title}</h2>


                                    <h2 className="date-mov" key={movie.Date}>{movie.Date}</h2>
                                </Link>

                            </div>

                        </div>



                    ))

                }

            </div>


        </div>


    )

}




