 /* this.props.data.map(item => <div className="question-text" dangerouslySetInnerHTML={{__html: item.description}}/>) */
 import React from "react";
import Color from "../components/Color";
import Name from "../components/Name";
import Price from "../components/Price";
import Size from "../components/Size";

class Product extends React.Component {
   
    constructor (props) {
        super(props);
        this.state = {
            //itemIndex = useParams().id
        }

    }

    render() {
        return (
            <div className="product container">
                <div className="product_images">
                    <div className="product_images_thumbnails">
                        thumb{this.props.item}
                    </div>
                    <div className="product_images_image">
                        image
                    </div>
                </div>    
                <div className="product_info">
                    <Name className="product_info_name"/>
                    <Size className="product_info_size"/>
                    <Color className="product_info_color"/>
                    <Price className="product_info_price"/>
                    <button className="product_info_button">Add to cart</button>
                    <p className="product_info_description">Description</p>
                </div>
            </div>
        )
    }
}

export default Product