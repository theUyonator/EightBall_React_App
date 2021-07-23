import React, { useState } from "react";
import "./EightBall.css";

const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];

const randomChoice = (arr) =>{
    let randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

const EightBall = (props) =>{

    const [text, setText] = useState("Think of a Question");
    const [color, setColor] = useState("Black");

    const handleClick = () =>{
        let displayItem = randomChoice(props.answers);
        setText(displayItem.msg);
        setColor(displayItem.color);
    }

    return (
        <div className="EightBall" style={{backgroundColor: color}} onClick={handleClick}>
            <div className="EightBall_msg">{text}</div>
    
        </div>
    );
}

export default EightBall;
export { answers };