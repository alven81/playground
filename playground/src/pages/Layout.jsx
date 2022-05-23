import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";


class Layout extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                    <main>
                        <Outlet />
                    </main>
            </> 
        )
    }
}

  export default Layout