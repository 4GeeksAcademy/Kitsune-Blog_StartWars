import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import gatoPeople from "./../../img/gatostarwars.jpg";

const PeopleCard = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
  
    useEffect(()=>{
        actions.infoPeople(props.uid)
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
            <img src={gatoPeople} className="card-img-top" alt="..." style={{ width: "400px", height: "200px", objectFit: "cover" }} />
            <div className="card-body" style={{ textAlign: "left" }}>
                <h5 className="card-title"><strong>{props.name}</strong></h5>
                <>
                    <p className="card-text">Gender: {props.gender}</p>
                    <p className="card-text">Hair color: {props.hair_color}</p>
                    <p className="card-text">Birth year: {props.birth_year}</p>
                    <p className="card-text">Eye color: {props.eye_color}</p>
                </>
                <Link to={"/peopleInfo/" + props.uid}>
                    <span className="btn btn-outline-primary">Learn more</span>
                </Link>
                <button onClick={handleAddFavorite} className="corazon btn btn-outline-warning" style={{ marginLeft: "210px", fontSize: "20px" }}>
                    {isFavorite ? "♥" : "♡"}
                </button>
            </div>
        </div>
			
    );
};

export default PeopleCard;