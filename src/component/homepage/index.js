import React from 'react';

//material ui
import CssBaseline from '@material-ui/core/CssBaseline';

//Routes
import {Switch, Route, Redirect} from 'react-router-dom'
import routes from '../../routes'

//Sibling components
import SideDrawer from './SideDrawer'
import Navbar from './Navbar'


//create Switch routes
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);


const MiniDrawer = () => {
    
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="root">
      <CssBaseline />
      <Navbar 
        toggleOpen={handleDrawerOpen}
        open={open}
      />
      <SideDrawer 
        toggleClose={handleDrawerClose}
        open={open}
      />
      <main className="content">
        <div className="tool-bar" />
        {switchRoutes}
      </main>
    </div>
  );
}

export default MiniDrawer