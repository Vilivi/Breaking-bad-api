import React from 'react';
import "../CSS/mainContainer.css";
import MenuContainer from './Views/MenuContainer';
import ViewContainer from './Views/ViewContainer';

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <MenuContainer />
            <ViewContainer />
        </div>
    );
}

export default MainContainer;