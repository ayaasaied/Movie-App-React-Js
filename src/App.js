
import React, { Component } from "react";
import Header  from "./MovieComponent/Header"
import MovieOne from "./MovieComponent/MovieOne";
import Movies from "./MovieComponent/Movies"
class App extends Component {
    render() {
        return ( 
            <div className="container">
            <Header />
            <Movies />
        </div>
        );
    }
}
export default App;