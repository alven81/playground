import React from "react";
import { NavLink } from "react-router-dom";
import Category from "../category/Category";

const setActive = ({isActive}) => isActive ? "active-link" : "";

class MenuButton extends React.Component {
	render() {
		return (
				<NavLink
                    className={setActive}
					to={`/${this.props.menuItem.name}`}
					onClick={
						<Category />
					}
				>
					{this.props.menuItem.name}
				</NavLink>
		);
	}
}

export default MenuButton;
