import React from "react";
import { connect } from "react-redux";
import AttributeItem from "./AttributeItem";
import { waitForCart } from "../../store/actions/actions";

class AttributeElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: [],
            itemList: this.props.itemList,
        };
    }

    componentDidMount() {
        this.setState({ itemList: this.props.itemList });
        
    }

    componentDidUpdate(prevProps) {
        if (this.state.itemList !== prevProps.itemList)
            this.props.waitForCart(this.state.itemList);
    }

    setItemListProperty = (itemId, itemResult) => {
        let tempItem = this.state.itemList;
        tempItem[itemId] = itemResult;
        this.setState({ itemList: tempItem });
    };

    handleOnItemClick = (e) => {
        this.setState({ selectedId: [this.props.element.id, e] });
        this.setItemListProperty(this.props.element.id, e);
    };

    render() {
        return !this.props.element.items.length ? (
            <>LOAD AttributeElement</>
        ) : (
            <div className="attribute_element">
                <p className="attribute_element_name">
                    {this.props.element.name}:
                </p>
                <div className="attribute_element_items">
                    {this.props.element.items.map((item, index) => (
                        <AttributeItem
                            key={index}
                            selectedId={this.state.selectedId}
                            item={item}
                            type={this.props.element.type}
                            handleOnItemClick={this.handleOnItemClick}
                        />
                    ))}
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

// import React from "react";
// import { connect } from "react-redux";
// import AttributeItem from "./AttributeItem";
// import { waitForCart } from "../../store/actions/actions";

// class AttributeElement extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state={
//             selectedId: [],
//             itemList: this.props.itemList
//         }
//     }

//     componentDidMount() {
//         this.setState({itemList: this.props.itemList});
//     }

//     componentDidUpdate(prevProps) {
//         if (this.state.itemList !== prevProps.itemList)
//         this.props.waitForCart(this.state.itemList);
//     }

//     setItemListProperty = (itemId, itemResult) => {
//         let tempItem = this.state.itemList;
//         tempItem[itemId] = itemResult;
//         this.setState({itemList: tempItem});
//     }

//     handleOnItemClick = (e) => {
//         this.setState({selectedId: [this.props.element.id, e]});
//         this.setItemListProperty(this.props.element.id, e);
//     }

//     render() {
//         return ( //!this.props.element.items.length > 0 ? <>LOAD AttributeElement</> :
//             <div className="attribute_element">
//                 <p className="attribute_element_name">{this.props.element.name}:</p>
//                 <div className="attribute_element_items" >
//                     {
//                         this.props.element.items.map((item, index) =>
//                            <AttributeItem
//                                key={index}
//                                selectedId={this.state.selectedId}
//                                item={item}
//                                type={this.props.element.type}
//                                handleOnItemClick={this.handleOnItemClick}
//                            />
//                         )
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = {
//     waitForCart
// };

// export default connect(
// mapStateToProps,
// mapDispatchToProps
// )(AttributeElement);
