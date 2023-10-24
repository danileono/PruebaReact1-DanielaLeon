import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function MiApi({ personajes }) {
    const [filteredPersonajes, setFilteredPersonajes] = useState([]);
//Cree un estado llamado filteredPersonajes para almacenar los personajes filtrados usando useState

    useEffect(() => {
    const getPersonajes = async () => {

// Dentro del bloque try-catch se manejan posibles errores durante la solicitud a la api
        try {
        const res = await fetch("https://apisimpsons.fly.dev/api/personajes?limit=72&page=1");
        const data = await res.json();
        if (personajes) {
// Uso de filter para filtrar los personajes según el nombre o el género
            const filtered = data.docs.filter( 
            (personaje) =>
                personaje.Nombre.toLowerCase().includes(personajes.toLowerCase()) ||
                personaje.Genero.toLowerCase().includes(personajes.toLowerCase())  
            );

// Uso de sort para ordenar alfabéticamente los personajes por nombre
            filtered.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
            
            setFilteredPersonajes(filtered);
        } else {
// Ordenar alfabéticamente y luego invertir el orden de todos los personajes con reverse
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


// Renderizado de personajes en las cards utilizando un map de "filteredPersonajes"
    return (
    <div className="container">
        <div className="row">
        {filteredPersonajes.map((personaje) => (
//uso de Key para identificar cada personaje 
//asegura que React pueda hacer cambios en la lista de personajes y renderizar solo los que han cambiado en lugar de volver a renderizar toda la lista en cada actualización.
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