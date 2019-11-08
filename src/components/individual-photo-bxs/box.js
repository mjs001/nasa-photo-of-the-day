import React from "react";

import styled from "styled-components";

const Card = styled.div`
  border: 4px double cyan;
  background-color: purple;
  width: 1000px;
  margin: 50px auto;
  box-shadow: 2px 2px 10px navy;
  transition: transform 300ms ease-in-out;
  color: white;
  img {
    width: 150%;
    transition: all 0.6s ease-in-out;
    &:hover {
      transform: scale(2);
    }

    h2 {
      font-size: 2rem;
      text-align: center;
      color: white;
      margin: 5px;

      h3 {
        font-size: 1.5rem;
        margin: 10px;
        color: white;
      }
    }
  }
`;
const ContentDiv = styled.div`
  display: flex;
  align-content: top;
  margin: 0 auto;
  div {
    width: 50%;
    text-align: center;
    padding: 0px 20px;
  }
`;
function CharCard(props) {
  return (
    <div className="cardList">
      <Card key={props.name}>
        <h2>{props.name}</h2>
        <ContentDiv>
          <div>
            <p>HEIGHT: {props.title}</p>
            <h3>COPYRIGHT: {props.copyright}</h3>
            <img src={`${props.url}`}></img>
            <p>DATE: {props.date}</p>
            <p>EXPLANATION: {props.explanation}</p>
          </div>
        </ContentDiv>
      </Card>
    </div>
  );
}

export default CharCard;

/* <div className="top-text">
      <p>title: {props.title}</p>
      <p>copyright: {props.copyright}</p>
      <div className="images">
        <img src={`${props.url}`}></img>
        <div className="bottom-text">
          <p>date: {props.date}</p>
          <p>explanation: {props.explanation}</p> */
