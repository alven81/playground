import React from "react";

class ImageBox extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            mainImage: this.props.images[0]
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.images !== prevProps.images) {
            this.setState({mainImage: this.props.images[0]})
        }
    }
    render() {
        return (
            <>
                <div className="product_images_thumbnails">
                    {
                        !this.props.images ?

                            <>LOADER</> :

                        this.props.images.map((item, index) => 
                            
                            <div key={index}>
                                <img src={item} alt="" onClick={() => this.setState({mainImage: item})}/>
                            </div>

                        )
                    }
                </div>
                <div className="product_images_image">
                    <img src={this.state.mainImage} alt=""/>
                </div> 
            </>
        )
    }
}

export default ImageBox