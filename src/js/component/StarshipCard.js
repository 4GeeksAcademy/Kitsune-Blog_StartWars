import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import imgNave from "./../../img/gatopiloto.jpg";

const StartshipCard = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const params = useParams();
    const [nave, setNave] = useState({});

    useEffect(() => {
        console.log("Se cargó desde StarshCard");
        fetch(`https://www.swapi.tech/api/starships/${params.uid}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching data: " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                if (data.result) {
                    setNave(data.result.properties);
                } else {
                    throw new Error("Error fetching data: Invalid response format");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

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
            <img src={imgNave} className="card-img-top" alt="..." style={{ width: "400px", height: "200px", objectFit: "cover" }} />
            <div className="card-body" style={{ textAlign: "left" }}>
                <h5 className="card-title"><strong>{props.name}</strong></h5>
                <>
                    <p className="card-text">Manufacturer: {nave.manufacturer}</p>
                    <p className="card-text">Model: {nave.model}</p>
                    <p className="card-text">Starship class: {nave.starship_class}</p>
                    <p className="card-text">Passengers: {nave.passengers}</p>
                </>
                <Link to={"/starshipsInfo/" + props.uid}>
                    <span className="btn btn-outline-info">Learn more</span>
                </Link>
                <button onClick={handleAddFavorite} className="corazon btn btn-outline-warning" style={{ marginLeft: "210px", fontSize: "20px" }}>
                    {isFavorite ? "♥" : "♡"}
                </button>
            </div>
        </div>
    );
};

export default StartshipCard;