import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AdminCSS/newArticleForm.scss'

function newArticleForm() {
    return (
        <div className="new_form_container">
            <div className="back_btn_container">
                <span className="back_btn">
                    back
                </span>
            </div>
            <div className='metaContainer'>
                <input type="text" maxLength='80' placeholder="Article Title" /> 
                <br></br>
                <input type="file" style={{width:'auto'}} /><br></br>
            </div>

            <div className="editorContainer">
                <ReactQuill
                    style={{ backgroundColor: 'white' }}
                    onChange={(x) => console.log(x)}
                    theme='snow'
                    placeholder={"Start typing heree..."}
                    modules={{
                        toolbar: [
                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                            [{ size: [] }],
                            [{ 'align': ['', 'center', 'right', 'justify'] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' },
                            { 'indent': '-1' }, { 'indent': '+1' }, { 'align': 'center' }],
                            ['link', 'image', 'video'],
                            ['clean']
                        ]
                    }}
                />
                <button className="submitBtn">Submit</button>
            </div>
        </div>
    )
}

export default newArticleForm
