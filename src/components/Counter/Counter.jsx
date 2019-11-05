import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            counter : 0
        }
        //this.increment = this.increment.bind(this)
    }

    render() {
        return (
          <div className="counter">
            <CounterButton incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={2} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div>
                <button className="reset" onClick = {this.reset}>Reset</button>
            </div>
          </div>
        );
      }

      reset = () =>{
          this.setState(
            () => {
                return {counter : 0}
            }
          )
      }

      increment = (by) => {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter + by}
            }
        )
    }
      
    decrement = (by) => {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        )
    }
}


class CounterButton extends Component{

// Define the intial state in a constructor

constructor(){
    super()
    this.state = {
        counter : 0
    }
    //this.increment = this.increment.bind(this)
}
    render = () => {
    return(
        <div className="count">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button>
            {/* <span className="count">{this.state.counter}</span> */}
        </div>
    )
    }

// Update state
    increment = () => {
        this.setState({
            counter : this.state.counter + this.props.by
        }
        )

        this.props.incrementMethod(this.props.by)
    }

    decrement = () => {
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - this.props.by}
            }
        )

        this.props.decrementMethod(this.props.by)
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton .propTypes = {
    by : PropTypes.number
}

export default Counter