import React from "react";
import styles from "./css/styles.css"


function Toys({ toys }) {
  return <>
  <h1>This is my Toys component!</h1>
  <div>
    <ul>
        {toys.map(toy => <>
        <li key = { toy.id }>
            <div className="toys">
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

export default Toys;