import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const neWuser = { name, email };
    console.log(user);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(neWuser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

      const newUsers = [...user, neWuser]
      setUser(newUsers)
    form.reset()  
  };
  return (
    <>
          <h1>User management system</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <br />
          <input type="email" name="email" placeholder="mail" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <p>Total user: {user.length}</p>
      {user.map((user) => (
        <h3 key={user.id}><span>{user.id}. </span>{user.email}</h3>
      ))}
    </>
  );
}

export default App;
