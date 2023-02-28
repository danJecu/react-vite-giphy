import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import { GifsContext } from '../contexts/GifsContext';

export default function Navbar() {
  const { searchGifsAction } = useContext(GifsContext);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(e.target.value);
    searchGifsAction(newQuery);
  };

  return (
    <header className="navbar">
      <h1 className="logo">Giphy</h1>
      <div className="navbar-input">
        <input
          value={query}
          type="text"
          placeholder="Input text"
          onChange={handleInputChange}
        />
      </div>
      {/* <ul className="navbar-tabs">
        <li key="home">
          <Link to="/">Home</Link>
        </li>
        <li key="favorites">
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul> */}
    </header>
  );
}
