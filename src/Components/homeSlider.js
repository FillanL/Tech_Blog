import React, { Component } from 'react'
import '../CSS/slider.scss'

const photos = ["https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"]

// let i = 0
export default class homeSlider extends Component {
    state = {
        "index": 0
    }
    changePic = () => {
        setTimeout(()=>{
            if (this.state.index === photos.length - 1) {
                this.setState({
                    "index": 0
                })
            } else {
                this.setState({
                    "index": this.state.index + 1
                })
            }
        }, 5000)
    }


    componentDidMount() {

    }
    
    componentWillUnmount(){
        clearTimeout(this.changePic)
    }

    render() {
        // this.changePic()
        // let changePic = setTimeout(()=>{
        //     if (this.state.index === photos.length - 1) {
        //         this.setState({
        //             "index": 0
        //         })
        //     } else {
        //         this.setState({
        //             "index": this.state.index + 1
        //         })
        //     }
        // }, 5000)

        return (

            <>
            
                {/* {setTimeout(()=>{this.changePic()},3000)} */}
                <img onClick={()=>this.clickIn()} className="slider" src={photos[this.state.index]} alt="WR" />
            </>

        )
    }
}
