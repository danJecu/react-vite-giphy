import { GifsProvider } from './contexts/GifsContext';
import GifsList from './components/GifsList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <GifsProvider>
        <Navbar />
        <GifsList />
      </GifsProvider>
    </div>
  );
}

export default App;
