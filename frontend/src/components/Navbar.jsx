import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function Navbar() {
  const location = useLocation()

  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/stack':
        return 'Stack'
      case '/queue':
        return 'Queue'
      default:
        return null
    }
  }

  const currentPage = getCurrentPage()

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-card/90 backdrop-blur-xl border-b mb-6">
      <Link to="/" className="text-xl font-bold hover:text-indigo-400 transition-colors">
        DSA Visualizer
      </Link>
      
      {currentPage ? (
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 rounded-full text-sm font-semibold text-white">
          {currentPage}
        </span>
      ) : (
        <div className="flex gap-2">
          <Button 
            variant={location.pathname === '/stack' ? 'default' : 'ghost'} 
            asChild
          >
            <Link to="/stack">Stack</Link>
          </Button>
          <Button 
            variant={location.pathname === '/queue' ? 'default' : 'ghost'} 
            asChild
          >
            <Link to="/queue">Queue</Link>
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
