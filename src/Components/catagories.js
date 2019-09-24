import React, { Component } from 'react'

export default class Catagories extends Component {
    state ={
        color: "red"
    }
    colorChange =()=>{
        this.state.color === "red" 
        ?
            this.setState({
                color: "green"
            }) 
        : 
            this.setState({
                color: "red"
            })
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.color, height: "100vh", width: "100vw"}}>
                <h2> Catagory Name</h2>
                <button onClick={()=>this.colorChange()}>something done</button>
            </div>
        )
    }
}
