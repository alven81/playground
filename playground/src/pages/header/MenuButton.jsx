import React from "react";
import { NavLink } from "react-router-dom";
import Category from "../category/Category";

const setActive = ({isActive}) => isActive ? "active-link" : "";

class MenuButton extends React.Component {
	render() {
		return (
			<div >
				<NavLink
                    className={setActive}
					to={`/${this.props.menuItem.name}`}
					onClick={
						//console.log(this.props.menuItem, this.props.index)
						<Category categoryName = {window.location.pathname.split("/")[1]}/>
						// this.props.handleSetCategoryOnClick([
						// 	this.props.index,
						// 	this.props.menuItem.name,
						// ])
					}
				>
					{this.props.menuItem.name}
				</NavLink>
			</div>
		);
	}
}

export default MenuButton;
