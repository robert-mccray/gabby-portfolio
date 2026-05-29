import { useParams, Link } from 'react-router-dom';
import MasonryGrid from '../components/ui/MasonryGrid';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-zinc-300">
        <h2 className="text-2xl font-serif text-white mb-4">Project Not Found</h2>
        <Link to="/" className="text-gold hover:text-gold-light underline transition-colors">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-zinc-300 pt-24">
      {/* Top Breadcrumb Navigation */}
      <nav className="max-w-7xl mx-auto px-6 pb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-sans text-zinc-400 hover:text-gold transition-colors group"
        >
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>
      </nav>

      {/* Main Layout Split */}
      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-12 lg:gap-12 pb-24">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-4 mb-12 lg:mb-0">
          <div className="lg:sticky lg:top-28 space-y-8">
            <div>
              <span className="text-xs font-sans tracking-widest text-zinc-400 uppercase block mb-2">
                {project.date}
              </span>
              {/* GOLD COMPANY NAME */}
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                {project.company}
              </h1>
              <p className="text-lg font-sans text-zinc-300">
                {project.title}
              </p>
            </div>

            {/* COLORED TAGS WITH HOVER */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 text-xs font-sans tracking-wider text-brand-light bg-brand-dark border border-brand-muted rounded-full hover:bg-brand-light hover:text-white hover:border-brand-light transition-all duration-300 cursor-default shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <hr className="border-brand-muted" />

            <div className="space-y-4">
              <h3 className="text-xs font-sans font-semibold tracking-widest text-zinc-500 uppercase">
                Core Initiative
              </h3>
              <p className="text-zinc-300 font-light leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            {project.milestones && (
              <div className="space-y-4">
                <h3 className="text-xs font-sans font-semibold tracking-widest text-zinc-500 uppercase">
                  Key Deliverables & Impact
                </h3>
                <ul className="space-y-3 text-sm font-light text-zinc-300">
                  {project.milestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-3 mt-0.5 select-none font-sans font-bold">0{idx + 1}.</span>
                      <span className="leading-relaxed">{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Asset Stream (GOLD LINES) */}
        <div className="lg:col-span-8">
          <div className="border border-gold/30 bg-brand-dark/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 min-h-[500px] shadow-[0_0_30px_rgba(212,175,55,0.05)]">
            <div className="mb-6 flex items-center justify-between border-b border-gold/30 pb-4">
              <h2 className="text-xs font-semibold tracking-widest text-gold uppercase font-sans">
                Asset Inventory // {project.gallery?.length || 0} Items Verified
              </h2>
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-gold/40" />
                <div className="w-2 h-2 rounded-full bg-gold/40" />
                <div className="w-2 h-2 rounded-full bg-gold/40" />
              </div>
            </div>
            
            <MasonryGrid images={project.gallery || []} />
          </div>
        </div>

      </div>
    </div>
  );
}