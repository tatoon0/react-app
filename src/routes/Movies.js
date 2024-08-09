import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Movies() {
    const [Loading, setLoading] = useState(true);
    const [Movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
            .then((res) => res.json())
            .then((json) => setMovies(json.data.movies))
            .then(() => setLoading(false))
    })
    return (
        <div>
            <h1>Movies</h1>
            <hr />
            {Loading ? "Loading..." : 
                <div>
                    {Movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title} 
                            year={movie.year} 
                            genres={movie.genres} 
                            medium_cover_image={movie.medium_cover_image}/>
                        ))}
                </div>
            }
        </div>
    )
}

export default Movies;