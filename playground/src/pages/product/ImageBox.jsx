import React from "react";
import Loader from "../components/Loader";

class ImageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImage: null,
            thumbnailImages: null
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.images !== prevProps.images) {
            this.setState({ mainImage: this.props.images[0] });
            this.setState({ thumbnailImages: this.props.images });
        }
    }
  
    render() {
        return (
            <>
                <div className="product_images_thumbnails">
                    {this.state.thumbnailImages === null ? (
                        <Loader />
                    ) : (
                        this.state.thumbnailImages.map((item, index) => (
                            <div key={index}>
                                <img
                                    src={item}
                                    alt=""
                                    onClick={() =>
                                        this.setState({ mainImage: item })
                                    }
                                />
                            </div>
                        ))
                    )}
                </div>
                <div className="product_images_image">
                    <img src={this.state.mainImage} alt="" />
                </div>
            </>
        );
    }
}

export default ImageBox;
