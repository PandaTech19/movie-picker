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
                    releaseDate,
                    slug,
                    releaseDate,
                    year,
                    poster{asset->{url},
                   
                   

                }}`
        )

            .then((data) => setmovie(data))
            .catch(console.error);



    }, [])



    console.log(moviedata)

    var x = parseInt();


    return (



        <div className="Movie-container-All">

          

            <h1 className="You">Trending Movies</h1>


            <div className="von">

                {
                    moviedata &&

                    moviedata.map((movie, index) => (

                      

                        <div  className="von" key={index}>

                            <img className="Movie-pics"  src={movie.poster.asset.url} alt="poster-image" />

                            <h2 className="con-text"  key={movie.title}>{movie.title}</h2>

                            <h2 className="date-text" key={movie.releaseDate}>{movie.releaseDate.substr(0,4)}</h2>

                        </div>



                    ))

                }

            </div>


        </div>


    )

}




