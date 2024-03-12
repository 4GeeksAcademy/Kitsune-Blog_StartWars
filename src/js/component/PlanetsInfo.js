import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import yoda from "./../../img/yoda2.jpg";


export const PlanetsInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [planet, setPlanet] = useState({});


	useEffect (()=>{
		console.log("Se cargó desde StarshipInfo")
		fetch ("https://www.swapi.tech/api/planets/" +  params.planetsId) 
		.then((response)=> response.json()) 
		.then((data)=>setPlanet(data.result.properties));
	},[])
	
	return (
		<div className="jumbotron">
			<div className="container">
			<div className="container d-flex"  >
			

			<img src={yoda} className="card-img-top" alt="..." style={{width: "800px", height: "600px", objectFit:"cover"}} />
			<div>
			<h1 className="display-4 text-center"><strong>{planet.name}</strong></h1>
			<p className="card-text text-center" style={{marginLeft: "15px"}}>Resaca sangre fría gordinflón sus maneras de vivir tomatito, eso no vale y vamos los pasan paliza vergüenza, talego torraera cara de malo Almodóvar pero tu a lo hecho, pecho. Botellón jodido cogió prestado más fútbol por la cara tus flamenco. Pero señorita reconquista los dominguera salmorejo farruco enchufe, litros y guitarra un tapas clásico asturiana cien gaviotas. Comino ojos pero está pan comido mi a tope. Paella escanciando sidra mis la mala vida amiga.
			
Colacao morcilla armando gresca tapas como Camarón salta!, mucho de ancha es Castilla. Piñazo pero pasmarote año un Almodóvar. Cocido charanga tu flamenco picardía y estupendo un friqui, trae jodido paliza mis el armario turrón pinchito y a fiesta Sancho torraera tía, croquetas pasan bailarán comino, pero las madrileña la mala vida escanciando sidra Torrente. Los guiri quinto pino a diestro y siniestro pero mi entra que te entra liándola parda gorilla las tomatito roña.</p>
			</div>
			</div>
			<hr className="my-4" style={{color: "red", height: "4px"}}/>
			<div class="container text-center" style={{color: "red"}}>
				<div class="row">
					<div class="col">
						<p>Climate <br/> {planet.climate} </p>
					</div>
					<div class="col">
						<p>Terrain <br/> {planet.terrain}</p>
					</div>
					<div class="col">
						<p>Population <br/> {planet.population}</p> 
					</div>
					
				</div>
			</div>
		 
			</div>
		</div>
	);
};

PlanetsInfo.propTypes = {
	match: PropTypes.object};

  