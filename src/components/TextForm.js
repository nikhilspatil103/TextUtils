import { getByLabelText } from '@testing-library/react'
import React, { useState } from 'react'



export default function TextForm(props) {

    //!-----clear
    const handelClearClick = () => {
        let newText = ''
        setText(newText)
    }

    //!-----upperCase
    const handelUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    //!----lowerCase
    const handelLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    //!---Copy
    const handelCopyClick = () => {
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    //!---Remove Extra spaces
    const handelSpaceClick = () => {
        let space = text.split(' ')
        let output = space.filter(x=>x!='')
        setText(output.join(' '))

    }

    //!---handel on change
    const handelOnChange = (event) => {
        console.log('on Change')
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className='container' >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <label for="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
                    <button className='btn btn-primary my-2' onClick={handelClearClick} >Clear</button>
                    <button className='btn btn-dark my-2 mx-2' onClick={handelUpClick} >Convert to UpperCase</button>
                    <button className='btn btn-dark my-2 mx-2' onClick={handelLoClick} >Convert to LowerCase</button>
                    <button className='btn btn-dark my-2 mx-2' onClick={handelCopyClick} >Copy</button>
                    <button className='btn btn-dark my-2 mx-2' onClick={handelSpaceClick} >RemoveSpace</button>
                </div>
            </div>
            <div className='container my-3'>
                <h3>Your Text Summary</h3>
                <p> {text.split(' ').length} words and {text.length} charactors</p>
            </div>
        </>
    )
}
