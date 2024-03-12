import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import imgNave from "./../../img/gatopiloto.jpg";

const VehiclesCard = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(()=>{
        actions.infoVehicles(props.uid)
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

    return(
        <>
        <div className="card mx-3" style={{ minWidth: "401px" }}>
            <img src={imgNave} className="card-img-top" alt="..." style={{ width: "400px", height: "200px", objectFit: "cover" }} />
            <div className="card-body" style={{ textAlign: "left" }}>
                <h5 className="card-title"><strong>{props.name}</strong></h5>
                <>
                    <p className="card-text">Manufacturer: {props.manufacturer}</p>
                    <p className="card-text">Model: {props.model}</p>
                    <p className="card-text">Vehicle class: {props.vehicle_class}</p>
                    <p className="card-text">Passengers: {props.passengers}</p>
                </>
                <Link to={"/vehiclesInfo/" + props.uid}>
                    <span className="btn btn-outline-info">Learn more</span>
                </Link>

                <button onClick={handleAddFavorite} className="corazon btn btn-outline-warning" style={{ marginLeft: "210px", fontSize: "20px" }}>
                    {isFavorite ? "♥" : "♡"}
                </button>
            </div>
           
        </div>
        </>
    )
}

export default VehiclesCard