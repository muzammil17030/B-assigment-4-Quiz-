import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: "HTML Stands For _________?",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________?",
      options: [
        "Casecading Style Sheet",
        "Correct Style sheet",
        "none of these",
        "sypher serial sheet",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________?",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________?",
      options: ["Document Object Model", "Discriptive Object Model", "Delta Object Model", "None of these"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________?",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________?",
      options: [
        "Real Occuring Memory",
        "Real Operating Memory",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
    {
      question: "Does computer have any storage devives",
      options: [
        "Yes",
        "No",
        "May be",
        
      ],
      correctAns: "yes",
    },
  ];

  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [, setAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentIndex].correctAns) {
      setScore(score + 1);
    }
    setAnswered(true);
    if (currentIndex + 1 === questions.length) {
      setQuizCompleted(true);
    } else {
      setTimeout(() => {
        setcurrentIndex(currentIndex + 1);
        setAnswered(false);
      }, 500);
    }
  };

  return (
    <div className="body">
      <h1>QUIZ APP</h1>
      {quizCompleted ? (
        <div>
          <p>Quiz completed!</p>
          <p>Your score is {score} out of {questions.length}</p>
        </div>
      ) : (
        <div className="p">
          <span className="number">
            <p>Question {currentIndex + 1}/{questions.length}</p>
          </span>
          <p>{questions[currentIndex].question}</p>
          {questions[currentIndex].options.map((x, i) => (
            <div key={i} className="div1">
              <button onClick={() => handleAnswer(x)}>{x}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;