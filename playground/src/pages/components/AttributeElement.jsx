import React from "react";
import AttributeItem from "./AttributeItem";


//this.props.element.id
//this.props.element.type

class AttributeElement extends React.Component {
   
    render() {
        return (
            <div className="attribute_element">
                <p className="attribute_element_name">{this.props.element.name}:</p>
                <div className="attribute_element_items">
                    {   
                        this.props.element.items.map(item => 
                        <div className={`attribute_element_items_${this.props.element.type}`} >
                            <AttributeItem item={item} />
                        </div>
                            
                        )
                    }
                </div>    
            </div> 

        )
    }
}

export default AttributeElement