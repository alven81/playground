import React from "react";
import Loader from "./Loader";

class AttributeItem extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // valueSelected: null
    //         // item: null,
    //         // type: null,
    //         //cartItemArray: null
    //     };
    // }

    isItValueSelected = () => {
        for (let res in this.props.cartItem) {
            //console.log("cartItemArray: ", this.props.cartItem[res]);
            if (this.props.cartItem[res] === this.props.item.id)
                return "selected";
        }
        return "";
    };

    render() {
        return (
            <div>
                {!this.props.item.length &&
                !this.props.type &&
                this.state.valueSelected !== null ? (
                    <Loader />
                ) : (
                    <button
                        disabled={this.props.buttonActivity}
                        onClick={(e) =>
                            this.props.handleOnItemClick(this.props.item.id)
                        }
                        id={this.props.item.id}
                        style={{ backgroundColor: `${this.props.item.value}` }}
                        className={`attribute_element_items_${
                            this.props.type
                        } attribute_element_items_${this.props.type}_${
                            this.props.selectedId[1] === this.props.item.id
                                ? "selected"
                                : ""
                        }${this.isItValueSelected()}
                        `}
                    >
                        <p>
                            {this.props.type === "text"
                                ? this.props.item.value
                                : ""}
                        </p>
                    </button>
                )}
            </div>
        );
    }
}

export default AttributeItem;
