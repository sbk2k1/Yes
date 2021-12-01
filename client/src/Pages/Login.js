import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

    const data = await response.json()

    if(data.user){
      lcoalStorage.setItem('token', data.user)
      alert('Login Successful.')
      window.location.href = '/dashboard'
    } else{
      alert('Please check Email and Password')
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={loginUser}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
