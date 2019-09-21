import React, { Component } from 'react'

import ExploreCard from '../Components/exploreCard'
import '../CSS/explore.scss'

export default class Explore extends Component {
    state ={
        toggle: {
            exploreGrid: "25% 75%",
            searchBox: ""
        }
    }

    glide = () =>{
        if(this.state.toggle.searchBox === ""){
            return this.setState({
                toggle:{
                    exploreGrid: "100%",
                    searchBox: "none"
                }
            })
        } else{
            return this.setState({
                toggle:{
                    exploreGrid: "25% 75%",
                    searchBox: ""
                }
            })
        }
    }

    render() {
        const cards = [{card: 1},{card: 2}, {card: 2}]
        return (
            <div className="explore" style={{gridTemplateColumns: this.state.toggle.exploreGrid}}>
                <div className="search-box" style={{display: this.state.toggle.searchBox}}>
                    <input type="search"
                    placeholder="what next"
                    />
                    <button onClick={()=>this.glide()}>
                        Reduceeeit
                    </button>
                </div>
                <div className="card-area">
                    <button onClick={()=>this.glide()}>
                        Reduceeeit
                    </button>
                    card area
                    <div className="cards-container">
                        {cards.map( card => 
                            <ExploreCard key={card.card}/>

                        )}    
                    </div>
                </div>
            </div>
        )
    }
}
