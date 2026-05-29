import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail'; // Changed from CaseStudyDetail based on our last step
import PageTransition from './components/animations/PageTransition';
import Navbar from './components/layout/Navbar';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition keyPath="/">
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/case-studies/:id" 
          element={
            <PageTransition keyPath={location.pathname}>
              <ProjectDetail />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-zinc-950 min-h-screen font-sans">
        {/* Persistent Navbar injected here */}
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}