import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <>
      <h1>User management system</h1>
      <p>Total user: {user.length}</p>
      {
        user.map(user => <h3 key={user.id}>{user.email}</h3>)
      }
    </>
  )
}

export default App
