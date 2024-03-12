import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import imgVehicles from "./../../img/vehiclesStarWars.jpg";


export const VehiclesInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [vehicle, setVehicle] = useState({});


	useEffect (()=>{
		console.log("Se cargó desde StarshipInfo")
		fetch ("https://www.swapi.tech/api/vehicles/" +  params.vehiclesId) 
		.then((response)=> response.json()) 
		.then((data)=>setVehicle(data.result.properties));
	},[])
	
	return (
		<div className="jumbotron">
			<div className="container">
			<div className="container d-flex"  >
			

			<img src={imgVehicles} className="card-img-top" alt="..." style={{width: "800px", height: "600px", objectFit:"cover"}} />
			<div>
			<h1 className="display-4 text-center"><strong>{vehicle.name}</strong></h1>
			<p className="card-text text-center" style={{marginLeft: "15px"}}>Jamón ipsum pasmarote jodido jamón sidra reconquista ancha es Castilla.. Pero un tío liándola parda pinchito tu chulo dominguera caballero mucho de caramba enróllate y cotilla. Las Rey corriendo amiga los pacotilla, picardía pipas con haciéndose el loco pero reconquista. Nuestra comunidad tus guiri estopa más fútbol la truhán, chulapo y rumbeo Torrente cien gaviotas, chiringuito movida mis gazpacho señor corral, pero farruco duro los Alonso piripi caradura sus salta! Vino rioja gallego.

Entrañas la mala vida mariposita se cortaron. Vino rioja ronda y friolero musculitos vamos con Almodóvar Barça nuestra comunidad sus camello. Dominguera fregona y Real Madrid siesta tus gallego ojos Costa Brava la mala vida la corral pero caramba. De vicio comino calimocho truhán el martes 13 jodido, vaya chollazo pero aquí no hay tomate sus señor Sancho el armario, mis trapicheo se cortaron asturiana una atún litros musculitos calimocho.

Litros torraera sus pasmarote sonrisa. Farra colarse el soñar es gratis la mala vida pero petardazo malla de ballet, botellón las vecinos está pan comido cien gaviotas maneras de vivir los playita. Pero rumbeo chorizo Costa Brava sus chorradas estopa escanciando sidra a jamón y tócate. Resacón manchego las orujo guitarra. Chiquilla mi colacao pero bailarán dominguera soñar es gratis, colarse tu no pega ojo pasan botellón.</p>
			</div>
			</div>
			<hr className="my-4" style={{color: "red", height: "4px"}}/>
			<div class="container text-center" style={{color: "red"}}>
				<div class="row">
					<div class="col">
						<p>Model <br/> {vehicle.model} </p>
					</div>
					<div class="col">
						<p>Vehicle class <br/> {vehicle.vehicle_class}</p>
					</div>
					<div class="col">
						<p>Manufacturer <br/> {vehicle.manufacturer}</p> 
					</div>
					<div class="col">
						<p>passengers <br/> {vehicle.passengers}</p> 
					</div>
					
				</div>
			</div>
		 
			</div>
		</div>
	);
};

VehiclesInfo.propTypes = {
	match: PropTypes.object
};
 