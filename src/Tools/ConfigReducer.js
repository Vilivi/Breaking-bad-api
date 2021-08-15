import React from 'react';
import { FaChild, FaThList, FaAlignCenter } from 'react-icons/fa';

const baseURL = "https://www.breakingbadapi.com/api/";

const config = [
    {
        name: "Characters",
        url: `${baseURL}characters`,
        icon: <FaChild/>
    },
    {
        name: "Episodes",
        url: `${baseURL}episodes`,
        icon: <FaThList/>
    },
    {
        name: "Quotes",
        url: `${baseURL}quotes`,
        icon: <FaAlignCenter/>
    }
]; 

const initialValue = {
    config, 
    baseURL
}; 

const reducer = (state, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}; 

const AppConfigReducer = () => {
    const [reducerState, reducerAction] = React.useReducer(reducer, initialValue);
    return [reducerState, reducerAction];
}

export default AppConfigReducer;
