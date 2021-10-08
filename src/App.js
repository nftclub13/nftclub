import React, {Component} from 'react';
import './App.css';
import NftClub from "./component/nftclub";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{mixHeight: document.documentElement.clientHeight}}>
                <NftClub/>
            </div>
        );
    }
}

export default App;
