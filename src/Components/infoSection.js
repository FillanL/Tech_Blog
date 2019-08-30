import React, { Component } from 'react'

import '../CSS/info_section.scss'

export default class infoSection extends Component {
    render() {
        return (
            <section>
                <div className="info" style={{"borderRadius":"3%"}}>
                    <p>TECH</p>
                </div>
                <div className="info" style={{"borderRadius":"3%"}}>
                    <p>BLOG</p>
                </div>
                <div className="info" style={{"borderRadius":"3%"}}>
                    <p>QUOTES</p>
                </div>
            </section>
        )
    }
}
