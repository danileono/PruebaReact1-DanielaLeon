import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function MiApi({ personajes }) {
    const [filteredPersonajes, setFilteredPersonajes] = useState([]);

    useEffect(() => {
    const getPersonajes = async () => {
        try {
        const res = await fetch("https://apisimpsons.fly.dev/api/personajes?limit=72&page=1");
        const data = await res.json();
        if (personajes) {
            const filtered = data.docs.filter(
            (personaje) =>
                personaje.Nombre.toLowerCase().includes(personajes.toLowerCase()) ||
                personaje.Genero.toLowerCase().includes(personajes.toLowerCase())
            );

            // Ordenar alfabéticamente los personajes filtrados por nombre
            filtered.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
            
            setFilteredPersonajes(filtered);
        } else {
            // Ordenar alfabéticamente y luego invertir el orden de todos los personajes
            data.docs.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
            data.docs.reverse();
            setFilteredPersonajes(data.docs);
        }
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    }

    getPersonajes();
    }, [personajes]);

    return (
    <div className="container">
        <div className="row">
        {filteredPersonajes.map((personaje) => (
            <div key={personaje._id} className="col-md-4 mb-4">
            <div className="card">
                <img src={personaje.Imagen} alt={personaje.Nombre} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title"><strong>Nombre: </strong>{personaje.Nombre}</h5>
                <h6 className="card-title"><strong>Género: </strong>{personaje.Genero}</h6>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}



export default MiApi;