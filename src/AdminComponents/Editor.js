import React from 'react'

function Editor() {
    return (
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
    )
}

export default Editor
