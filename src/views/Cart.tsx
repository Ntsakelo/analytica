import Navbar from "../components/Navbar"
import { useCart } from "../context/CartContext";

const Cart = () => {
    const {cart,count,total, reduceQty, addQty} = useCart()
    return (
        <div>
            <Navbar />
            <section className="mt-5 grid grid-cols-12 p-5">
                 <div className="col-span-8">
                    {cart.map(item => (
                        <div className="mb-5 flex gap-3">
                           <div className="h-50 w-50">
                              <img src={item.image} className="w-full h-full object-cover"/>
                           </div>
                           <div className="grid items-center"> 
                              <div>
                              <p>{item.item}</p>
                              <p>{item.color}</p>
                              <p>{item.size}</p>
                              <p>ZAR {item.total.toFixed(2)}</p>
                            <div className="flex mt-3">
                            <button type="button" className="rounded-full w-[30px] h-[30px] bg-slate-900 text-white mr-2 cursor-pointer" onClick={() => reduceQty(Number(item.id), item.size, item.qty)}>-</button>
                            <input type="text" value={item.qty} className="w-[30px] border text-center border-gray-400" readOnly />
                            <button type="button" className="rounded-full w-[30px] h-[30px] bg-slate-900 text-white ml-2 cursor-pointer" onClick={() => addQty(Number(item.id), item.size, item.qty)}>+</button>
                        </div>
                              </div>
                           </div>
                        </div>
                    ))}
                 </div>
                 <div className="col-span-4">
                    <div className="h-60 border border-gray-300 p-5">
                        <div className="flex mb-3">
                            <p className="flex-1">Items</p>
                            <p className="flex-1 text-right">{count}</p>
                         </div>
                        <div className="flex mb-3">
                            <p className="flex-1">VAT</p>
                            <p className="flex-1 text-right">ZAR {60.00}</p>
                         </div>
                        <div className="flex mb-3">
                            <p className="flex-1">Delivery</p>
                            <p className="flex-1 text-right">ZAR {0}</p>
                         </div>   
                         <div className="flex mb-3">
                            <p className="flex-1">Total</p>
                            <p className="flex-1 text-right">ZAR {total.toFixed(2)}</p>
                         </div>
                         <div className="mb-3">
                            <button className="w-full bg-slate-900 text-white border p-2 text-center">PROCEED TO CHECKOUT</button>
                         </div>
                    </div>
                 </div>    
            </section>
        </div>
    )
}

export default Cart;