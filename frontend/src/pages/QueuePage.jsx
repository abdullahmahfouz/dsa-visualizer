import { useState, useEffect } from 'react'
import { queueApi } from '../utils/queueapi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function QueuePage() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)
  const [front, setFront] = useState(null)

  useEffect(() => {
    fetchQueue()
  }, [])

  const fetchQueue = async () => {
    try {
      const data = await queueApi.get()
      setItems(data.items)
      setFront(data.front)
    } catch (error) {
      showMessage('Error fetching queue', 'error')
    }
  }

  const showMessage = (text, type = 'info') => {
    setMessage({ text, type })
    setTimeout(() => setMessage({ text: '', type: '' }), 3000)
  }

  const handleEnqueue = async () => {
    if (!inputValue.trim()) {
      showMessage('Please enter a value', 'error')
      return
    }

    setLoading(true)
    try {
      const value = isNaN(inputValue) ? inputValue : Number(inputValue)
      const data = await queueApi.enqueue(value)
      setItems(data.items)
      setFront(data.items[0])
      showMessage(data.message, 'success')
      setInputValue('')
    } catch (error) {
      showMessage(error.message || 'Error adding to queue', 'error')
    }
    setLoading(false)
  }

  const handleDequeue = async () => {
    setLoading(true)
    try {
      const data = await queueApi.dequeue()
      setItems(data.items)
      setFront(data.items.length > 0 ? data.items[0] : null)
      showMessage(data.message, 'success')
    } catch (error) {
      showMessage(error.message || 'Queue is empty!', 'error')
    }
    setLoading(false)
  }

  const handlePeek = async () => {
    try {
      const data = await queueApi.peek()
      showMessage(data.message, 'info')
    } catch (error) {
      showMessage('Error peeking queue', 'error')
    }
  }

  const handleClear = async () => {
    setLoading(true)
    try {
      const data = await queueApi.clear()
      setItems(data.items)
      setFront(null)
      showMessage(data.message, 'success')
    } catch (error) {
      showMessage('Error clearing queue', 'error')
    }
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Queue Operations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Enqueue (Add to back)</label>
            <div className="flex gap-3">
              <Input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a number"
                onKeyPress={(e) => e.key === 'Enter' && handleEnqueue()}
                className="font-mono"
              />
              <Button onClick={handleEnqueue} disabled={loading}>
                Enqueue
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Other Operations</label>
            <div className="flex gap-2 flex-wrap">
              <Button variant="destructive" onClick={handleDequeue} disabled={loading || items.length === 0}>
                Dequeue
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
              <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">Front</span>
              <span className="text-2xl font-bold font-mono bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {front !== null ? front : 'Empty'}
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
              <AccordionTrigger className="text-indigo-400">Learn About Queues</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Queue</strong> is a FIFO (First In, First Out) structure:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Enqueue O(1):</strong> Add to back</li>
                    <li><strong>Dequeue O(n):</strong> Remove from front</li>
                    <li><strong>Peek O(1):</strong> View front element</li>
                  </ul>
                  <p className="italic">Example: Print queue, waiting lines</p>
                  <div className="pt-3 mt-3 border-t border-indigo-500/20">
                    <p><strong className="text-foreground">Stack vs Queue:</strong></p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Stack = LIFO (plates)</li>
                      <li>Queue = FIFO (line at store)</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Queue Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center min-h-[180px] gap-4 p-8">
            <span className="text-muted-foreground font-medium">FRONT</span>
            <div className="flex items-center gap-2 p-6 bg-muted rounded-lg min-w-[120px] overflow-x-auto">
              {items.length === 0 ? (
                <div className="p-8 text-muted-foreground italic text-center w-full">
                  Queue is empty. Enqueue some items!
                </div>
              ) : (
                items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center min-w-[70px] h-[70px] p-3 rounded-lg animate-in slide-in-from-right-2 ${
                      index === 0 
                        ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/40' 
                        : index === items.length - 1
                        ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/40'
                        : 'bg-gradient-to-br from-green-500 to-green-600'
                    }`}
                  >
                    <span className="text-xl font-bold font-mono text-white">{item}</span>
                    {index === 0 && <span className="text-[10px] font-semibold uppercase text-white/80">FRONT</span>}
                    {index === items.length - 1 && items.length > 1 && <span className="text-[10px] font-semibold uppercase text-white/80">BACK</span>}
                  </div>
                ))
              )}
            </div>
            <span className="text-muted-foreground font-medium">BACK</span>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6 text-muted-foreground text-sm">
            <span>Dequeue</span>
            <span className="px-4 py-2 bg-muted border rounded-lg font-mono">[ FRONT ... BACK ]</span>
            <span>Enqueue</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default QueuePage
