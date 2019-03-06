import React from "react";
import "./style.css";

//onclick to remove cards
function FriendCard(props) {
  return (
      <div className="card img-container" onClick={props.clickFunction}>
      <img id={props.id} alt={props.id} src={props.image}/>
      </div>
  );
}


export default FriendCard;
