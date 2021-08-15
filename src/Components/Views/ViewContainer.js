import React from 'react';
import '../../CSS/CSS_Views/viewContainer.css';
import {Route, Switch} from 'react-router-dom';
import Accueil from './Accueil';
import Characters from './Categories/Characters';
import Character from './Categories/Character';
import Episodes from './Categories/Episodes';
import Quotes from './Categories/Quotes';

const ViewContainer = () => {
    return (
        <main className="viewContainer">
            <Switch>
                <Route exact path="/" component={Accueil} />
                <Route path="/characters" component={Characters}/>
                <Route path="/episodes" component={Episodes}/>
                <Route path="/quotes" component={Quotes}/>
                <Route path="/character/:name" component={Character} />
            </Switch>
        </main>
    );
}

export default ViewContainer;