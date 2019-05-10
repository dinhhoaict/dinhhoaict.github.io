import React, { Component } from "react";
import { connect } from "react-redux";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import { fetchingData } from "./action";
function mapStateToProps(state) {
    return {
        menu: state.ownhome.menu,
        redditData: state.redditData
    };
}

function mapDispatchToProps(dispatch){
    return {
        fetchingData: () => dispatch(fetchingData()),
        dispatch
    }
}

class OwnHome extends Component {
  onLeave(origin, destination, direction) {
    // console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    // console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        anchors={this.props.menu}
        sectionsColor={["#FFFFFF", "#ff5f45", "#0798ec"]}
        scrollOverflow={true}
        navigation
        debug
        fitToSectionDelay={1e4}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <p>{JSON.stringify(this.props.redditData.data)}</p>
                <button onClick={() => this.props.fetchingData()}>
                  Move down
                </button>
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div className="section">
                <h3>Section 3</h3>
              </div>

              <div className="section">
                <h3>Section 4</h3>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnHome);
