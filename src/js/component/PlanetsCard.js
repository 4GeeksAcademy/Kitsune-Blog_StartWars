import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import gatoplanet from "./../../img/gatoplanet.jpg";

const StartshipCard = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(()=>{
        actions.infoPlanets(props.uid)
    },[])

    useEffect(() => {
        if (store.itemsClikeados.includes(props.name)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [store.itemsClikeados]); // Observa los cambios en la lista de favoritos

    const handleAddFavorite = () => {
        if (!isFavorite) {
            actions.buttonFavorite(props.name);
            setIsFavorite(true);
        } else {
            actions.removeFavorite(props.name);
            setIsFavorite(false);
        }
    };

    return (
        <div className="card mx-3" style={{ minWidth: "401px" }}>
            <img src={gatoplanet} className="card-img-top" alt="..." style={{ width: "400px", height: "200px", objectFit: "cover" }} />
            <div className="card-body" style={{ textAlign: "left" }}>
                <h5 className="card-title"><strong>{props.name}</strong></h5>
                <>
                    <p className="card-text">Climate: {props.climate}</p>
                    <p className="card-text">Terrain: {props.terrain}</p>
                    <p className="card-text">Population: {props.population}</p>
                </>
                <Link to={"/planetsInfo/" + props.uid}>
                    <span className="btn btn-outline-primary">Learn more</span>
                </Link>
                <button onClick={handleAddFavorite} className="corazon btn btn-outline-warning" style={{ marginLeft: "210px", fontSize: "20px" }}>
                    {isFavorite ? "♥" : "♡"}
                </button>
            </div>
        </div>
    );
};

export default StartshipCard;

 