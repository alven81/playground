import React from "react";

class AttributeItem extends React.Component {
   //this.props.item.id
    render() {
        return (
            <>
                    <p style={{backgroundColor: `${this.props.item.value}`}}>{this.props.item.value}</p>
            </> 

        )
    }
}

export default AttributeItem