import { TodoProvider } from './context/todo'
import { AppLayout } from './layout'

function App() {

  return (
    <TodoProvider>
      <AppLayout />
    </TodoProvider>
  )
}

export default App
