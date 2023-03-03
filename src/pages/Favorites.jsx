import { useContext } from 'react';
import { GifsContext } from '../contexts/GifsContext';

// Components
import GifItem from '../components/GifItem';

export default function Favorites() {
  const { favoriteGifs, error } = useContext(GifsContext);

  if (error) {
    return <div className="container">Server error</div>;
  }

  return (
    <div className="container">
      {favoriteGifs.length ? (
        <div className="container">
          {favoriteGifs.map((gif) => (
            <GifItem key={gif.id} gif={gif} favoriteGifs={favoriteGifs} />
          ))}
        </div>
      ) : (
        <div>
          <h1>NO FAVORITE GIFS</h1>
          <img
            src="https://media.giphy.com/media/xUNd9Zb2FY1WUXy8WQ/giphy.gif"
            alt="no favorite gifs"
            className="gif-default"
          />
        </div>
      )}
    </div>
  );
}
