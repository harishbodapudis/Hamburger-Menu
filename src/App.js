import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Header from './components/Header'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
