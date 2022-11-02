import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
