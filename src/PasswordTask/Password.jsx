

import React, { Component } from 'react'
var showFlag = false;
var data = ''
export default class Password extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         password : '',
         showData:''
      }
    }
     showValue=(data)=>{
        this.setState({showData:data})
    }
    handleChange=(e)=>{
         showFlag = true;
        this.setState({password:e.target.value})
    }
  render() {
    return (
      <div>
        {   this.state.showData === '' &&
            <input  type='password'
            name='password' 
            value={this.state.password} 
            onChange={this.handleChange}/>
        }
             

             {  this.state.showData !== '' &&
            <input  type='text'
            name='password' 
            value={this.state.password} 
            onChange={this.handleChange}/>
        }
 
        <button onClick={e=>this.showValue(this.state.password)}>Show</button>
      </div>
    )
  }
}
