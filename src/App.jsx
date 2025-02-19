// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MyTimer from './components/MyTimer'
import Header from './components/Header/Header'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <MyTimer></MyTimer>
    </>
  )
}

export default App
