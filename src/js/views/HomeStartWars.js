
import React, { useContext } from "react";
import { Context } from "../store/appContext";
 
import "../../styles/home.css";

 

import VehiclesCard from "../component/VehiclesCard";
import PeopleCard from "../component/PeopleCard";
import PlanetsCard from "../component/PlanetsCard"


const HomeStartWars = () => {
	const { store } = useContext(Context);
	
	return(
		<div className="container" style={{width:"90%"}}>

		
		<h1 className="Characters.tittle" style={{color:"red"}}>Characters</h1>
			<div className="d-flex flex-nowrap" style={{overflowX: "auto" }}>
				{store.people.map( (item)=>  <PeopleCard key={item.uid} uid={item.uid} name={item.name} gender={item.properties?.gender}  hair_color={item.properties?.hair_color} birth_year={item.properties?.birth_year} eye_color={item.properties?.eye_color}/> )}
			</div>

		<h1 className="Vehicles.tittle" style={{color:"red"}}>Vehicles</h1>
			<div className="d-flex flex-nowrap" style={{overflowX: "auto" }}>
				{store.vehicles.map( (item)=>  <VehiclesCard key={item.uid} uid={item.uid} name={item.name} model={item.properties?.model}  vehicle_class={item.properties?.vehicle_class} manufacturer={item.properties?.manufacturer} passengers={item.properties?.passengers}/> )}
			</div>

		<h1 className="Planets.tittle" style={{color:"red"}}>Planets</h1>
			<div className="d-flex flex-nowrap" style={{overflowX: "auto" }}>
				{store.planets.map( (item)=>  <PlanetsCard key={item.uid} uid={item.uid} name={item.name} terrain={item.properties?.terrain} climate={item.properties?.climate} population={item.properties?.population}/> )}
	 
			</div>
		</div>
	)
};
export default HomeStartWars