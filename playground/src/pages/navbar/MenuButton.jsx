import React from "react"
import { connect } from "react-redux";
import { setCategory } from "../../store/actions/actions";

class MenuButton extends React.Component {

    componentDidMount() {
        this.props.setCategory(0);
    };

    componentDidUpdate() {
        //this.setState({currencyValue: this.props.data})
    }

    handleOnClick = (e) => {
           this.props.setCategory(e);
        //console.log(e);
    }

    render() {
        return (
            <button className="header-nav-button" onClick={(e) => this.handleOnClick(1)}>
                {this.props.menuItem.name}
            </button>
        )
    }
}

const mapStateToProps = state => ({
    data: state.reduxСategory.data
});

const mapDispatchToProps = {
    setCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuButton);

// export default MenuButton