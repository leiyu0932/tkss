/**
 * Created at 17/6/22.
 * @Author Thunder King Star.
 * @Email 332793511@qq.com
 */
import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props

    return (
      <p>
        Counter: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={incrementAsync}>Increment Async</button>
      </p>
    )
  }
}
