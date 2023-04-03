import React from 'react';

import MovieCard from './MovieCard';

function Results({ results }) {
  return (
    <div className='w-full m-5 flex flex-wrap'>
      {typeof results == 'object' ? (
        results.map((result) => <MovieCard result={{ ...result }} />)
      ) : (
        <div>
          <p>Welcome to the IMDb clone created by Hunter Wiginton</p>
        </div>
      )}
    </div>
  );
}

export default Results;
