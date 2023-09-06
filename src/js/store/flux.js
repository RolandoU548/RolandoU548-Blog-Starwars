const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    },
    actions: {
      loadPeople: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people");
          if (!response.ok) throw new Error("Error al obtener los datos");
          const data = await response.json();
          setStore({ people: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      loadPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets");
          if (!response.ok) throw new Error("Error al obtener los datos");
          const data = await response.json();
          setStore({ planets: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      loadVehicles: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles");
          if (!response.ok) throw new Error("Error al obtener los datos");
          const data = await response.json();
          setStore({ vehicles: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      addFavorite: (object, tipo) => {
        const store = getStore();
        setStore({
          favorites: [...store.favorites, { ...object, type: tipo }]
        });
      },
      removeFavorite: nombre => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter(favorite => favorite.name != nombre)
        });
      }
    }
  };
};

export default getState;
