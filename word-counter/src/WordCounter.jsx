import React, { useState } from 'react';
export default function WordCounter(params) {
    const [allLetter, setAllLetterld] = useState("");
    const [text, setText] = useState("")
    const [letter, setLetter] = useState(0)
    const [word, setWord] = useState(0)
    const [paragraph, setParagraph] = useState(0)
    const handleTextArea = (event) => {
        //dem ky tu
        const textInput = event.target.value.trim();
        setText(event.target.value);
        setLetter(textInput.length);
        //dem so tu
        const wordInput = textInput.split();
        const removeSpace = wordInput.filter((word) => word !== "")
        setWord(removeSpace.length);


        
        }

        return (
            <div id='parent'>
                <h2>WORD COUNTER</h2>
                <div id='nav'>
                    <div id='child'>
                        <h3>Letter</h3>
                        <p>{letter}</p>
                    </div>
                    <div id='child'>
                        <h3>Word</h3>
                        <p>{word}</p>
                    </div>
                    <div id='child'>
                        <h3>Paragraph</h3>
                        <p>{paragraph}</p>
                    </div>
                </div>
                <textarea name="" id="text" cols="70" rows="15" placeholder='Enter,paste your text here' value={text} onChange={(e) => { handleTextArea(e.target.value) }}></textarea>

            </div>
        )
    }
