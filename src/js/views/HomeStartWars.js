
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
 
import "../../styles/home.css";

 
import StartshipCard from "../component/StarshipCard";
import VehiclesCard from "../component/VehiclesCard";
 
 

const HomeStartWars = () => {
	const { store, actions } = useContext(Context);
	
	return(
		<div className="container" style={{width:"90%"}}>

		
		<h1 className="Starships.tittle" style={{color:"red"}}>Starships</h1>
			<div className="d-flex flex-nowrap" style={{overflowX: "auto" }}>
				{store.startships.map( (item)=> <StartshipCard key={item.uid} uid={item.uid} name={item.name} model={item.model}  starship_class={item.starship_class} manufacturer={item.manufacturer}/> )}
			</div>
		
		{/* <h1 className="Starships.tittle" style={{color:"red"}}>Characters</h1>
			<div className="d-flex flex-nowrap" style={{overflowX: "auto" }}>
				{store.people.map( (item)=> <StartshipCard key={item.uid} uid={item.uid} name={item.name} model={item.model}  starship_class={item.starship_class} manufacturer={item.manufacturer}/> )}
			</div>

		<h1 className="Starships.tittle" style={{color:"red"}}>Vehicles</h1>
			<div className="d-flex flex-nowrap" style={{overflowX: "auto" }}>
				{store.vehicles.map( (item)=> <VehiclesCard key={item.uid} uid={item.uid} name={item.name} model={item.model}  starship_class={item.starship_class} manufacturer={item.manufacturer}/> )}
			</div>

		<h1 className="Starships.tittle" style={{color:"red"}}>Planets</h1>
			<div className="d-flex flex-nowrap" style={{overflowX: "auto" }}>
				{store.planets.map( (item)=> <StartshipCard key={item.uid} uid={item.uid} name={item.name} model={item.model}  starship_class={item.starship_class} manufacturer={item.manufacturer} /> )}
			</div>
	  */}

		</div>
	)
};
export default HomeStartWars