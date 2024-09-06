import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
     <Routes>
     <Route path='/Food_Delivery_Website' element={<Home/>} />
      <Route path='/Food_Delivery_Website/cart' element={<Cart/>} />
      <Route path='/Food_Delivery_Website/order' element={<PlaceOrder/>} />
     </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
