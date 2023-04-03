import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

async function Home({ searchParams }) {
  const genre = searchParams.genre;
  let request;
  let configRequest;

  if (genre == 'trending') {
    request = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    request = `https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`;
  }

  const res = await fetch(request, { next: { revalidate: 10000 } });
  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <div className='w-full flex flex-col justify-center'>
      <Results results={results} />
    </div>
  );
}

export default Home;
