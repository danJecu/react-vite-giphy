export default function GifItem({ gif }) {
    return (
        <img
            src={gif.images.downsized_medium.url}
            alt={gif.title}
            id={gif.id}
            className='gif-img'
        />
    );
}
