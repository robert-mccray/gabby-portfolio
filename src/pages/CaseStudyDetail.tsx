import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/case-studies';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? caseStudies[id] : null;

  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-20">
      <Link to="/" className="text-indigo-400 hover:text-indigo-300 mb-8 inline-block">← Back Home</Link>
      <h1 className="text-6xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-2xl text-zinc-400 mb-8">{project.client} | {project.role}</h2>
      <p className="max-w-2xl text-lg text-zinc-300">{project.strategy}</p>
    </div>
  );
}