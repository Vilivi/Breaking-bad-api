import React from 'react';
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