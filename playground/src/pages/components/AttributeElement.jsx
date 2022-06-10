import React from "react";
import { connect } from "react-redux";
import AttributeItem from "./AttributeItem";
import { waitForCart } from "../../store/actions/actions";
import Loader from "./Loader";

class AttributeElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: [],
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemList !== prevProps.itemList)
            this.props.waitForCart(this.props.itemList);
    }

    handleOnItemClick = (e) => {
        this.setState({ selectedId: [this.props.element.id, e] });
        this.setItemListProperty(this.props.element.id, e);
        //console.log("item click",[this.props.element.id, e]);
    };

    setItemListProperty = (itemId, itemResult) => {
        //console.log(this.props.itemList);
        let tempItem = this.props.itemList;
        tempItem[itemId] = itemResult;
        this.props.waitForCart(tempItem);
    };

    render() {
        return (
            <div className={`${this.props.attributeClass}_element`}>
                <p className={`${this.props.attributeClass}_element_name`}>
                    {this.props.element.name}:
                </p>
                <div className={`${this.props.attributeClass}_element_items`}>
                    {!this.props.element.items.length ? (
                        <Loader />
                    ) : (
                        this.props.element.items.map((item, index) => (
                            <AttributeItem
                                attributeClass={this.props.attributeClass}
                                buttonActivity={this.props.buttonActivity}
                                cartItem={this.props.cartItem}
                                key={index}
                                selectedId={this.state.selectedId}
                                item={item}
                                type={this.props.element.type}
                                handleOnItemClick={this.handleOnItemClick}
                            />
                        ))
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    waitForCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeElement);
