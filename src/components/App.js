import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Detail from './Detail';

class App extends Component {
  getPokemon(id) {
    const { pokemons } = this.props;
    return pokemons.find(pokemon => pokemon.id === parseInt(id));
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <header>Header</header>
        <main>
          <Switch>
            <Route exact path="/" render={() => <List pokemons={pokemons} />} />

            <Route
              path="/pokemon-detail/:pokemonId"
              render={routeProps => {
                console.log(routeProps);
                return (
                  <Detail
                    pokemon={this.getPokemon(routeProps.match.params.pokemonId)}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
