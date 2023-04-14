import { useState } from 'react'
import NotificationContainer from './components/NotificationContainer'
import './App.css'
import NotificationHead from './components/NotificationHead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NotificationHead/>
      <NotificationContainer/>
      
    </div>
  )
}

export default App
