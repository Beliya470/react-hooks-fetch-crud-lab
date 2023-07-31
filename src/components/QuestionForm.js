import React, { useState } from "react";

function QuestionForm() {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const answers = [formData.answer1, formData.answer2, formData.answer3, formData.answer4];
    const newQuestion = { prompt: formData.prompt, answers, correctIndex: parseInt(formData.correctIndex) };
    
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
    .then((response) => response.json())
    .then(() => {
      setFormData({
        prompt: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctIndex: 0,
      });
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prompt
        <input 
          type="text" 
          name="prompt"
          value={formData.prompt} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Answer 1
        <input 
          type="text" 
          name="answer1"
          value={formData.answer1} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Answer 2
        <input 
          type="text" 
          name="answer2"
          value={formData.answer2} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Answer 3
        <input 
          type="text" 
          name="answer3"
          value={formData.answer3} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Answer 4
        <input 
          type="text" 
          name="answer4"
          value={formData.answer4} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Correct Answer Index
        <input 
          type="number" 
          name="correctIndex"
          value={formData.correctIndex} 
          onChange={handleChange} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionForm;
