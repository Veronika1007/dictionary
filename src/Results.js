import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <section>
          <h2 className="resultWord">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
          ;
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
