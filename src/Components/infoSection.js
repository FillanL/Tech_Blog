import React, { Component } from 'react'

import '../CSS/info_section.scss'

export default class infoSection extends Component {
    render() {
        return (
            <div className="section_container">
                <div className="section_info_card">
                    <p>TECH</p>
                    <p>sruffsf sfsalfnsfa sa flansfa sasfa sl</p>
                </div>
                <div className="section_info_card">
                    <p>sruffsf sfsalfnsfa sa flansfa sasfa sl</p>
                    <p>TECH</p>
                </div>
                <div className="section_info_card">
                    <p>TECH</p>
                    <p>sruffsf sfsalfnsfa sa flansfa sasfa sl</p>
                </div>

            </div>
            // <section>
            //     <div className="info" style={{"borderRadius":"3%"}}>
            //     </div>
            //     <div className="info" style={{"borderRadius":"3%"}}>
            //         <p>BLOG</p>
            //     </div>
            //     <div className="info" style={{"borderRadius":"3%"}}>
            //         <p>QUOTES</p>
            //     </div>
            // </section>
        )
    }
}
