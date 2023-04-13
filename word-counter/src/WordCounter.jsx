import React, { useState } from 'react';
export default function WordCounter(params) {
    const [text, setText] = useState("")
    const [letter, setLetter] = useState(0)
    const [word, setWord] = useState(0)
    const [paragraph, setParagraph] = useState(0)
    const handleTextArea = (e) => {
        //dem ky tu
        const textInput = e.target.value.trim();
        setText(e.target.value);
        setLetter(textInput.length);
        //dem so tu
        const wordInput = textInput.split(" ");
        const removeSpace = wordInput.filter((word) => word !== "")
        setWord(removeSpace.length);

        const paragraphs = textInput.split("\n");
        const filterParagraphs = paragraphs.filter((para) => para.trim() !== "");
        setParagraph(filterParagraphs.length);


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
            <textarea name="" value={text} id="text" cols="70" rows="15" placeholder='Enter,paste your text here' onChange={(e) => {
                handleTextArea(e)

            }}></textarea>
            <button onClick={() => { setText(text.toUpperCase()) }}>Click to uppercase</button>
            <button onClick={() => { setText(text.toLowerCase()) }}>Click to lowercase</button>
        </div>
    )
}
