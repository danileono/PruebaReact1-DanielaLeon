import React from 'react';


//La prop onFilterChange se usa para pasar una función que se ejecutará cuando el usuario filtre en el input.
const Buscador = ({ onFilterChange }) => {
//handleChange es una función que se ejecuta cada vez que el usuario cambia filtre algo en el input.
  const handleChange = (event) => {
    const filter = event.target.value;
    onFilterChange(filter);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <h3>Busca tu personaje</h3>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Busca por nombre o género"
            aria-label="Search"
            onChange={handleChange}
          />
        </form>
      </div>
    </nav>
  );
};

export default Buscador;
