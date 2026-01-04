import { useState, useEffect } from 'react'
import { stackApi } from '../utils/stackapi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function StackPage() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)
  const [top, setTop] = useState(null)

  useEffect(() => {
    fetchStack()
  }, [])

  const fetchStack = async () => {
    try {
      const data = await stackApi.get()
      setItems(data.items)
      setTop(data.top)
    } catch (error) {
      showMessage('Error fetching stack', 'error')
    }
  }

  const showMessage = (text, type = 'info') => {
    setMessage({ text, type })
    setTimeout(() => setMessage({ text: '', type: '' }), 3000)
  }

  const handlePush = async () => {
    if (!inputValue.trim()) {
      showMessage('Please enter a value', 'error')
      return
    }

    setLoading(true)
    try {
      const value = isNaN(inputValue) ? inputValue : Number(inputValue)
      const data = await stackApi.push(value)
      setItems(data.items)
      setTop(data.items[data.items.length - 1])
      showMessage(data.message, 'success')
      setInputValue('')
    } catch (error) {
      showMessage(error.message || 'Error pushing to stack', 'error')
    }
    setLoading(false)
  }

  const handlePop = async () => {
    setLoading(true)
    try {
      const data = await stackApi.pop()
      setItems(data.items)
      setTop(data.items.length > 0 ? data.items[data.items.length - 1] : null)
      showMessage(data.message, 'success')
    } catch (error) {
      showMessage(error.message || 'Stack is empty!', 'error')
    }
    setLoading(false)
  }

  const handlePeek = async () => {
    try {
      const data = await stackApi.peek()
      showMessage(data.message, 'info')
    } catch (error) {
      showMessage('Error peeking stack', 'error')
    }
  }

  const handleClear = async () => {
    setLoading(true)
    try {
      const data = await stackApi.clear()
      setItems(data.items)
      setTop(null)
      showMessage(data.message, 'success')
    } catch (error) {
      showMessage('Error clearing stack', 'error')
    }
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Stack Operations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Push (Add to top)</label>
            <div className="flex gap-3">
              <Input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a number"
                onKeyPress={(e) => e.key === 'Enter' && handlePush()}
                className="font-mono"
              />
              <Button onClick={handlePush} disabled={loading}>
                Push
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Other Operations</label>
            <div className="flex gap-2 flex-wrap">
              <Button variant="destructive" onClick={handlePop} disabled={loading || items.length === 0}>
                Pop
              </Button>
              <Button variant="secondary" onClick={handlePeek} disabled={items.length === 0}>
                Peek
              </Button>
              <Button variant="outline" onClick={handleClear} disabled={loading || items.length === 0}>
                Clear
              </Button>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-muted rounded-lg">
            <div className="flex-1 text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">Size</span>
              <span className="text-2xl font-bold font-mono bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {items.length}
              </span>
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">Top</span>
              <span className="text-2xl font-bold font-mono bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {top !== null ? top : 'Empty'}
              </span>
            </div>
          </div>

          {message.text && (
            <div className={`p-3 rounded-lg text-center font-medium ${
              message.type === 'success' ? 'bg-green-500/15 text-green-500 border border-green-500/30' :
              message.type === 'error' ? 'bg-red-500/15 text-red-500 border border-red-500/30' :
              'bg-blue-500/15 text-blue-500 border border-blue-500/30'
            }`}>
              {message.text}
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="learn">
              <AccordionTrigger className="text-indigo-400">Learn About Stacks</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Stack</strong> is a LIFO (Last In, First Out) structure:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Push O(1):</strong> Add to top</li>
                    <li><strong>Pop O(1):</strong> Remove from top</li>
                    <li><strong>Peek O(1):</strong> View top element</li>
                  </ul>
                  <p className="italic">Example: Browser back button, Undo feature</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stack Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center min-h-[400px] justify-end p-4">
            <div className="flex flex-col items-center w-full max-w-[280px]">
              {items.length === 0 ? (
                <div className="p-8 text-muted-foreground italic text-center bg-muted rounded-lg border-2 border-dashed">
                  Stack is empty. Push some items!
                </div>
              ) : (
                [...items].reverse().map((item, index) => (
                  <div
                    key={index}
                    className={`w-[200px] p-4 my-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex justify-between items-center animate-in slide-in-from-top-2 ${
                      index === 0 ? 'shadow-lg shadow-indigo-500/40 ring-2 ring-white/20' : ''
                    }`}
                  >
                    <span className="text-xl font-bold font-mono text-white">{item}</span>
                    {index === 0 && <span className="text-xs font-semibold uppercase text-white/80">TOP</span>}
                  </div>
                ))
              )}
            </div>
            <div className="w-[240px] p-3 bg-muted border rounded-b-lg text-center text-xs font-semibold text-muted-foreground uppercase mt-1">
              BOTTOM
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default StackPage
