import React, { Component } from 'react';
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <main role="main">
                    <div class="row" style={{'min-height': 60}}>
                        <div class="main-blog col-md-8">


                        </div>

                        <aside class="side-blog col-md-4">

                        </aside>
                    </div>

                </main>
            </div>
        );
    }
}

export default MainContainer;