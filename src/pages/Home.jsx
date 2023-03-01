import { useContext } from 'react';
import { GifsContext } from '../contexts/GifsContext';

// Components
import GifItem from '../components/GifItem';

export default function Home() {
  const { trendGifs, searchGifs, favoriteGifs, error } =
    useContext(GifsContext);

  if (error) {
    return <div className="container">Server error</div>;
  }

  if (searchGifs.length) {
    return (
      <div className="container">
        {searchGifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} favoriteGifs={favoriteGifs} />
        ))}
      </div>
    );
  }
  return (
    <>
      {trendGifs.length ? (
        <div className="container">
          {trendGifs.map((gif) => (
            <GifItem key={gif.id} gif={gif} favoriteGifs={favoriteGifs} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
