import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

// components
import Movies from './pages/movies/Movies'
import Home from './pages/home/index'
import Planets from './pages/planets/Planets'
import Characters from './pages/Characters'
import Footer from './components/Footer'
import CharacterDetail from './pages/CharacterDetail'

import { GlobalStyles } from '../src/styles/global-styles'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/character-detail" component={CharacterDetail} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/planets" component={Planets} />
        </Switch>
        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </div>
  )
}

export default App
