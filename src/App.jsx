import { useState } from 'react'
import './index.css'
import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import Banner from './components/Banner'


function App() {
//earchTerm almacena la búsqueda introducida por el usuario en el input del componente Buscador
  const [searchTerm, setSearchTerm] = useState('');
//filteredPersonajes almacena los personajes filtrados
  const [filteredPersonajes, setFilteredPersonajes] = useState([]);


//En el render a Buscador se le pasa la función setSearchTerm como prop, lo q permite al usuario filtrar presonajes.
//Al componente MiApi, se le pasa los personajes filtrados filteredPersonajes

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
