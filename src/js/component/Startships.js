import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import StartshipCard from "./StarshipCard";
 

const Starships = ( ) => {

    const { store, actions } = useContext(Context);


    return (
        <>
            <h1>STARSHIPS DESDE FLUX</h1>
			{store.startships.map( (item)=> <StartshipCard key={item.uid} name={item.name} model={item.model}  starship_class={item.starship_class} manufacturer={item.manufacturer}/> )}

    </>
    )
}

export default Starships;
