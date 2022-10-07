import React from "react";
import styles from "./css/styles.css"


function About({ toys }) {
  return <>
  <h1>This is my Toys component!</h1>
  <div>
    <ul>
        {toys.map(toy => <>
        <li>
            <div>
                <h4>{toy.name}</h4>
                <img src={toy.image} alt="toy"/>
                <p>Likes: {toy.likes}</p>
            </div>
        </li>
        </>)}
    </ul>
  </div>
  </>;
}

export default About;