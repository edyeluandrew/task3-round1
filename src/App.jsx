import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import CoursesList from './pages/CoursesList';
import CourseDetail from './pages/CourseDetail';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            {/* Fallback for invalid routes */}
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}
