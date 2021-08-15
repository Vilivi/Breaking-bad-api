import React from 'react';
import '../../../CSS/CSS_Views/CSS_Categories/characters.css';
import '../../../CSS/CSS_Views/CSS_Categories/moonLoader.css';
import { useHistory } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';
import useFetch from '../../../Tools/FetchHook';

const Characters = () => {

    const [child, setChild] = React.useState(undefined);
    const data = useFetch("characters", child);

    const history = useHistory();

    const handleClick = (character) => {
        history.push(`character/${character}`);
    };

    React.useEffect(() => {
        if(data) {
            const charactersArray = data.map(character => {
                return (
                    <div key={character.char_id} className="charactersCard">
                        <div className="container">
                            <img alt={character.name} src={character.img}/>
                            <h5>
                                <a onClick={() => { handleClick(character.name) }}>
                                    {character.name}
                                </a>
                            </h5>
                        </div>
                    </div>
                );
            });
            setChild(charactersArray);
        }
    }, [data]);

    return (
        <div className={child ? "characters" : "moonLoader"}>
            {child ? child : <MoonLoader />}
        </div>
    );
}

export default Characters;