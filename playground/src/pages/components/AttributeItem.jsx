import React from "react";
import Loader from "./Loader";

class AttributeItem extends React.Component {
    //constructor(props) {
    //     super(props);
    //     this.state = {
    //         item: null,
    //         type: null,
    //     };
    // }

    componentDidMount() {
       // console.log("item", this.props.type);
    }
    
    // componentDidUpdate(prevProps) {
    //     if (this.props.item !== prevProps.item) {
    //         this.setState({
    //             item: this.props.item,
    //             type: this.props.type,
    //         });
    //     }
    // }

    render() {
        return (
            <div>
                {!this.props.item && !this.props.type ? (
                    <Loader/>
                ) : (
                    <button
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
                        }`}
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



// import React from "react";

// class AttributeItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             item: "",
//             type: "",
//         };
//     }

//     componentDidMount() {
//         console.log("item", this.props.item);
//     }
    
//     componentDidUpdate(prevProps) {
//         if (this.props.item !== prevProps.item) {
//             this.setState({
//                 item: this.props.item,
//                 type: this.props.type,
//             });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {!this.props.item && !this.props.type ? (
//                     <p>LOADER AttributeItem</p>
//                 ) : (
//                     <button
//                         onClick={(e) =>
//                             this.props.handleOnItemClick(this.props.item.id)
//                         }
//                         id={this.props.item.id}
//                         style={{ backgroundColor: `${this.props.item.value}` }}
//                         className={`attribute_element_items_${
//                             this.state.type
//                         } attribute_element_items_${this.state.type}_${
//                             this.props.selectedId[1] === this.props.item.id
//                                 ? "selected"
//                                 : ""
//                         }`}
//                     >
//                         <p>
//                             {this.state.type === "text"
//                                 ? this.props.item.value
//                                 : ""}
//                         </p>
//                     </button>
//                 )}
//             </div>
//         );
//     }
// }

// export default AttributeItem;