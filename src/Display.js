import React from 'react'
import { Component } from 'react'

class Display extends Component {
    render(){
        let string = '' 
        for(let v of this.props.stack){
            string += ''+v
        }
        return (
            <div className='display'>{string}</div>
        )
    }
}

export default Display