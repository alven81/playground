import '../../App.scss';
import React from "react";
import { loadMenu } from "../../store/actions/actions";
import { connect } from 'react-redux';
import MenuButton from './MenuButton';

class Menu extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            menuQuery: 
                `{
                    categories  {
                    name
                    }
                }`
        }
    }

    componentDidMount() {
        this.props.loadMenu(this.state.menuQuery);
    };

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div style={{ color: 'red' }}>ERROR: {this.props.error}</div>
        }
        return (
            <>
                {   !this.props.data ?

                    <>LOADER</> : 

                    this.props.data.map((item, index) =>  
                        <>
                            <MenuButton 
                                menuItem={item}
                                key = {index}
                                index = {index}
                            />
                        </>
                    ) 
                }
            </> 
        )
    }
}

const mapStateToProps = state => ({
    data: state.reduxMenu.data,
    loading: state.reduxMenu.loading,
    error: state.reduxMenu.error,
});

const mapDispatchToProps = {
    loadMenu
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
