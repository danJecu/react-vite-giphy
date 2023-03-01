import { useContext } from 'react';
import { GifsContext } from '../contexts/GifsContext';

// Components
import GifItem from './GifItem';

export default function GifsList() {
    const { trendGifs, searchGifs, favoriteGifs, error, dispatch } =
        useContext(GifsContext);

    const handleFavorite = gif => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: { gif } });
    };

    if (error) {
        return <div className='container'>Server error</div>;
    }

    if (searchGifs.length) {
        return (
            <div className='container'>
                {searchGifs.map(gif => (
                    <GifItem
                        key={gif.id}
                        gif={gif}
                        handleFavorite={handleFavorite}
                        favoriteGifs={favoriteGifs}
                    />
                ))}
            </div>
        );
    }
    return (
        <>
            {trendGifs.length ? (
                <div className='container'>
                    {trendGifs.map(gif => (
                        <GifItem
                            key={gif.id}
                            gif={gif}
                            handleFavorite={handleFavorite}
                            favoriteGifs={favoriteGifs}
                        />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
