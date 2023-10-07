import './App.css';
import HomePage from './pages/homepage';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
