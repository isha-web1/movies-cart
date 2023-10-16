import React from "react";

const SingleCard = ({movie}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
         className="h-80 w-80"
          src={movie.poster}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title items-center text-center">
          {movie.movieName}
         
        </h2>
        <p className="text center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nostrum.</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">watch Time : {movie.watchTime}</div>
          <div className="badge badge-outline">Ratting : {movie.imdbRating}</div>
        </div>
        <button className="btn btn-primary">Book now</button>
      </div>
    </div>
  );
};

export default SingleCard;
