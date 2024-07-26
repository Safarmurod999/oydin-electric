
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/router'
import { Toaster, toast } from 'sonner'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Toaster />
      <Router />
    </BrowserRouter>
  )
}

export default App
