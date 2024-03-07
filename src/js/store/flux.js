const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			startships: [
				{
					model: "DS-1 Orbital Battle Station",
					starship_class: "Deep Space Mobile Battlestation",
					manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
					name: "Death Star"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadStartships: () => {
				console.log("Se cargó desde flux")
				fetch ("https://www.swapi.tech/api/starships/") 
				.then((response)=> response.json()) 
				.then((data)=>setStore({ startships: data.results }));
			},
		}
	};
};

export default getState;
