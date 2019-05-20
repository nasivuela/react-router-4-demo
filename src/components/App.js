import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Detail from './Detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.getPokemon = this.getPokemon.bind(this);
  }

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
            <Route
              exact
              path="/"
              render={props => (
                <List
                  match={props.match}
                  location={props.location}
                  history={props.history}
                  pokemons={pokemons}
                />
              )}
            />

            <Route
              path="/pokemon-detail/:id"
              render={props => (
                <Detail
                  {...props}
                  pokemon={this.getPokemon(props.match.params.id)}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
