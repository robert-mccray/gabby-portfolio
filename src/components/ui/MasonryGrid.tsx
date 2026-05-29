import { motion, type Variants } from 'framer-motion';

interface MasonryImage {
  src: string;
  alt: string;
}

interface MasonryGridProps {
  images: MasonryImage[];
}

// Framer motion variants for a staggered fade-in effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Delays each image load slightly for a premium feel
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function MasonryGrid({ images }: MasonryGridProps) {
  if (!images || images.length === 0) return null;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      // Tailwind's CSS column layout creates the masonry effect natively
      className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto py-12"
    >
      {images.map((image, index) => (
        <motion.div key={index} variants={itemVariants} className="break-inside-avoid">
          <div className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800">
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Optional subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}