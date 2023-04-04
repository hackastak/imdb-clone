'use client';
import React, { useState } from 'react';

const API_KEY = process.env.API_KEY;

function MovieCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  let posterPath = props.result.poster_path;
  let imgRequestURL = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  return (
    <div
      className={`movie-card w-1/4 m-5 bg-gray-800 flex flex-col border-0 rounded-lg
      ${isFlipped ? 'flipped' : ''}
      `}
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      key={props.result.id}
    >
      {!isFlipped ? (
        <div className='card-front'>
          <div>
            <img
              className='border-0 rounded-t-lg'
              src={imgRequestURL}
              alt='Movie Poster'
            />
          </div>
          <div className='w-full text-center p-2'>
            <h2>{props.result.title}</h2>
          </div>
        </div>
      ) : (
        <div className='card-back'>
          <div className='w-full text-center p-2'>
            <h2 className='text-white'>{props.result.title}</h2>
          </div>
          <div>
            <p className='px-3'>{props.result.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
