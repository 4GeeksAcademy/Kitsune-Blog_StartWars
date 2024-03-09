const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			

			startships: [],
			vehicles: [],
			people: [],
			planets: [],
		 
			itemsClikeados: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },


			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// },

			
			loadStartships: () => {
				fetch ("https://www.swapi.tech/api/starships/") 
				.then((response)=> response.json()) 
				.then((data)=>setStore({ startships: data.results }));
			 
			},

			loadVehicles: () => {
				fetch ("https://www.swapi.tech/api/vehicles/")
				.then((response)=> response.json())
				.then((data)=>setStore({vehicles: data.results}))
			},

			loadPeople: () => {
				fetch ("https://www.swapi.tech/api/people/")
				.then((response)=> response.json())
				.then((data)=>setStore({people: data.results}))
			},

			loadPlanets: () => {
				fetch ("https://www.swapi.tech/api/planets/")
				.then((response)=> response.json())
				.then((data)=>setStore({planets: data.results}))
			},

			buttonFavorite:(nombreNave)=>{  
				const store = getStore();
				if (store.itemsClikeados.includes(nombreNave)){
					//Elimina el elemento de la lista
					setStore({itemsClikeados: store.itemsClikeados.filter((repetido) => repetido != nombreNave) });
				} else {
					//Agrega el elemento a la lista
					setStore({itemsClikeados: [...store.itemsClikeados, nombreNave] });
				}
			},
			removeFavorite: (item) => {
				const store = getStore();
				const updatedFavorites = store.itemsClikeados.filter(favorite => favorite !== item);
				setStore({ itemsClikeados: updatedFavorites });
			}
			
		}
	};
};

export default getState;
