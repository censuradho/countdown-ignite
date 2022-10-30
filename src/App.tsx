import { globalStyle } from '@/stitches.config'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { TimerProvider } from './context/timer'
import { RootRoutes } from './routes'

function App () {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <BrowserRouter>
      <TimerProvider>
        <RootRoutes />
      </TimerProvider>
    </BrowserRouter>
  )
}

export default App
