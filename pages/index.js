import { useState } from "react";

export default function Home() {
  const [roll, setRoll] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/getContent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roll })
      });

      const data = await response.json();
      setContent(data.content);
    } catch (err) {
      setContent("⚠️ Something went wrong!");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "30px" }}>
  <span style={{ textAlign: "center" }}>
    <h1>Developing Node JS Applications</h1> 
  <h2>Continuous Assessment 1</h2>
  <h2>Section: K22FG</h2>
    
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
  <h2>Enter your Roll Number &nbsp;&nbsp;
        <input
          type="number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          placeholder="Enter roll number"
          required
          style={{ padding: "5px", width: "200px" }}
        /> 
        <button type="submit" style={{ padding: "6px 12px", marginLeft: "10px" }}>
          Submit
        </button>
            </h2>
      </form>
            
            </span>
      {content && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px solid #ccc",
          background: "#f9f9f9",
          lineHeight: "2" // ← Increased spacing between lines
        }}>
          {/* Render HTML safely */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
}














