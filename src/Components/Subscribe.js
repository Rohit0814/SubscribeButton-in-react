import React, { Component } from 'react'
import './Subscribe.css'
class Subscribe extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:'Click To Subscribe'
        }

    }

    sub(){
        this.setState({
            count:1,
            msg:'Thanks for Subscribing'
        })
    }

    Nsub(){
        this.setState({
            count:0,
            msg:'Click To Subscribe'
        })
    }

  render() {
    let c=this.state.count
    if(c===0){
        return (
                <div className="NotSubClass">
                    <center>
                    <h1>{this.state.msg}</h1>
                    <button onClick={()=>this.sub()}>Click here</button>
                    </center>
                </div>
            )
    }
    else{
        return(
            <div className='SubClass'>
                    <center>
                    <h1>{this.state.msg}</h1>
                    <button onClick={()=>this.Nsub()}>Click here</button>
                    </center>
            </div>
        )
    }
  }
}

export default Subscribe