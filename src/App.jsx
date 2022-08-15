import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

const cards= Data.map (item => {
  return (
    <Card 
    key={item.id}
    item={item}
    />
  )
})

  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  )
}

export default App
