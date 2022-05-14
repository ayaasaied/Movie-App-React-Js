import React, { Component } from "react";
import MovieInfo from "./MovieInfo"
import MovieOne from "./MovieOne";

class Movies extends Component {
   
   constructor() {
       super()
       this.state={MovieInfo:MovieInfo}
   }

   mapping(x){
       const movie=x.map(n=>
        <MovieOne
        key={n.id}
        img={n.img}
        name={n.name}
        position={n.position}
      
       /> );
       return movie;
   }
   
    render() {
        return(
            <div className="row">
                {this.mapping(this.state.MovieInfo)}
                </div>
        )
        
    }
}

export default Movies;

