import React, { useState } from 'react';
import classes from './Layout.css';

import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const openSideDrawerHandler = () => {
        setSideDrawerOpen(true);
    }

    const closeSideDrawerHandler = () => {
        setSideDrawerOpen(false);
    }

    return (
        <div>
            <SideDrawer sideDrawerOpen={sideDrawerOpen} close={closeSideDrawerHandler} />
            <NavigationBar open={openSideDrawerHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;