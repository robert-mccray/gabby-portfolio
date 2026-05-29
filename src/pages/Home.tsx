import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion'; // <-- Added Variants here
import { PenTool, MonitorSmartphone, TrendingUp, Layers } from 'lucide-react';
import { projects } from '../data/projects';

// Add the : Variants type definition here
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  return (
    <div className="bg-transparent text-white selection:bg-gold selection:text-brand-dark">
      
      {/* 1. HERO / ABOUT SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 relative overflow-hidden">
        {/* Subtle background gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-light/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gold/30 bg-gold/10 text-xs font-sans tracking-widest text-gold uppercase"
            >
              Available for New Projects
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-7xl font-serif mb-6 leading-[1.1]"
            >
              Hi, I'm Gabby. <br />
              <span className="font-script text-gold text-7xl md:text-8xl font-normal tracking-wide lowercase">visual creator</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed font-sans mb-8"
            >
              With over 10 years of experience, I am a bilingual Brand Strategist and Digital Marketing Director turning high-level strategy into premium digital experiences. I integrate deep operational execution with hands-on graphic design to build scalable, high-converting ecosystems. 
              <br /><br />
              Whether I am developing a luxury healthcare identity or scaling a global esports brand, every deliverable is a completely original asset crafted from scratch to ensure absolute brand exclusivity.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="mailto:gabrielawfh@gmail.com" className="inline-block px-8 py-4 bg-gold text-brand-dark font-semibold font-sans rounded-full hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Start a Conversation
              </a>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-72 md:w-96 aspect-[4/5] rounded-t-full overflow-hidden border-b-4 border-gold shadow-2xl"
            >
              <img 
                src="/assets/gabby-headshot.png" 
                alt="Gabriela García" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-t-full pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. FEATURED WORK (Case Studies) */}
      <section className="px-6 py-24 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-2">Selected <span className="font-script text-gold text-5xl md:text-6xl lowercase">Work</span></h2>
            <p className="text-zinc-300 max-w-xl font-sans font-light">Deep dives into brand architecture, event marketing, and digital ecosystems.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Link to={`/case-studies/${project.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-transparent border border-brand-light aspect-[4/3] mb-6">
                    {project.gallery && project.gallery.length > 0 ? (
                      <img src={project.gallery[0].src} alt={project.gallery[0].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-500 font-sans text-sm">Asset Pending</div>
                    )}
                    <div className="absolute inset-0 bg-transparent/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3 text-xs font-sans tracking-widest text-gold uppercase">
                      <span>{project.company}</span>
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      <span>{project.date}</span>
                    </div>
                    <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-zinc-300 line-clamp-2 font-sans font-light text-sm md:text-base leading-relaxed">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERTISE & SERVICES */}
      <section className="px-6 py-32 bg-transparent border-t border-brand-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-2">Core <span className="font-script text-gold text-5xl md:text-6xl lowercase">Expertise</span></h2>
            <p className="text-zinc-300 max-w-2xl mx-auto font-sans font-light">I bridge the gap between high-level creative direction and precise operational execution. Every asset is purposely built to elevate your market presence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <PenTool size={24} className="text-gold" />, title: "Brand Identity", desc: "Custom logo design, visual systems, and comprehensive brand guidelines." },
              { icon: <MonitorSmartphone size={24} className="text-gold" />, title: "Digital Ecosystems", desc: "Web design, UI/UX layouts, and seamless e-commerce storefront integration." },
              { icon: <TrendingUp size={24} className="text-gold" />, title: "Growth Marketing", desc: "Multi-channel social strategy, influencer coordination, and campaign execution." },
              { icon: <Layers size={24} className="text-gold" />, title: "Physical & Event", desc: "High-end merchandise design, packaging, and physical event branding." }
            ].map((service, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-transparent border border-brand-muted hover:border-gold/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center mb-6 border border-brand-muted">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif mb-3">{service.title}</h4>
                <p className="text-zinc-300 font-sans font-light text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION FOOTER */}
      <section className="px-6 py-32 bg-transparent border-t border-brand-muted text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[300px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Let's build something <span className="font-script text-gold text-6xl md:text-8xl lowercase">exceptional</span>.</h2>
          <p className="text-xl text-zinc-300 mb-10 font-sans font-light">Currently accepting inquiries for freelance partnerships and full-time director roles.</p>
          <a href="mailto:gabrielawfh@gmail.com" className="inline-block px-10 py-4 bg-gold text-brand-dark font-sans font-semibold rounded-full hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            Contact Me
          </a>
        </motion.div>
      </section>

    </div>
  );
}