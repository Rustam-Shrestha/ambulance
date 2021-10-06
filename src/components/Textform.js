import React, { useState } from "react";

const Textform = (props) => {
  const handleUpClick = () => {
    console.log("uppercase button was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text converted to uppercase", "success");
  };
  const handleLowClick = () => {
    console.log("lowercase button was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to lowercase", "success");
  };
  const handleOnCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed", "success");
  };
  const handleOnchange = (event) => {
    console.log("onchange button was clicked", "success");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared", "success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            style={{
              background: props.mode === "light" ? "#eee" : "#444",
              color: props.mode === "light" ? "#444" : "whitesmoke",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-secondary mx-3" onClick={handleLowClick}>
          convert to lowercase
        </button>
        <button className="btn btn-danger mx-3" onClick={handleClearClick}>
          Clear the text
        </button>
        <button className="btn btn-dark mx-3" onClick={handleOnCopy}>
          Copy the text
        </button>
        <button className="btn btn-light mx-3" onClick={handleExtraSpaces}>
          remove extra spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "enter something"}</p>
      </div>
    </>
  );
};

export default Textform;
