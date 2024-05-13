import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import NoPage from "./pages/NoPage";
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route index element={< Home ></Home >} />
        <Route path='/page1' element={<Page1></Page1>} />
        <Route path='/page2' element={<Page2/>} />
        <Route path='*' element={<NoPage></NoPage>} />
        <Route path='/page3' element={<Page3/>} />
     

    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
