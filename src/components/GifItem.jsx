import { useContext } from 'react';
import { GifsContext } from '../contexts/GifsContext';

export default function GifItem({ gif, favoriteGifs }) {
  const { dispatch } = useContext(GifsContext);

  const handleFavorite = (gif) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: { gif } });
  };

  return (
    <img
      src={gif.images.downsized_medium.url}
      alt={gif.title}
      id={gif.id}
      onClick={() => handleFavorite(gif)}
      className={
        favoriteGifs.some((f) => f.id === gif.id)
          ? 'gif-img favorite'
          : 'gif-img'
      }
    />
  );
}
