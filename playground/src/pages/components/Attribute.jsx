import React from "react";
import AttributeElement from "./AttributeElement";

class Attribute extends React.Component {
   
    render() {
        return (
            <div className="attribute">
                    {
                        this.props.item.map(element => 
                            <AttributeElement element={element}/>
                        )
                    }

            </div> 

        )
    }
}

export default Attribute