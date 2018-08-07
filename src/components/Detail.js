import React, { Component } from 'react';

class Detail extends Component {
    render() { 
        console.log(this.props);
        return ( 
            <div>
                <h1>Detail of {this.props.pokemon.name}</h1>
            
            </div>
         );
    }
}
 
export default Detail;