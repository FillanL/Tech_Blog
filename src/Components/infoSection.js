import React, { Component } from 'react'

import '../CSS/info_section.scss'

export default class infoSection extends Component {
    render() {
        return (
            <div className="section_container">
                <div className="section_info_card">
                    <p>TECH</p>
                    <p style={{"padding":"10px 30px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, officiis. Eos sapiente nemo molestiae fugit 
                    Eos sapiente nemo molestiae fugit. deserunt, provident facilis asperiores? Fugit temporibus illum deleniti ea necessitatibus, fugiat sit cum mollitia tenetur? </p>
                </div>
                <div className="section_info_card">
                    <p style={{"padding":"10px 30px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, officiis. Eos sapiente nemo molestiae fugit deserunt, provident facilis asperiores? Fugit temporibus illum deleniti ea necessitatibus, fugiat sit cum mollitia tenetur?</p>
                    <p>TECH</p>
                </div>
                <div className="section_info_card">
                    <p>TECH</p>
                    <p style={{"padding":"10px 30px"}}>sLorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, officiis. Eos sapiente nemo molestiae fugit deserunt, provident facilis asperiores? Fugit temporibus illum deleniti ea necessitatibus, fugiat sit cum mollitia tenetur?</p>
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
