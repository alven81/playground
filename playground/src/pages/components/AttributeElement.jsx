import React from "react";
import { connect } from "react-redux";
import AttributeItem from "./AttributeItem";
import { waitForCart } from "../../store/actions/actions";


class AttributeElement extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            selectedId: [],
            itemList: this.props.itemList
        }
    }

    componentDidMount() {
        this.setState({itemList: this.props.itemList});
    }

    componentDidUpdate(prevProps) {
        if (this.state.itemList !== prevProps.itemList)
        this.props.waitForCart(this.state.itemList);
        //console.log("itemList: ", this.state.itemList);
    }

    setItemListProperty = (itemId, itemResult) => {        
        //console.log("this.state.itemList: ", this.state.itemList);
        //console.log("itemId, itemResult: ", itemId, itemResult);
        let tempItem = this.state.itemList;
        tempItem[itemId] = itemResult;
        //console.log("tempItem: ", tempItem);
        
        this.setState({itemList: tempItem});
    }

    handleOnItemClick = (e) => {
        this.setState({selectedId: [this.props.element.id, e]});
        this.setItemListProperty(this.props.element.id, e);
    }


    render() {
        return (
            <div className="attribute_element">
                <p className="attribute_element_name">{this.props.element.name}:</p>
                <div className="attribute_element_items" >
                    {   
                        this.props.element.items.map(item => 
                            < >
                                <AttributeItem 
                                    selectedId={this.state.selectedId}
                                    item={item} 
                                    type={this.props.element.type} 
                                    handleOnItemClick={this.handleOnItemClick}
                                />
                            </>
                        )
                    }
                </div>    
            </div> 
        )
    }
}

//export default AttributeElement
const mapStateToProps = state => ({
    //getCurrency: state.reduxCurrency.data,
});

const mapDispatchToProps = {
    waitForCart
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(AttributeElement);