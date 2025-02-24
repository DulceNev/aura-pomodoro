// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'react-tooltip/dist/react-tooltip.css'
import MyTimer from './components/MyTimer'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Header></Header>
      <MyTimer></MyTimer>
      <Drawer></Drawer>
    </>
  )
}

export default App
