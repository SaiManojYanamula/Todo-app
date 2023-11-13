import React, { Component } from 'react'

export default class Errorboundries extends Component {

    constructor() {
      super()
    
      this.state = {
        haserror:false
      }
    }

    static getDerivedStateFromError(error){
        return{
            haserror:true
        }
    }

    componentDidCatch(error,info){
    console.log(error);
    console.log(info);
    }
  render() {
    return (
      <>
      {this.state.haserror?<h1>hello nishitha bhayaaaa</h1>:this.props.children}
      </>
    )
  }
}
