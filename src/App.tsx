import { globalStyle } from '@/stitches.config'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RootRoutes } from './routes'

function App () {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter>
  )
}

export default App
