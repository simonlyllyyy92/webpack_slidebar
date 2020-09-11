import React from 'react'
import clsx from 'clsx';

//material ui
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';

//routes
import routes from '../../routes'
import { NavLink } from "react-router-dom";

//images
import bgImage from '../../assets/sidebar-2.jpg'


// core components

const SideDrawer = ({toggleClose, open}) => {

    const activedRoute = (routeName) => {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }

    const lists = (
        <List>
        {routes.map((prop, key) => {
            // console.log(prop)
            let listItemClasses = clsx({
                "hightlight_bar": activedRoute(prop.layout + prop.path)
            });
            // console.log(classes)
            const whiteFontClasses = clsx({
                "white_font": activedRoute(prop.layout + prop.path)
            });
            return (
            <NavLink
                to={prop.layout + prop.path}
                className="NavLink_item"
                activeClassName="active"
                key={key}
            >
                <ListItem button className={clsx("NavLink_button",listItemClasses)}>
                    <ListItemIcon>
                    {typeof prop.icon === "string" ? (
                        <InboxIcon className = {clsx("icon_color", whiteFontClasses)}/> 
                    ) : (
                        <prop.icon
                            className={clsx("icon_color",whiteFontClasses)}
                        />
                    )}
                    </ListItemIcon>
                    
                    <ListItemText
                        primary={prop.name}
                        className={clsx("NavLink_text", whiteFontClasses)}
                        disableTypography={true}
                    />
                </ListItem>
            </NavLink>
            );
        })}
    </List>
    )

    return (
        <Drawer
            variant="permanent"
            className={clsx("drawer", {
            "drawer-open": open,
            "drawer-close": !open,
            })}
            classes={{
            paper: clsx({
                "drawer-open": open,
                "drawer-close": !open,
            }),
            }}
        >
            <div className="tool-bar">
                <IconButton onClick={toggleClose}>
                    <ChevronLeftIcon className="icon_color"/>
                </IconButton>
            </div>
            <Divider className="divline_color"/>
            {lists}
            <div
              className="NavLink_background"
              style={{ backgroundImage: "url(" + bgImage + ")" }}
            />
        </Drawer>
    )
}

export default SideDrawer