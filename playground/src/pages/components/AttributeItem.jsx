import React from "react";

class AttributeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            type: ""
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({
                item: this.props.item,
                type: this.props.type});
        }
    }
 
    render() {
        return (
            <div>
                {
                    !this.state.item && !this.state.type ? <p>LOADER AttributeItem</p> : 

                    <button
                        onClick={(e) => this.props.handleOnItemClick(this.props.item.id)}
                        id={this.state.item.id}
                        style={{backgroundColor: `${this.state.item.value}`}} 
                        className={`attribute_element_items_${this.state.type} attribute_element_items_${this.state.type}_${(this.props.selectedId[1] === this.state.item.id) ? "selected" : ""}`} 
                    >
                        <p >{(this.state.type === "text") ? this.state.item.value : ""}</p>
                        
                    </button>
                    
                }
            </div>
        )
    }
}

export default AttributeItem
