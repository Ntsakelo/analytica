import {Routes,Route} from 'react-router'
import Home from './views/Home'
import Products from './views/Products'
import Product from './views/Product'
import Cart from './views/Cart'

function App() {


  return (
    
    <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="/shop/:category" element={<Products />} />
      <Route path="/shop/:category/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
   
  )
}

export default App
