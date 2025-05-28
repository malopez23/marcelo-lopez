import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, User, Briefcase, Rocket, Github, Linkedin, Mail, Menu, X, FileCode2 } from 'lucide-react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Code size={20} /> },
    { name: 'Perfil', path: '/profile', icon: <User size={20} /> },
    { name: 'Currículo', path: '/resume', icon: <Briefcase size={20} /> },
    { name: 'Projetos', path: '/projects', icon: <Rocket size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white w-full" style={{ margin: 0, padding: 0 }}>
      {/* Sidebar (Desktop) */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-black/50 backdrop-blur-xl border-r border-purple-500/20"
      >
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent text-center mt-6">
          Marcelo Lopez
        </div>
        <nav className="flex flex-col gap-4 mt-6 ml-4 mr-4">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ x: 5 }}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-lg text-gray-300 hover:bg-purple-600/20 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/20 to-orange-600/20 text-white border border-purple-500/30'
                      : ''
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
          <a href="https://github.com" className="text-gray-300 hover:text-purple-400">
            <motion.div whileHover={{ rotate: -15 }}>
              <Github size={24} />
            </motion.div>
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-400">
            <motion.div whileHover={{ rotate: 15 }}>
              <Linkedin size={24} />
            </motion.div>
          </a>
          <a href="mailto:joao@example.com" className="text-gray-300 hover:text-orange-400">
            <motion.div whileHover={{ rotate: -10 }}>
              <Mail size={24} />
            </motion.div>
          </a>
        </div>
      </motion.aside>

      {/* Header (Mobile) */}
      <header className="lg:hidden top-0 left-0 right-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 flex justify-between items-center z-50 shadow-md">
        <div className="text-xl font-bold flex items-center bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
          <FileCode2 size={22} className="mr-2 text-purple-400" />
          Marcelo Lopez
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative lg:hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pl-3 text-gray-300 hover:bg-purple-600/20 flex items-center gap-2 rounded-lg ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/20 to-orange-600/20 text-white border border-purple-500/30'
                      : ''
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
            <div className="flex gap-4 mt-4 justify-center">
              <a href="https://github.com" className="text-gray-300 hover:text-purple-400">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:joao@example.com" className="text-gray-300 hover:text-orange-400">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo Principal */}
      <main className="ml-0 lg:ml-72 pt-20 lg:pt-0 min-h-screen" style={{ margin: 0, padding: 0 }}>
        <div className="lg:pl-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={window.location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Layout;