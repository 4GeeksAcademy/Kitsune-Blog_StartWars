import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehiclesCard = (props)=> {

    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const [nave, setNave] = useState({});
    const params = useParams();

    useEffect(() => {
        actions.loadStartships();
    }, []);

    useEffect(() => {
        // Llama a buttonFavorite cuando isFavorite cambia
        if (isFavorite !== undefined && nave.name !== undefined) {
            actions.buttonFavorite(nave.name);
        }
    }, [isFavorite]); // Observa los cambios en isFavorite
    
    const handleAddFavorite = () => {
        // Cambia el estado de favorito al opuesto del estado actual
        setIsFavorite(prevIsFavorite => !prevIsFavorite);

        // Llama a la función para agregar/quitar de favoritos con el nombre de la nave
        actions.buttonFavorite(props.name);
    };

    return(
        <>
        <div className="card mx-3" style={{minWidth: "250px", maxWidth: "300px" }}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body" style={{textAlign:"left"}}>
                <h5 className="card-title">{props.name}</h5>
                <h5 className="card-title">{props.uid}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <Link to={"/vehiclesInfo/" + props.uid}>
                    <span className="btn btn-outline-info">Learn more</span>
                </Link>

                <Link to={"/"}>
                    <button onClick={handleAddFavorite} className="corazon btn btn-primarybtn btn-outline-warning"  style={{marginLeft:"70px", fontSize:"20px"}}> {isFavorite ? "♥" : "♡"}  </button>
                </Link>
            </div>
           
        </div>
        </>
    )
}

export default VehiclesCard