import './App.css';

import { useMovies } from './customHooks/useMovies';
import { Movies } from './components/ListMovies';

function App() {
  const { movies } = useMovies();

  return (
    <div>
      <header>
        <h1>Buscador de peliculas</h1>

        <form className="form">
          <input placeholder="Avengers, Harry Potter..." />
          <button type="submit"> Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
