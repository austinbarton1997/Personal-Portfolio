import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/NavBar';
import About from './components/body/About';
import Author from './components/body/about/avatar/Author'
import Background from './components/body/background/Background'

function App() {
  return (
    <div class="mainContainer">
      <Navbar />
      <About />
      <Background />
    </div>
  );
}

export default App;
