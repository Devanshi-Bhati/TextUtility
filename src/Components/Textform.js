import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("You have clicked Uppercase" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () =>{
        // console.log("You have clicked Uppercase" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick = () =>{
        // console.log("You have clicked Uppercase" + text);
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success");
    }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!","success");
    }
    const [text, setText] = useState('');
    //  setText("hjdchjkj");
  return (
 <>
 <div style={{color: props.mode == 'light'?'black':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value ={text} style={{backgroundColor: props.mode=='light'?'white':'grey', color: props.mode == 'light'?'black':'white'}}onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
  <button className="btn btn-primary" onClick={handleCopy}>Copy text</button>
</div>
<div className="container my-3"  style={{color: props.mode == 'light'?'black':'white'}}>
<h2>Text Summary</h2>
 <p>{text.split(" ").length} words, {text.length} characters</p>
 <p>{0.008 *text.split(" ").length } Minutes read</p>
 <h2>Preview</h2>
 <p>
    {text.length>0?text:'Enter something in the above textbox to preview it here'}
 </p>
</div>
</>
  )
}
