import React from "react";
import { Link } from "react-router-dom";

class MenuButton extends React.Component {
    render() {
        return (
            <Link to="/">
                <button
                    className="header-nav-button"
                    onClick={() =>
                        this.props.handleSetCategoryOnClick([
                            this.props.index,
                            this.props.menuItem.name,
                        ])
                    }
                >
                    {this.props.menuItem.name}
                </button>
            </Link>
        );
    }
}

export default MenuButton;
