import Navbar from "../components/Navbar"
import { Link, useSearchParams, useParams } from "react-router";
import { products } from "../data";
import { useState } from "react";
import { useCart } from "../context/CartContext";


type Category = 'men' | 'women'

export interface Cart {
    id: number,
    item: string,
    qty: number,
    price: number,
    total: number,
    image: string,
    color: string,
    size: string
}

const Product = () => {
    const {addToCart} = useCart()
    const params = useParams();
    const category: Category | any = params.category
    const [searchParams] = useSearchParams();
    const productId = searchParams.get('id');
    const categoryProds = products[category];
    const product = categoryProds.filter((product: any) => product.id == Number(productId));
    console.log(product)
    const [selectedSize, setSelectedSize] = useState('M');
    const cart: Cart[] = [];
    // Inside your component:
    const [qty, setQty] = useState(1);




    const qtyIncrement = () => {
        setQty(prevQty => prevQty + 1);
    };

    const qtyDecrement = () => {
        setQty(prevQty => (prevQty > 1 ? prevQty - 1 : 1));
    };

    return (
        <div>
            <Navbar />
            {product.map((product: any) => (
                <section key={product.id} className="mt-5 grid grid-cols-12 p-5 gap-6 mb-30">
                    <div className="h-50 col-span-5">
                        <img src={product.image} alt="" className="h-auto w-[70%] block m-auto" />
                    </div>
                    <div className="h-100 col-span-7">
                        <p className="text-2xl font-semibold mb-2">{product.item}</p>
                        <p className="text-gray-500 mb-2">{product.brand}</p>
                        <p className="text-gray-500 mb-2">{product.sku}</p>
                        <p className="text-lg text-gray-500 mb-2">ZAR {product.price}</p>
                        <div className="border-b border-b-1 border-b-gray-300 w-full h-2"></div>
                        <p className="mt-5">Color: {product.color}</p>
                        <div className="my-4">
                            <label className="block  mb-2">
                                Size: <span className="uppercase">{selectedSize}</span>
                            </label>

                            <div className="flex flex-wrap gap-2">
                                {product.size.map((size: any) => (
                                    <label key={size} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size-option"
                                            value={size}
                                            checked={selectedSize === size}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                            className="peer sr-only" 
                                        />
                                        <div className="flex cursor-pointer items-center justify-center w-10 h-10 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:border-black peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all">
                                            {size}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <button type="button" className="rounded-full w-[30px] h-[30px] bg-slate-900 text-white mr-2 cursor-pointer" onClick={qtyDecrement}>-</button>
                            <input type="text" value={qty} className="w-[30px] border text-center border-gray-400" readOnly />
                            <button type="button" className="rounded-full w-[30px] h-[30px] bg-slate-900 text-white ml-2 cursor-pointer" onClick={qtyIncrement}>+</button>
                        </div>
                        <button type="button" className="mt-10 w-full p-2 bg-slate-900 text-white cursor-pointer" onClick={() => addToCart({
                            id: product.id,
                            item: product.item,
                            qty: qty,
                            price: product.price,
                            total: product.price * qty,
                            image: product.image,
                            color: product.color,
                            size: selectedSize
                        })}>ADD TO CART</button>
                    </div>
                </section>

            ))}
        </div>
    )
}

export default Product;