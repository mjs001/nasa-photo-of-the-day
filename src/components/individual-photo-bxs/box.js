import React from "react";

const BoxCard = props => {
    return (
        <div className="top-text">
        <p>title: {props.title}</p>
        <p>copyright: {props.copyright}</p>
        <div className="images">
          <img src={`${props.url}`}></img>
        <div className="bottom-text">
            <p>date: {props.date}</p>
            <p>explanation: {props.explanation}</p>
        </div>
        </div>
        </div>
    );
};
export default BoxCard;