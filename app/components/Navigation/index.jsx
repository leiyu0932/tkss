/**
 * Created at 17/6/22.
 * @Author Thunder King Star.
 * @Email 332793511@qq.com
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import './nav.less'

export default class Navigation extends Component {
  render () {
    return (<nav className="navigation">
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/cu'>常用网址</Link></li>
        <li><Link to='/counter'>计数器</Link></li>
      </ul>
    </nav>)
  }
}
