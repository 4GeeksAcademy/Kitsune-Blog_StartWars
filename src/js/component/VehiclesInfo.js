import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

 

	const [vehicle, setVehicle] = useState({});


	useEffect (()=>{
		console.log("Se cargó desde VehiclesInfo")
		fetch ("https://www.swapi.tech/api/vehicles/" +  params.vehiclesId) 
		.then((response)=> response.json()) 
		.then((data)=>setVehicle(data.result.properties));
	},[])
	
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {params.vehiclesId}</h1>

			<hr className="my-4" />

			
			<p>Model: {vehicle.model} </p>
			<p>Vehicleclass: {vehicle.vehicle_class}</p>
			<p>Manufacturer: {vehicle.manufacturer}</p> 
	

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

VehiclesInfo.propTypes = {
	match: PropTypes.object
};
 