import './App.css';
import NavBar from "./components/Navigation/NavBar"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import New from "./components/CreateNew/New"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Header/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/createNew' element={<New/>} />
      </Routes>
    </Router>
  );
}

export default App;
