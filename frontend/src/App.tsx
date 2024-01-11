import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Landing/>}></Route>
      <Route path='/' element= {<Landing/>}></Route>

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
