import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Divisions from './pages/Divisions'
import Development from './pages/Development'
import League from './pages/League'
import News from './pages/News'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import Register from './pages/Register'
import Resources from './pages/Resources'
import Schedule from './pages/Schedule'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-primary-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/development" element={<Development />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/league" element={<League />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
