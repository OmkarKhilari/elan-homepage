import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/> 
    </div>
  );
}

export default App;
