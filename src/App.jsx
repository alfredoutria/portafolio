import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from './Principal'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Principal/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
