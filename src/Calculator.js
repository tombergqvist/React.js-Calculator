import React from 'react'
import { Component } from 'react'
import Display from './Display'
import Button from './Button'

class Calculator extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         stack: [],
    //         result: null
    //     }
    // }

    state = {
        stack: []
    }

    put(i) {
        let stack = this.state.stack.slice()
        let length = stack.length

        if('+-*/'.includes(i) ){
            '+-*/'.includes(stack[length-1]) ? stack[length-1] = i : stack.push(i)
        }
        else{
            length === 0 ? stack.push(i) : stack[length-1] += i
        }

        console.log(stack)
        this.setState({ stack: stack })
    }

    clear() {
        this.setState({ stack: [] })
    }

    solve() {
        let stack = this.state.stack.slice()
        let sum = 0

        stack.forEach((value) => {
            sum += parseInt(value)
            console.log(sum)
        })
        this.setState({ stack: [sum] })
    }

    render() {
        let buttons = []
        for (let i = 1; i < 10; i++) {
            buttons.push(<Button value={i} onClick={() => this.put('' + i)} key={i}></Button>)
        }
        buttons.push(<Button value={'0'} onClick={() => this.put('0')} key={0}></Button>)

        return (
            <div className='calculator'>
                <Display stack={this.state.stack}></Display>
                {buttons}
                <div className='mathButtons'>
                    <Button value={'+'} onClick={() => this.put('+')}></Button>
                    <Button value={'-'} onClick={() => this.put('-')}></Button>
                    <Button value={'='} onClick={() => this.solve()}></Button>
                    <Button value={'C'} onClick={() => this.clear()}></Button>
                </div>
            </div>
        )
    }
}

export default Calculator