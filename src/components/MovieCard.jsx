import React from 'react';

const API_KEY = process.env.API_KEY;

function MovieCard(props) {
  let posterPath = props.result.poster_path;

  let imgRequestURL = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  return (
    <div
      className='w-1/6 m-5 bg-gray-800 flex flex-col border-0 rounded-lg'
      key={props.result.id}
    >
      <div>
        <img
          className='border-0 rounded-t-lg'
          src={imgRequestURL}
          alt='Movie Poster'
        />
      </div>
      <div className=''>
        <h2>{props.result.title}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
