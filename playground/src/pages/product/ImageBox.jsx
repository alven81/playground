import React from "react";

class ImageBox extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            mainImage: this.props.images[0],
            setImages: null
        }
    }

    componentDidMount() {
        this.setState({setImages: this.props.images});
        console.log("images", this.state.setImages);
    }

    componentDidUpdate(prevProps) {
        if (this.props.images !== prevProps.images) {
            this.setState({mainImage: this.props.images[0]})
            //this.setState({setImages: this.props.images});
        }
    }
    render() {
        return (
            <>
                <div className="product_images_thumbnails">
                    {
                    (this.state.setImages === null) ?

                            <>LOADER</> :

                        this.state.setImages.map((item, index) => 
                            
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