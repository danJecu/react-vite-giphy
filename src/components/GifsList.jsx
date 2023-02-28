import { useContext } from 'react';
import { GifsContext } from '../contexts/GifsContext';

// Components
import GifItem from './GifItem';

export default function GifsList() {
  const { trendGifs, searchGifs, error } = useContext(GifsContext);

  if (error) {
    return <div className="container">Server error</div>;
  }

  if (searchGifs.length) {
    return (
      <div className="container">
        <div>
          {searchGifs.map((gif) => (
            <GifItem key={gif.id} gif={gif} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      {trendGifs.length ? (
        <div>
          {trendGifs.map((gif) => (
            <GifItem key={gif.id} gif={gif} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
