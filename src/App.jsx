import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import LinkedinLogo from './assets/linkedin.svg'
import GithubLogo from './assets/github.svg'
import TwitterLogo from './assets/twitter.svg'

function App() {
  
  return (
    <div className='App'>
      <header>
        <h4>Felicia</h4>
       
        <div className='navLinks'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
        </div>
      </header>

  <main>    
<Home />
<About />
<Projects />
<Contact />
</main>

<footer>
  <div className='social'>
    <a href="https://www.linkedin.com/in/feliciaegbanabo" target="_blank">
      <img src={LinkedinLogo} alt="" />
      </a>
    <a href="https://mobile.twitter.com/ASuccessMagnet" target="_blank">
      <img src={TwitterLogo} alt="" />
      </a>
    <a href="https://github.com/oganya007" target="_blank">
      <img src={GithubLogo} alt="" />
      </a>
      <p>&copy; Felicia Egbanabo </p>
  </div>
  
</footer>
    </div>
  )
}

export default App
