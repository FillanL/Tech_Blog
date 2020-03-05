import React from 'react'
import './AdminCSS/newArticleForm.scss'

function newArticleForm() {
    return (
        <div className="new_form_container">
            <div className="back_btn_container">
                <span className="back_btn">
                    back
                </span>
            </div>
            <form>
                {/* <label>
                    Article Title
                </label><br></br> */}
                <input type="text" placeholder="Title" /><br></br>
                <label>Article feature Image</label><br></br>
                <input type="file" /><br></br>
                {/* <div>
                    Content edittingg system
                </div> */}
                <button>Sumbit</button>
            </form>
        </div>
    )
}

export default newArticleForm
