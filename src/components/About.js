import React,{useState} from 'react'

export default function About(props) {
  {/*const [myStyle, setmyStyle] = useState({
      color:'black',
      backgroundColor:'white'
  })
  const [btntext, setbtntext] = useState("Enable Dark Mode")
  const toggleStyle = ()=>{
      if(myStyle.color === 'black'){
          setmyStyle({
              color:'white',
              backgroundColor:'black',
              border:'1px solid white'
          })
          setbtntext("Enable Light Mode")
      }
      else{
          setmyStyle({
              color:'black',
              backgroundColor:'white',
          })
          setbtntext("Enable Dark Mode")
      }
  }*/}
  let myStyle={
    color:props.mode === 'dark'?'white':'#042743',
    backgroundColor:props.mode === 'dark'? 'rgb(36 74 104)':'white',
  }
return (
  <div className="container"style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h2 className='my-3'>Project Overview: TextUtils</h2>
      <p>This project is a simple React + Bootstrap based text utility tool that lets users perform various text transformations and view text statistics. It's clean, functional, and great for beginners and utility-focused users.</p>
  <div className="accordion" id="accordionExample" >
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          style={myStyle}
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <b>Features Breakdown</b>
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={myStyle}>
  <div class="section">
    <p class="feature-title">1. ✏️ Text Area (Main Input Box)</p>
    <ul>
      <li>Where users type or paste text.</li>
      <li>It's the input for all operations like uppercase/lowercase conversion, space removal, etc.</li>
    </ul>
  </div>

  <div class="section">
    <p class="feature-title">2. 🔵 Buttons (Functional Utilities)</p>

    <p><strong>🔹 Convert to Uppercase</strong></p>
    <ul>
      <li>Converts the entire input text to <strong>UPPERCASE</strong>.</li>
      <li>Useful for standardizing case for documents, codes, or shouting 😄.</li>
    </ul>

    <p><strong>🔹 Convert to Lowercase</strong></p>
    <ul>
      <li>Converts all input to <strong>lowercase</strong>.</li>
      <li>Helpful for normalizing user input, or searching without case sensitivity.</li>
    </ul>

    <p><strong>🔹 Clear Screen</strong></p>
    <ul>
      <li>Empties the entire text input field.</li>
      <li>Quick way to start over or remove previous content.</li>
    </ul>

    <p><strong>🔹 Copy Text</strong></p>
    <ul>
      <li>Copies the current content in the input box to clipboard.</li>
      <li>Triggered using <code>navigator.clipboard.writeText()</code> most likely.</li>
    </ul>

    <p><strong>🔹 Remove Extra Space</strong></p>
    <ul>
      <li>Removes <strong>multiple spaces</strong> between words and trims leading/trailing spaces.</li>
      <li>Common cleanup operation after copying/pasting messy text.</li>
    </ul>
  </div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          style={myStyle}
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <b>Your Text Summary</b>
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={myStyle}>
  <div class="summary-section">
    <p>This section displays:</p>
    <ul>
      <li><strong>Word count:</strong> How many words are in the input.</li>
      <li><strong>Character count:</strong> Total number of characters including spaces.</li>
      <li><strong>Reading time:</strong> Estimated reading time (usually calculated as <code>word_count * 0.008</code> minutes).</li>
    </ul>
  </div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          style={myStyle}
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
           <b>Preview Section</b>
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body"style={myStyle}>
        <p>Shows a live preview of the current processed text.</p>
        <p>Updates whenever the input or operations change.</p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          style={myStyle}
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
           <b>Enable Dark Mode Toggle</b>
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body"style={myStyle}>
        <p>Switches the interface between light and dark themes.</p>
        <p>Uses conditional classes (like bg-dark, text-light, etc.) or a state-driven class toggle.</p>
        </div>
      </div>
    </div>
  </div>
  {/*<div className="container my-3">
  <button type= "button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
</div>*/}
</div>
);
}
