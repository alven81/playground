import React from "react";

class ImageSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           imageItem: 0
        };
    }

    // componentDidMount() {

    //     console.log("start component");
    // }

    handleListImageRight() {
        this.setState({imageItem: this.state.imageItem + 1});
        if (this.state.imageItem === this.props.images.length-1) {
            this.setState({imageItem: 0});
        }
    }

    handleListImageLeft() {
        this.setState({imageItem: this.state.imageItem - 1});
        if (this.state.imageItem === 0) {
            this.setState({imageItem: this.props.images.length-1})
        }
    }

    render() {
        return (
            <>
                <div className="cart_product_image_picture">
                    {!this.props.images === null ? (
                        <>LOADER</>
                    ) : (
                        <img src={this.props.images[this.state.imageItem]} alt="" />
                        
                    )}
                    <div className="cart_product_image_buttons">
                        <button onClick={() => this.handleListImageLeft()} />
                        <button onClick={() => this.handleListImageRight()}/>
                    </div>
                </div>
                
            </>
        );
    }
}

export default ImageSwitcher;
