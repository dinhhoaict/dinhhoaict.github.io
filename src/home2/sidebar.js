import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        menu: state.ownhome.menu
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Sidebar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <aside>
            </aside>
        );
    }
}

export default connect(
    mapStateToProps,
)(Sidebar);