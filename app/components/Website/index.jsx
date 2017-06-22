import React, { Component } from 'react'
import './website.less'

export default class Website extends Component {
  render () {
    return (<div className="cu">
      <ul>
        <li>
          <a href="https://juejin.im/post/594156e6fe88c2006a4e5235">
            Js 运行机制深层剖析
          </a>
        </li>
        <li>
          <a href="https://github.com/wssgcg1213/koa2-react-isomorphic-boilerplate">
            koa2 + React(current website by this)
          </a>
        </li>
        <li>
          <a href="http://www.css88.com/doc/jsdoc/about-namepaths.html">
            JSDoc 中文文档
          </a>
        </li>
        <li>
          <a href="http://www.tldp.org/guides.html">
            The Linux Documentation Project
          </a>
        </li>
        <li>
          <a href="https://segmentfault.com/l/1500000009204980?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly">
            从零开始搭建 WebRTC 系统之 WebRTC 架构入门
          </a>
        </li>
        <li>
          <a href="https://segmentfault.com/l/1500000008618265?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly">
            前端程序员应该懂点 V8 知识
          </a>
        </li>
        <li>
          <a href="https://github.com/mqyqingfeng/Blog/issues/8">
            JavaScript深入之执行上下文
          </a>
        </li>
        <li>
          <a href="https://segmentfault.com/a/1190000009476912?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly">
            Restful API 的设计规范
          </a>
        </li>
        <li>
          <a href="https://segmentfault.com/q/1010000008745355?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly">
            一个面试题，有啥想法么？
          </a>
        </li>
      </ul>
    </div>)
  }
}
