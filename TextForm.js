import React, { useState } from 'react'

export default function TextForm(Props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked" + text);
    let newText =text.toUpperCase();
    setText (newText)
  }

  const handleLoClick = () =>{
     let newText =text.toLowerCase();
    setText (newText)
  }

   const handleOnChange = (event) =>{
    //console.log("On change");
   setText (event.target.value);
  
  }

  const [text, setText] = useState("");
   
  return (
    <>
    <div className="container">
      <h1>{Props.heading}</h1>
<div className="mb-3">
  <label for="my Box" class="form-label">Example textarea</label>
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="my Box" rows="8"></textarea>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
</div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
