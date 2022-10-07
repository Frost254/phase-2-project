import React, {useState} from "react";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    likes: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  fetch("http://localhost:3004/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({formData}),
  })


  return (
    <section>
      <h1>Welcome to The ToyLand FunLand!</h1>
      <p>Let's add some toys....</p>
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
        <button type="submit">Add Toy</button>
      </form>
    </section>
  );
}

export default Home;