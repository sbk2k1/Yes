import {useState} from react;
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
      </form>
    </div>
  );
}

export default App;
