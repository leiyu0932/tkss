/**
 * Created at 17/6/22.
 * @Author Thunder King Star.
 * @Email 332793511@qq.com
 */
import React, { Component } from 'react'
import sky from './sky.jpeg'

export default class Header extends Component {
  render () {
    return (<div className="home-container">
      <img src={sky} />
    </div>)
  }
}
