import { useContext } from 'react';
import { GifsContext } from '../contexts/GifsContext';

// Components
import GifItem from './GifItem';

export default function GifsList() {
    const { trendGifs, searchGifs, error, dispatch } = useContext(GifsContext);

    const handleFavorite = id => {
        const gif =
            searchGifs.find(g => g.id === id) ||
            trendGifs.find(g => g.id === id);
        const isFavorite = favoriteGifs.some(f => f.id === id);
        if (isFavorite) {
            dispatch({ type: 'REMOVE_FAVORITE', payload: id });
        } else {
            dispatch({ type: 'ADD_FAVORITE', payload: gif });
        }
    };

    if (error) {
        return <div className='container'>Server error</div>;
    }

    if (searchGifs.length) {
        return (
            <div className='container'>
                {searchGifs.map(gif => (
                    <GifItem key={gif.id} gif={gif} />
                ))}
            </div>
        );
    }
    return (
        <>
            {trendGifs.length ? (
                <div className='container'>
                    {trendGifs.map(gif => (
                        <GifItem key={gif.id} gif={gif} />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
