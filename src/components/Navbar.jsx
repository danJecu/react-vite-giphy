import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GifsContext } from '../contexts/GifsContext';

export default function Navbar() {
    const { searchGifsAction } = useContext(GifsContext);
    const [selectedLink, setSelectedLink] = useState('/');
    const [query, setQuery] = useState('');

    const handleInputChange = e => {
        const newQuery = e.target.value;
        setQuery(e.target.value);
        searchGifsAction(newQuery);
    };

    const handleLinkClick = event => {
        const url = new URL(event.target.href);

        const path = url.pathname;

        setSelectedLink(path);
    };

    return (
        <header className='navbar'>
            <h1 className='logo'>Giphy</h1>
            <div className='navbar-input'>
                <input value={query} type='text' onChange={handleInputChange} />
            </div>
            <ul className='navbar-tabs'>
                <li key='home'>
                    <Link
                        to='/'
                        className={selectedLink === '/' ? 'selected-link' : '/'}
                        onClick={handleLinkClick}
                    >
                        Home
                    </Link>
                </li>
                <li key='favorites'>
                    <Link
                        to='/favorites'
                        className={
                            selectedLink === '/favorites' ? 'selected-link' : ''
                        }
                        onClick={handleLinkClick}
                    >
                        Favorites
                    </Link>
                </li>
            </ul>
        </header>
    );
}
