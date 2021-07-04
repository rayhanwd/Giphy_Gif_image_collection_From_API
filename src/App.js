import React,{useState, createContext} from 'react';
import './App.css';
import Home from './Pages/Home';
export const SearchContext = createContext();
// https://api.giphy.com/v1/gifs/search?q=trading&api_key=il5MDqwSzoS16i6I0aYfVLw0jp7FxUUc

function App() {

  const [search, setSearch] = useState();
  return (
    <SearchContext.Provider value={[search, setSearch]}>
    <Home />
    </SearchContext.Provider>
  );
}

export default App;
