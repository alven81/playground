import React from "react";
import AttributeElement from "./AttributeElement";

class Attribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: {},
            item: [],
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            const itemListTempArray = {};
            this.props.item.map((item) => (itemListTempArray[item.id] = ""));
            //console.log("itemListTempArray", itemListTempArray);
            this.setState({ itemList: itemListTempArray });
        }
    }

    render() {
        return !this.props.item.length && !this.state.itemList.length ? (
            <p>LOADING-Attribute</p>
        ) : (
            <div className="attribute">
                {this.props.item.map((element, index) => (
                    <AttributeElement
                        element={element}
                        itemList={this.state.itemList}
                        key={index}
                        //loadIdForCart = {loadIdForCart}
                    />
                ))}
            </div>
        );
    }
}

export default Attribute;

// import React from "react";
// import AttributeElement from "./AttributeElement";

// class Attribute extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state={
//             itemList: {},
//             item: []
//         }
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.item !== prevProps.item) {
//             this.setState({item: this.props.item});
//             const itemListTempArray = {};
//             this.props.item.map((item) => itemListTempArray[item.id] = "");
//             this.setState({itemList: itemListTempArray});
//         }
//     }

//     render() {
//         return (
//                     !this.state.item.length && !this.state.itemList.length ? <p>LOADING</p> :

//             <div className="attribute">
//                     {
//                         this.state.item.map((element, index) =>
//                             <AttributeElement element={element} itemList={this.state.itemList} key={index}/>
//                         )
//                     }

//             </div>

//         )
//     }
// }

// export default Attribute
