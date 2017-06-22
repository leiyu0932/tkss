import App from './containers/App'
import Website from './components/Website'
import Counter from './containers/Counter'
import Home from './components/Home'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'

export default (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="cu" component={Website} />
    <Route path="counter" component={Counter} />
  </Route>
</Router>
)
