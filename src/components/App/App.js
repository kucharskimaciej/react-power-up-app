import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import {Provider} from "react-redux";
import {store} from "../../store";
import Board from "../Board/Board";
import CardDetails from "../CardDetails/CardDetails";


import './App.css';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route component={Board}/>

                        <Route path="/details/:id" component={CardDetails} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
