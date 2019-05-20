import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    return (
      <div>
        <h1>Listado</h1>
        <ul>
          {this.props.pokemons.map(pokemon => (
            <li key={pokemon.id}>
              <Link to={`/pokemon-detail/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
