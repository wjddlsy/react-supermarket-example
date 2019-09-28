import React, { Component } from 'react';
import SuperMarket from './components/SuperMarket';
import Counter from './components/Counter';
import DevTools from 'mobx-react-devtools';

class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <hr />
                <SuperMarket />
            </div>
        );
    }
}

export default App;
