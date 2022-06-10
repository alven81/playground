import React from "react";
import Loader from "./Loader";

class AttributeItem extends React.Component {

	isItValueSelected = () => {
		for (let res in this.props.cartItem) {
			if (this.props.cartItem[res] === this.props.item.id)
				return "selected";
		}
		return "";
	};

	render() {
		return (
			<div>
				{!this.props.item.length &&
				!this.props.type &&
				this.state.valueSelected !== null ? (
					<Loader />
				) : (
					<button
						disabled={this.props.buttonActivity}
						onClick={(e) => {
							e.stopPropagation();
							this.props.handleOnItemClick(this.props.item.id);
						}}
						id={this.props.item.id}
						style={
							this.props.type === "text"
								? { backgroundColor: "" }
								: {
										backgroundColor: `${this.props.item.value}`,
								  }
						}
						className={`${
							this.props.attributeClass
						}_element_items_${this.props.type} ${
							this.props.attributeClass
						}_element_items_${this.props.type}_${
							this.props.selectedId[1] === this.props.item.id
								? "selected"
								: ""
						}${this.isItValueSelected()}
                        `}
					>
						<p>
							{this.props.type === "text"
								? this.props.item.value
								: ""}
						</p>
					</button>
				)}
			</div>
		);
	}
}

export default AttributeItem;
