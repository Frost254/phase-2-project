import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/styles.css"


function Home({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: ""
  });
  const history = useNavigate();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:3004/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      image: formData.img,
      likes: formData.likes
    }),
  })
  .then(res => res.json())
  .then(newToy => {
    onAddItem(newToy)
    alert("Toy submitted! Visit the toys section to view")
    history.push("/about")
  })

  }



  return (
    <section className="container" style={styles}>
      <h1>Welcome to The ToyLand FunLand!</h1>
      <p>Let's add some toys....</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Submit image url:
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <label>
          Likes:
          <input
            type="text"
            name="likes"
            value={formData.likes}
            onChange={handleChange}
          />
        </label>
        <hr />
        <button type="submit" className="registerbtn">Add Toy</button>
      </form>
    </section>
  );
}

export default Home;