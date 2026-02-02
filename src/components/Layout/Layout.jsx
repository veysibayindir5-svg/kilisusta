import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.2,
};

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="pt-14"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
