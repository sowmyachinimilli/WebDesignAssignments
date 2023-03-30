import React from "react";
import './Card.css';
function Square (props){
    var squareStyle = {
        height: 50,
        backgroundColor: props.color,
        padding: 15,
        fontWeight: "bold",
        fontSize: 18
    };
    return (
            <div style={squareStyle}>
             {props.title}
             {props.content}
            </div>
    )
}


function Card (props){
        var cardStyle = {
            height: 100,
            width: 320,
            padding: 0,
            margin: 20,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle}>
                <Square color={props.color} title={props.title}/> {props.content}
            </div>
        );
    }

export default Card