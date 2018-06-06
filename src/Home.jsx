import React from "react";
import Header from "./home/header";
// var Header = require('./home/header');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      let header = <Header />;
    return (
      <div>
        {header}
        <main role="main" class="container">
          <div class="jumbotron">
            <h1>Navbar example</h1>
            <p class="lead">
              This example is a quick exercise to illustrate how fixed to top
              navbar works. As you scroll, it will remain fixed to the top of
              your browser's viewport.
            </p>
          </div>
          <div class="row">
            <div class="col-sm">One of three column</div>
            <div class="col-sm">two of three column</div>
            <div class="col-sm">Three of three column</div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
