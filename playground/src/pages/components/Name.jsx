import React from "react";

class Name extends React.Component {
    render() {
        return (
            <div className={this.props.nameClass}>
                <p>{this.props.brand}</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Name;
