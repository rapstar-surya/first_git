import React, { useState, useRef } from "react";
import Style from './Test.module.css';

const Test = () => {

    const questionsData = [{
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "What is the highest mountain peak in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        answer: "Mount Everest"
    },
    {
        question: "Who wrote the book 'To Kill a Mockingbird'?",
        options: ["John Steinbeck", "Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["France", "Brazil", "Argentina", "Germany"],
        answer: "France"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Dollar", "Peso", "Yen", "Euro"],
        answer: "Yen"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin", "Isaac Newton"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "Which planet in our solar system is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "Which country is the largest in terms of area?",
        options: ["Russia", "China", "USA", "Canada"],
        answer: "Russia"
    },
    {
        question: "Who painted the famous work 'The Starry Night'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the name of the largest ocean on Earth?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        answer: "Pacific"
    }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const selectedOptionRef = useRef([]);

    const handleOptionSelect = (option) => {
        selectedOptionRef.current[currentQuestion] = option
    };

    const handleNextButtonClick = () => {
        if (currentQuestion < questionsData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const totalScore = calculateScore();
            setScore(totalScore);
            setShowResult(true);
        }
    };

    const handleRestartButtonClick = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        selectedOptionRef.current = [];
    };

    const calculateScore = () => {
        let totalScore = 0;
        for (let i = 0; i < selectedOptionRef.current.length; i++) {
            if (selectedOptionRef.current[i] === questionsData[i].answer) {
                totalScore = totalScore + 2;
            }
        }
        return totalScore;
    };

    const pass = score >= 12

    return (
        <div>
            {showResult ? (
                <div className={Style.mainNav}>
                    <h2>Result</h2>
                    <p>Your score is: {calculateScore()
                    } out of {questionsData.length *
                        2}</p>
                    <p>You {pass ? "passed" : "failed"} the test.</p>
                    <button onClick={handleRestartButtonClick}>Restart Test</button>
                </div>
            ) : (
                <div className={Style.mainNav}>
                    <h2 className={Style.hTwo}>Question ({currentQuestion + 1})</h2>
                    <h3>{questionsData[currentQuestion].question}</h3>
                    {questionsData[currentQuestion].options.map((option) => (
                        <div key={option}>
                            <input
                                type="radio"
                                id={option}
                                name="option"
                                value={option}
                                onChange={() => handleOptionSelect(option)}
                            />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                    <button className={Style.btn} onClick={handleNextButtonClick}>Next</button>
                </div>
            )}
        </div>
    );
};

export default Test;