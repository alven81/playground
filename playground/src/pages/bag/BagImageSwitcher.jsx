import React from "react";
import Loader from "../components/Loader";

class BagImageSwitcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageItem: 0,
		};
	}

	render() {
		return (
			<>
				<div className="bag_product_image_picture">
					{!this.props.images === null ? (
						<Loader />
					) : (
						<img
							src={this.props.images[this.state.imageItem]}
							alt=""
						/>
					)}
				</div>
			</>
		);
	}
}

export default BagImageSwitcher;
