import "../../App.scss";
import React from "react";
import { loadMenu } from "../../store/actions/actions";
import { menuQuery } from "../../store/queries";
import { connect } from "react-redux";
import MenuButton from "./MenuButton";

class Menu extends React.Component {

    componentDidMount() {
        this.props.loadMenu(menuQuery);
    }

    render() {
        if (this.props.loading) {
            return <div>Loading</div>;
        }
        if (this.props.error) {
            return (
                <div style={{ color: "red" }}>ERROR: {this.props.error}</div>
            );
        }
        return (
            <>
                {!this.props.data.length ? (
                    <>LOADER</>
                ) : (
                    this.props.data.map((item, index) => (
                        <MenuButton
                            menuItem={item}
                            key={index}
                            index={index}
                            handleSetCategoryOnClick={
                                this.props.handleSetCategoryOnClick
                            }
                        />
                    ))
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.loadMenu.data,
    loading: state.loadMenu.loading,
    error: state.loadMenu.error,
});

const mapDispatchToProps = {
    loadMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
