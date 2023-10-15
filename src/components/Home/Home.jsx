import React, { useEffect, useState } from 'react';
import SingleCard from '../singleCard/SingleCard';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=> {
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setMovies(data))
    },[])
    return (
        <div className='movies-container '>
            {
                movies.map((movie) =><SingleCard
                movie={movie}
                key={movie.id}
                ></SingleCard>)
            }
        </div>
    );
};

export default Home;