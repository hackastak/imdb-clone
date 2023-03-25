const API_KEY = process.env.API_KEY;

async function Home({ searchParams }) {
  const genre = searchParams.genre;
  let request;

  if (genre == undefined) {
    request = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  } else {
    request = `https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}`;
  }

  const res = await fetch(request);
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
