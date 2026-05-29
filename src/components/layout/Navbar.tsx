import { Link } from 'react-router-dom';
import { FileText, Mail } from 'lucide-react'; // Linkedin removed from here

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <Link 
          to="/" 
          className="text-lg font-bold tracking-widest text-white hover:text-zinc-300 transition-colors uppercase"
        >
          Gabriela<span className="text-zinc-500">.</span>
        </Link>

        {/* Action Links */}
        <div className="flex items-center space-x-6">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/gabrieiva/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            {/* Custom LinkedIn SVG to replace the removed Lucide icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a 
            href="mailto:gabrielaivaniag@gmail.com"
            className="px-4 py-2 text-sm font-medium bg-zinc-100 text-black rounded-full hover:bg-zinc-300 transition-colors flex items-center gap-2"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>

      </div>
    </nav>
  );
}