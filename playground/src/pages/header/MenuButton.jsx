import React from "react";
import { NavLink } from "react-router-dom";

class MenuButton extends React.Component {
    render() {
        return (
            <NavLink to={`/${this.props.menuItem.name}`}                    
                    onClick={() =>
                        this.props.handleSetCategoryOnClick([
                            this.props.index,
                            this.props.menuItem.name,
                        ])
                    }
                >
                    {this.props.menuItem.name}
            </NavLink>
        );
    }
}

export default MenuButton;
