import {Routes,Route, useLocation} from 'react-router'
import Home from './views/Home'
import Products from './views/Products'
import Product from './views/Product'
import Cart from './views/Cart'
import { useEffect } from 'react';





declare global{
  interface Window {
    dataLayer: any[],
  }
}

function App() {

  function ScrollToTopAndTrack() {
  const location = useLocation();

  useEffect(() => {
    // Check if window.dataLayer exists to avoid crashes
    window.dataLayer = window.dataLayer || [];
    
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_path: location.pathname,
      page_title: document.title
    });
  }, [location]);

  return null;
}

ScrollToTopAndTrack();



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
