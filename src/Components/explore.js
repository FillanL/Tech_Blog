import React, { Component } from 'react'
import '../CSS/explore.scss'

export default class Explore extends Component {

    glide = ()=>{
    //   document.getElementsByClassName('search-box').Style.backgroundColor = 'red'
       console.log("here")
    }

    render() {
        return (
            <div className="explore">
                <div className="search-box">
                    <input type="search"
                    placeholder="what next"
                    />
                    <button onClick={()=>this.glide()}>
                        Reduceeeit
                    </button>
                </div>
                <div className="card-area">
                    card area
                </div>
            </div>
        )
    }
}
