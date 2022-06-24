import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="Synonyms">
              <span>{synonym} </span>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
