import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const characters = useFetch('https://rickandmortyapi.com/api/character');
    const locations = useFetch('https://rickandmortyapi.com/api/location');
    const episodes = useFetch('https://rickandmortyapi.com/api/episode');

    console.log(locations);

    return (
        <AppContext.Provider value={{characters, locations, episodes}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;