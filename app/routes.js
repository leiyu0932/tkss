import App from './containers/App'
import Home from './components/Home'
import Website from './components/Website'
import Counter from './containers/Counter'
import ThreeD from './components/3d'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'

export default (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="cu" component={Website} />
    <Route path="counter" component={Counter} />
  </Route>
  <Route path="/3d" component={ThreeD} />
</Router>
)
