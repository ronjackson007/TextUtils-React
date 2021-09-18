import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase Was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase", "success")
    } 
    const handleLowClick = ()=>{
        console.log("Lowercase Was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase", "success")
    } 
    const handleClearClick = ()=>{
        console.log("Clear Was Clicked" + text)
        let newText ='';
        setText(newText)
        props.showAlert("Text Cleared", "success")
    } 
    const handleReverseClick = ()=>{
        console.log("Clear Was Clicked" + text)
        let newText =text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text Has Been Reversed ", "success")
    } 

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }
  
    

    const [text, setText] = useState("");
    // text="new text" //wrong way to change the text
    // setText("new text") //correct way to change the text
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#1b0003'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#1b0003' }} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-danger mx-2"  onClick={handleUpClick}>Convrt To Uppercase</button>
            <button className="btn btn-outline-danger mx-2"  onClick={handleLowClick}>Convrt To Lowercase</button>
            <button className="btn btn-outline-danger mx-2"  onClick={handleReverseClick}>Reverse</button>
            <button className="btn btn-outline-danger mx-2"  onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#1b0003'}}>
            <h1>Your Text Summary</h1>
            <p>{text.replace(/[ ]{2,}/gi," ").split(' ').length} words and {text.replace(/ /g, "").length} characters</p>
            <p>{0.008 * text.replace(/[ ]{2,}/gi," ").split("").length} Minutes Takes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something To Textbox Above To Preview"}</p>
        </div>
        </>
    )
}

