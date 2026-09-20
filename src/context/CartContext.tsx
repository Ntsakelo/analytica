import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Define strict types for better TypeScript support
interface CartItem {
  id: string | number;
  qty: number;
  size: string;
  [key: string]: any;
}

interface CartContextType {
  cart: CartItem[];
  count: number;
  total:number;
  addToCart: (item: CartItem) => void;
  reduceQty: (id:number, size:string,qty:number) => void;
  addQty: (id:number, size:string,qty:number) => void; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Safe initial state loading from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Keep localStorage in sync whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Derived state: Calculate total count on the fly during render
  const count = cart.reduce((total, item) => total + item.qty, 0);
  const total = cart.reduce((total,item) => total + item.total, 0);

  // Cart update logic matching your id/size rules
  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].qty += newItem.qty;
        return updatedCart;
      }

      return [...prevCart, newItem];
    });
  };

  const reduceQty = (id:number, size:string, qty:number) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === id && item.size === size);
        if(existingItem){
            if(existingItem.qty < 1){
               const existingIndex = prevCart.findIndex((item) => item.id === id && item.size === size)
               prevCart.splice(existingIndex,1)
            }
            if(existingItem.qty >= 1){
                existingItem.qty = qty - 1;
                existingItem.total = existingItem.qty * existingItem.price;
            }
            }
         return [...prevCart] 

     })
    }

       const addQty = (id:number, size:string, qty:number) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === id && item.size === size);
        if(existingItem){
            if(existingItem.qty >= 1){
                existingItem.qty = qty + 1;
                existingItem.total = existingItem.qty * existingItem.price;
            }
            }
         return [...prevCart] 

     })
  }

  return (
    <CartContext.Provider value={{ cart, count,total, addToCart, reduceQty, addQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};