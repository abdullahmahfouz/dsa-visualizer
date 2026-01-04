import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

const dataStructures = [
  {
    title: 'Stack',
    description: 'Last In, First Out (LIFO)',
    path: '/stack',
    enabled: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="4" rx="1"/>
        <rect x="4" y="10" width="16" height="4" rx="1"/>
        <rect x="4" y="16" width="16" height="4" rx="1"/>
      </svg>
    )
  },
  {
    title: 'Queue',
    description: 'First In, First Out (FIFO)',
    path: '/queue',
    enabled: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="9" width="5" height="6" rx="1"/>
        <rect x="9" y="9" width="5" height="6" rx="1"/>
        <rect x="16" y="9" width="5" height="6" rx="1"/>
        <path d="M7 12h2M14 12h2"/>
      </svg>
    )
  },
  {
    title: 'Linked List',
    description: 'Sequential node connections',
    path: '/linked-list',
    enabled: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="5" cy="12" r="3"/>
        <circle cx="19" cy="12" r="3"/>
        <path d="M8 12h8"/>
        <path d="M14 9l3 3-3 3"/>
      </svg>
    )
  },
  {
    title: 'Binary Tree',
    description: 'Hierarchical data structure',
    path: '/binary-tree',
    enabled: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="3"/>
        <circle cx="6" cy="17" r="3"/>
        <circle cx="18" cy="17" r="3"/>
        <path d="M10 7.5L7 14.5M14 7.5l3 7"/>
      </svg>
    )
  }
]

function Home() {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
        Data Structures & Algorithms Visualizer
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        Learn Data Structures & Algorithms through interactive visualizations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {dataStructures.map((ds) => {
          const CardWrapper = ds.enabled ? Link : 'div'
          return (
            <CardWrapper
              key={ds.title}
              to={ds.enabled ? ds.path : undefined}
              className={ds.enabled ? '' : 'cursor-not-allowed'}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/50 ${!ds.enabled ? 'opacity-50' : 'hover:-translate-y-1'}`}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-3 text-indigo-400">
                    {ds.icon}
                  </div>
                  <CardTitle className="text-indigo-400">{ds.title}</CardTitle>
                  <CardDescription>{ds.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${ds.enabled ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'bg-muted text-muted-foreground'}`}>
                    {ds.enabled ? 'Start Learning' : 'Coming Soon'}
                  </span>
                </CardFooter>
              </Card>
            </CardWrapper>
          )
        })}
      </div>

      <footer className="mt-16 text-muted-foreground text-sm">
        Created By Abdullah Mahfouz
      </footer>
    </div>
  )
}

export default Home
