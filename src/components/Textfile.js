import React, { useState } from 'react'

export default function Textfile(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    // console.log('Uppercase was clicked'+text);
    let newText = text.toUpperCase();
    setText(newText);
    
  }
  const handlelowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    
  }
  const handleonChange = (event) => {
    // console.log('onChange');
    setText(event.target.value);
  }
  const handleclearClick = () => {
    let newtext = '';
    setText(newtext);
   
  }
  const handleCopy = () => {
    var temp = document.getElementById("floatingTextarea")
    temp.select()
    navigator.clipboard.writeText(temp.value)
    document.getSelection().removeAllRanges()
  }


  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.h1} </h1>

        <div className="form-floating" >
          <textarea value= {text} onChange={handleonChange} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ backgroundColor: props.mode === 'dark' ? '#184d70' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>

        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}  >Convert to Uppercase</button>

        <button className="btn btn-primary mx-1 my-1" onClick={handlelowClick}  >Convert to Lowercase</button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}  >Clear</button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}  >Copy Text</button>

      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Summary</h2>
        {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}



