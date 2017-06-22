import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import 'normalize.css'
import '../common/layout.less'

class App extends Component {
  render () {
    return (<div>
      <Header />
      <Navigation />
      {this.props.children}
    </div>)
  }
}

export default connect(state => ({

}))(App)
