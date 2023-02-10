import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/AppContextProvider';
import Character from '../components/Character';
import logo from '../assets/images/Logo.svg';

const TheCast = () => {
    const { characters } = useContext(AppContext);

    const charactersData = characters[0];
    const loadingStatus = characters[1];

    return (
        <div className="cast">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="castContent">
                <div className="castTitle">
                    <h1>The Cast</h1>
                </div>

                <div className="castCharacters">
                    {
                        !loadingStatus ?
                        (charactersData && charactersData.map((data) => {
                            return <Link to={`/cast/${data.id}`} key={data.id} className="link">
                                <Character data={data} />
                            </Link>
                        })) : <p className="loading">Loading...</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default TheCast;