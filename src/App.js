import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">AI-Powered Intelligent Document Assistant</h1>
      
      <div className="content">
        {/* Left Section */}
        <div className="left-section">
          <div className="query-box">
            <label htmlFor="query">Query</label>
            <input type="text" id="query" placeholder="Enter your query..." />
            <button className="submit-btn">Submit</button>
          </div>

          <div className="upload-box">
            <p>Upload Document</p>
            <div className="upload-area">
              <div className="upload-icon">📄</div>
              <p className="upload-formats">PDF, DOCX or TXT</p>
              <p className="upload-instruction">Drag and drop or click to upload</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Summary</h2>
          <div className="summary-box">
            <p>This is an  AI-powered document assistant capable of understanding, summarizing, and responding to queries from documents using Google Gemini API, OpenAI’s ChatGPT API, and DeepSeek AI.
            The assistant will able able extract insights rd Documents, and Text Files, making it useful for industries like legal, research, and enterprise automation..</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
