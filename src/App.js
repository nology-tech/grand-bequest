import './App.css';
import NavBar from "./components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './containers/Routes';


function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
