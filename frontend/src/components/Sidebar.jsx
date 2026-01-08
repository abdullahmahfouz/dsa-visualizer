import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Home, Code2, Layers, ArrowRightLeft, Link as LinkIcon, 
  Hash, GitBranch, Mail, HeartHandshake, BrainCircuit, Github, Linkedin 
} from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const activePage = location.pathname === '/' ? 'home' : 
                     location.pathname.replace('/', '').replace('_', '');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const NavItem = ({ to, icon: Icon, children, pageName }) => {
    const isActive = activePage === pageName;
    return (
      <Link 
        to={to} 
        className={`nav-item ${isActive ? 'active' : ''}`}
        onClick={closeMenu}
      >
        <Icon />
        <span>{children}</span>
      </Link>
    );
  };

  return (
    <>
      <button 
        className="mobile-menu-toggle" 
        id="mobileMenuToggle" 
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
      
      <aside className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="logo-wrapper" onClick={closeMenu}>
            <img src="/logo.svg" alt="DSA Visualizer Logo" className="logo-icon" />
            <span className="logo-text">DSA Visualizer</span>
          </Link>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Explore</div>
            <NavItem to="/" icon={Home} pageName="home">Home</NavItem>
            <NavItem to="/algorithms" icon={Code2} pageName="algorithms">Algorithms</NavItem>
          </div>
          
         
          
          <div className="nav-section">
            <div className="nav-section-title">More</div>
            <NavItem to="/contact" icon={Mail} pageName="contact">Contact</NavItem>
            <NavItem to="/contributions" icon={HeartHandshake} pageName="contributions">Contributions</NavItem>
          </div>
        </nav>
        
        <div className="sidebar-footer">
          <div className="social-links-sidebar">
            <a 
              href="https://github.com/abdullahmahfouz" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
            >
              <Github />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdullah-mahfouz-5188b1306/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
          <p className="copyright">&copy; 2026 Abdullah Mahfouz</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

