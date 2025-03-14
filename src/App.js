import './App.css';
import Home from './home-main';
import About from './about-main';
import Contact from './contact-main';

function App() {
  const a= {
    name: "development",
    email: "development@gmail.com",
  }
  return (
    <div>
      <Home info={a} />
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
