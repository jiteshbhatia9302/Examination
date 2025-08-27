import { useState } from "react";

export default function Home() {
  const [roll, setRoll] = useState("");
  const [content, setContent] = useState("");
  const [studentName, setStudentName] = useState("");

  // Full associative array: roll number -> student name
  const students = {
    "12206013": "Raksha Rane",
    "12211816": "Kailash Chandra",
    "12221225": "Lakshmi Greeshma Myneni",
    "12206932": "Gatti Lakshmi Prasad Kowsik",
    "12205963": "Aditya Singh",
    "12209088": "Pratyush Pothal",
    "12203053": "Bhanu Udhay Singh",
    "12200377": "Karnati Sai Aditya",
    "12210441": "Harshita Pathania",
    "12215345": "Prashant Singh Rana",
    "12210215": "Odela Vamsi Krishna",
    "12211290": "Ritik Bosu",
    "12200276": "Asmit Singh",
    "12216267": "Suraj Pratap Singh",
    "12204169": "Sugali Nenavath Nikhil Naik",
    "12208381": "Dharani Sree M C",
    "12212353": "Sugguna Hema Chandu",
    "12216198": "Adityan",
    "12201990": "Tanveer Krishna Kristam",
    "12203494": "SAI Likhith Golagani",
    "12101468": "Patapanchula Raghuram",
    "12200272": "Snehal Suman",
    "12200279": "Karishma Yadav",
    "12207967": "Ketha Mohan",
    "12209271": "Shashank",
    "12213422": "Metta Sandeep",
    "12222521": "Jyothiswaroop Chittiboyina",
    "12217599": "Yasharth Bajpai",
    "12211072": "Mohammad Ali",
    "12211453": "Cherukuri Chandrakanth",
    "12218172": "Vinit Kumar Singh",
    "12201529": "Sayjan J Singh",
    "12201579": "Vivaswan Singh",
    "12201630": "Kurmala Sai Nikhil",
    "12223179": "T.V.N.A.L.K.K.M.Gaargy Reddy",
    "12217324": "Gorle Bindu Sree",
    "12209029": "Malcolm Joseph Piassa",
    "12210216": "Mannepula Srinivasa",
    "12205518": "Sambhav Sharma",
    "12203188": "Chetan Ananda Reddy Kukutla",
    "12213752": "Ch Prana Deep",
    "12204111": "Shikhar",
    "12208757": "Puneet Kathpalia",
    "12203324": "Shruti Gupta"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 const name = students[roll];
    if (!name) {
      setStudentName("");
      setContent("❌ Roll number not found in the student list.");
      return;
    }
    setStudentName(name);
    
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
      setStudentName("");
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

{studentName && (
  <div style={{ textAlign: "center", marginBottom: "15px" }}>
    <span
      style={{
        color: "purple",
        backgroundColor: "cyan",
        borderRadius: "20px",
        padding: "8px 20px",
        display: "inline-block",
        fontWeight: "bold"
      }}
    >
      Student Name: {studentName}
    </span>
  </div>
)}





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


















