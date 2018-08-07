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
              path='/'
              render={({match, history, location}) =>
                <List 
                  match={match} 
                  location={location} 
                  history={history}  
                  pokemons={pokemons}
                />
              }
            />
            <Route
              path='/:id'
              render={(props) =>
                <Detail {...props} 
                  pokemon={this.getPokemon(props.match.params.id)} 
                />
              }
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
