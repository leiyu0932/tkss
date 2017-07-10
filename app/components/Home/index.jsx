/**
 * Created at 17/6/22.
 * @Author Thunder King Star.
 * @Email 332793511@qq.com
 */
import React, { Component } from 'react'
import sky from './sky.jpeg'

export default class Home extends Component {
  render () {
    return (<div className="home-container">
      <img src={sky} />
      <div className="grid">
        <div className="column"><div className="ss">column1</div></div>
        <div className="column"><div className="ss">column2</div></div>
        <div className="column"><div className="ss">column3</div></div>
        <div className="column"><div className="ss">column4</div></div>
      </div>
    </div>)
  }
}
