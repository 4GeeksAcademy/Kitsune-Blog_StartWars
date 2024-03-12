import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import dark2 from "./../../img/dark2.jpg";


export const PeopleInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [people, setPeople] = useState({});


	useEffect (()=>{
		console.log("Se cargó desde StarshipInfo")
		fetch ("https://www.swapi.tech/api/people/" +  params.peopleId) 
		.then((response)=> response.json()) 
		.then((data)=>setPeople(data.result.properties));
	},[])
	
	return (
		<div className="jumbotron">
			<div className="container">
			<div className="container d-flex"  >
			

			<img src={dark2} className="card-img-top" alt="..." style={{width: "800px", height: "600px", objectFit:"cover"}} />
			<div>
			<h1 className="display-4 text-center"><strong>{people.name}</strong></h1>
			<p className="card-text text-center" style={{marginLeft: "15px"}}>Bonachón tapas dolores sus mola mazo vamos cien gaviotas y el haciéndose el loco, sangre fría lia con vale pinchito chiringuito un vergüenza pero fabada, canción tus morcilla amiga reconquista a torraera cogió prestado pero Barça charanga. Vino rioja mucho de vendió truhán ronda, la resacón se cortaron chorizo las lia cocido pero asturiana sus tiburón de la noche, piñazo morcilla manchego pasmarote fútbol salir de fiesta pero salta! Mucho de piripi litrona. Tomatito paella con Rey mete una bola y petardazo llega tarde. Truhán se cortaron las a lo hecho, pecho. Real Madrid guiri trae. Guiri lia chulo mucho de movida liándola parda maneras de vivir, y mi llega tarde Rey enchufe a tope. Tus croquetas ronda fiesta caballero collección de y tu tomatito gallego. Musculitos chiringuito una resacón jodido comino a posturitas y copazo Torrente se lo van a dar, mis flamenco escanciando sidra fiesta movida, pero portería las vaya chollazo colegas guiri mi horchata, persiana fabada borrachos como cubas farruco vendió.</p>
			</div>
			</div>
			<hr className="my-4" style={{color: "red", height: "4px"}}/>
			<div class="container text-center" style={{color: "red"}}>
				<div class="row">
					<div class="col">
						<p>Gender <br/> {people.gender} </p>
					</div>
					<div class="col">
						<p>Hair color <br/> {people.hair_color}</p>
					</div>
					<div class="col">
						<p>Birth_year <br/> {people.birth_year}</p> 
					</div>
					<div class="col">
						<p>Eye color <br/> {people.eye_color}</p> 
					</div>
				</div>
			</div>
	
			</div>
		</div>
	);
};

PeopleInfo.propTypes = {
	match: PropTypes.object
};