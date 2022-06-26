import React, { useState } from "react";

export default function TxtForm(props) {
  
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase", "success")

  };

  
  const handleLowClick = () => {
    // console.log("Lowerrcase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lowercase", "success")

  };

  const handleClearClick = () => {
    // console.log("Clear Text was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text has been removed", "success")

  };

  const handleCopyClick = () => {
    // console.log("copy Text was clicked" + text);
    navigator.clipboard.writeText(text)
    props.showAlert("Text has been copied to clipboard", "success")

    
  };

  const handleSpacesClick = () => {
    // console.log('"Remove Extre Spaces" was clicked' + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("All extra spaces has been removed", "success")
    
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  

  
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#101010':'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled= {text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled= {text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1`} onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled= {text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1`} onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled= {text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1`} onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled= {text.length===0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1`} onClick={handleSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div 
        className="container my-3" 
        style={{color: props.mode==='dark'?'white':'black'}}
      >
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
          <p>{0.009 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes should be taken to read</p>
          <h2>Preview:</h2>
          <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
    
  );
  
}
