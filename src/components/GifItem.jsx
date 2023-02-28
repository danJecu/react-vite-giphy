export default function GifItem({ gif }) {
  return (
    <img
      src={gif.images.downsized_medium.url}
      alt={gif.title}
      className="gif-img"
    />
  );
}
