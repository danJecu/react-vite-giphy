import { useContext } from 'react';
import { GifsContext } from '../contexts/GifsContext';

// Components
import GifItem from './GifItem';

export default function GifsList() {
  const { trendGifs, error } = useContext(GifsContext);

  if (error) {
    return <div>Server error</div>;
  }

  return (
    <>
      {trendGifs.length ? (
        <ul>
          {trendGifs.map((gif) => (
            <GifItem key={gif.id} gif={gif} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
