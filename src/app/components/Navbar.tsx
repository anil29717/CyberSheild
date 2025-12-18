import React, { useState, useEffect } from 'react';
import { Menu, ChevronLeft, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Navbar scroll effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when sidebar open */
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  const navLinks = [
    'Home',
    'About',
    'Services',
    'Industries',
    'Case Studies',
    'Blog',
    'Contact',
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AnimatePresence>
        {!sidebarOpen && (
          <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`
              fixed top-6 left-4 z-[1000]
              flex items-center gap-3
              px-3 py-2 rounded-2xl border
              ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg border-blue-200'
                : 'bg-white shadow-lg border-blue-200'
              }
            `}
          >
            {/* Hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="group flex items-center justify-center rounded-xl bg-blue-600 p-2 transition-all hover:scale-105"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4 text-white transition-transform group-hover:scale-110" />
            </button>

            {/* Logo (desktop only) */}
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-900" />

              <p className="text-blue-900 font-bold text-lg">
                CyberShield
              </p>
            </div>

          </motion.nav>
        )}
      </AnimatePresence>

      {/* ================= BACKDROP ================= */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[1999]"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ================= SIDEBAR ================= */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="
              fixed top-0 left-0 z-[2000]
              h-full bg-white shadow-2xl
              w-screen md:w-2/12
            "
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-4 py-5 border-b">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-900" />

                <p className="text-blue-900 font-bold text-lg">
                  CyberShield
                </p>
              </div>

              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md bg-blue-900 hover:bg-blue-700 transition"
                aria-label="Close sidebar"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Sidebar Menu */}
            <nav className="p-4 space-y-3">
              {navLinks.map((item) => (
                <div
                  key={item}
                  className="
                    px-4 py-3 rounded-lg cursor-pointer
                    text-gray-700 font-medium
                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700
                    hover:text-white transition-all
                  "
                  onClick={() => setSidebarOpen(false)}
                >
                  {item}
                </div>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ================= PAGE CONTENT ================= */}
      
    </>
  );
};

export default Navbar;
