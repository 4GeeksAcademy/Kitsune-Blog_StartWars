const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      startships: [],
      vehicles: [],
      people: [],
      planets: [],

      itemsClikeados: [],
    },
    actions: {
  

      infoPeople: (uid) => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
          .then((response) => response.json())
          .then((data) => {
            let new_people = getStore().people.map((people) => {
              if (people.uid === uid) {
                return Object.assign(people, data.result);
              } else return people;
            });
            setStore({ people: new_people });
            console.log(new_people)
          });
      },



      infoPlanets: (uid) => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
          .then((response) => response.json())
          .then((data) => {
            let new_planets = getStore().planets.map((planet) => {
              if (planet.uid === uid) {
                return Object.assign(planet, data.result);
              } else return planet;
            });
            setStore({ planets: new_planets });
          });
      },

      infoVehicles: (uid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
          .then((response) => response.json())
          .then((data) => {
            let new_vehicles = getStore().vehicles.map((vehicle) => {
              if (vehicle.uid === uid) {
                return Object.assign(vehicle, data.result);
              } else return vehicle;
            });
            setStore({ vehicles: new_vehicles });
          });
      },


      loadVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((response) => response.json())
          .then((data) => setStore({ vehicles: data.results }));
      },

      loadPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => setStore({ people: data.results }));
      },

      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((response) => response.json())
          .then((data) => setStore({ planets: data.results }));
      },

      buttonFavorite: (nombreNave) => {
        const store = getStore();
        if (store.itemsClikeados.includes(nombreNave)) {
          //Elimina el elemento de la lista
          setStore({
            itemsClikeados: store.itemsClikeados.filter(
              (repetido) => repetido != nombreNave
            ),
          });
        } else {
          //Agrega el elemento a la lista
          setStore({ itemsClikeados: [...store.itemsClikeados, nombreNave] });
        }
      },
      removeFavorite: (item) => {
        const store = getStore();
        const updatedFavorites = store.itemsClikeados.filter(
          (favorite) => favorite !== item
        );
        setStore({ itemsClikeados: updatedFavorites });
      },
    },
  };
};

export default getState;
