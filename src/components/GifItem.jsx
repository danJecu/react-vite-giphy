export default function GifItem({ gif, handleFavorite, favoriteGifs }) {
    return (
        <img
            src={gif.images.downsized_medium.url}
            alt={gif.title}
            id={gif.id}
            onClick={() => handleFavorite(gif)}
            className={
                favoriteGifs.some(f => f.id === gif.id)
                    ? 'gif-img favorite'
                    : 'gif-img'
            }
        />
    );
}
