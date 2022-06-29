import React from "react";
import AttributeElement from "./AttributeElement";

class Attribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: {},
        };
    }

    componentDidMount() {
        console.log("Attribute this.props.item: ", this.props.item);
    }

    // itemListTempArray -> itemlist - saving empty properties for waitForCart
    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            const itemListTempArray = {};
            this.props.item.map((item) => (itemListTempArray[item.id] = ""));
            this.setState({ itemList: itemListTempArray });
        }
    }

    render() {
        return (
            <div className={this.props.attributeClass}>
                {this.props.item.map((element, index) => (
                    <AttributeElement
                        attributeClass={this.props.attributeClass}
                        cartItem={this.props.cartItem}
                        element={element}
                        itemList={this.state.itemList}
                        key={index}
                        buttonActivity={this.props.buttonActivity}
                    />
                ))}
            </div>
        );
    }
}

export default Attribute;
