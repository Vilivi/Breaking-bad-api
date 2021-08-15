import React from 'react';
import "../../CSS/CSS_Views/menuContainer.css";
import {Menu, MenuItem, ProSidebar, SidebarHeader, SidebarContent} from 'react-pro-sidebar';
import { FaAngleUp, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AppConfigReducer from '../../Tools/ConfigReducer';

const MenuContainer = () => {

    const [reducerState] = AppConfigReducer();
    const {config} = reducerState;

    const menuItemArray = config.map((item, key) => {
        return <MenuItem key={key} icon={item.icon} >
                <Link path to={item.url} >{item.name}</Link>
            </MenuItem>
    });

    const [angle, setAngle] = React.useState(true);
    const changeIcon = () => {
        setAngle(!angle);
    };

    let icon = (angle) ? <FaAngleRight/> : <FaAngleLeft/>;

    return (
        <header className="menuContainer">
            <ProSidebar>
                <SidebarHeader>
                    <div className="header">
                        <div onClick={changeIcon}>{icon}</div>
                        <h1>Breaking Bad</h1>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem icon={<FaAngleUp/>}>
                            <Link exact path to="/" >Root</Link>
                        </MenuItem>
                        {menuItemArray}
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </header>
    );
}

export default MenuContainer;