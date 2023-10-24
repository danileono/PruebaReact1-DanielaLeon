import { useState } from 'react'
import './index.css'
import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import Banner from './components/Banner'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPersonajes, setFilteredPersonajes] = useState([]);

  return (
    <>
      <main>
        <header className="text-center my-4">
          <Banner />
          <Buscador onFilterChange={setSearchTerm} />
        </header>
        <MiApi personajes={filteredPersonajes.length > 0 ? filteredPersonajes : searchTerm} />
      </main>
    </>
  )
}


export default App
