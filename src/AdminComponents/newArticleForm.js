import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import {postArticle} from '../Service/articleService'
import 'react-quill/dist/quill.snow.css';
import './AdminCSS/newArticleForm.scss'

function NewArticleForm(props) {
    const [articleObj] = useState({})
    const setChanges = (e,y)=>{
        articleObj[y]=e
        console.log(articleObj, Date.now())
    }
    

    // console.log(articleObj)
    return (
        <div className="new_form_container">
            <div className="back_btn_container">
                <span className="back_btn">
                    back
                </span>
            </div>
            <div className='metaContainer'>
                <input 
                    onChange={(event) => setChanges(event.target.value,'article_title')}
                    type="text" 
                    maxLength='80' 
                    placeholder="Article Title" 
                    /> 
                <br></br>
                <input type="file" style={{width:'auto'}} />
                <br></br>
                <input 
                    // onChange={(x) => console.log(x,'articleBdy')}
                    type='datetime-local'
                    // value={new Date()}
                    onChange={(event) => setChanges(event.target.value,'articleLiveDate')}
                />
            </div>

            <div className="editorContainer">
                <ReactQuill
                    style={{ backgroundColor: 'white' }}
                    onChange={(x) => setChanges(x,'article_content')}
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
                <button className="submitBtn" onClick={()=> postArticle(articleObj)} >Submit</button>
            </div>
        </div>
    )
}

export default NewArticleForm
