import React from 'react';
import {Outlet} from "react-router-dom";

function Layout({children}) {
    return (
        <>
            <div>
            <Outlet/>
            </div>

            <div className="left-sidebar"/>
            {children}
            <div className="right-sidebar" />
        </>
    );
}

export default Layout;

