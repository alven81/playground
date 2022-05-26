import React from "react"

class MenuButton extends React.Component {

    render() {
        return (
            <button className="header-nav-button">
                {this.props.menuItem.name}
            </button>
        )
    }
}

export default MenuButton