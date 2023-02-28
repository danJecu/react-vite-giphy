export default function GifItem({ gif }) {
  return (
    <li>
      <img
        src={gif.images.downsized_medium.url}
        alt={gif.title}
        className="gif-img"
      />
    </li>
  );
}
