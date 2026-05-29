import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    filter: 'blur(4px)',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function PageTransition({ children, keyPath }: { children: ReactNode, keyPath: string }) {
  return (
    <motion.div
      key={keyPath}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}