import { createContext, useEffect, useReducer } from 'react';

export const GifsContext = createContext();

const initialState = {
    trendGifs: [],
    searchGifs: [],
    favoriteGifs: [],
    error: null,
};

const gifsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TRENDING':
            return { ...state, trendGifs: action.payload };
        case 'SET_SEARCH':
            return { ...state, searchGifs: action.payload };
        case 'TOGGLE_FAVORITE': {
            const { gif } = action.payload;
            const index = state.favoriteGifs.findIndex(
                favGif => favGif.id === gif.id
            );
            if (index === -1) {
                // gif is not in favorites, add it
                return {
                    ...state,
                    favoriteGifs: [...state.favoriteGifs, gif],
                };
            } else {
                // gif is in favorites, remove it
                const updatedFavorites = [...state.favoriteGifs];
                updatedFavorites.splice(index, 1);
                return {
                    ...state,
                    favoriteGifs: updatedFavorites,
                };
            }
        }
        case 'SET_ERORR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const GifsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gifsReducer, initialState);

    useEffect(() => {
        const fetchTrendingGifs = async () => {
            try {
                const response = await fetch(
                    `https://api.giphy.com/v1/gifs/trending?api_key=${
                        import.meta.env.VITE_KEY
                    }&limit=30`
                );
                const data = await response.json();
                dispatch({ type: 'SET_TRENDING', payload: data.data });
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error.message });
            }
        };
        fetchTrendingGifs();
    }, []);

    const searchGifsAction = async query => {
        try {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${
                    import.meta.env.VITE_KEY
                }&q=${query}&limit=30`
            );
            const data = await response.json();
            dispatch({ type: 'SET_SEARCH', payload: data.data });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    };

    return (
        <GifsContext.Provider value={{ ...state, searchGifsAction, dispatch }}>
            {children}
        </GifsContext.Provider>
    );
};
