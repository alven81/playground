import React from "react";

class ImageSwitcher extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
           
    //     };
    // }

    componentDidMount() {
        console.log("start component");
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.images !== prevProps.images) {
    //         this.setState({ mainImage: this.props.images[0] });
    //     }
    // }
    render() {
        return (
            <>
                <div>
                    {!this.props.images === null ? (
                        <>LOADER</>
                    ) : (
                        <img src={this.props.images[0]} alt="" />
                    )}
                </div>
                <div className="product_images_image">
                    
                </div>
            </>
        );
    }
}

export default ImageSwitcher;
