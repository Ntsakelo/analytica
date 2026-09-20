import Navbar from "../components/Navbar"
import { Link, useParams } from "react-router";
import { products } from "../data";

type Category = 'men' | 'women'

const Products = () => {
    const params = useParams();
    const category: Category | any = params.category
    const categoryProds = products[category];
    return (
        <div>
            <Navbar />
            <section className="mt-5 grid grid-cols-4 gap-4 p-5">
                {categoryProds.map((product:any,index:any) => (
                <div key={index} className="h-95 border border-gray-300">
                    <div className="h-50">
                      <img src={product.image} className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-3">
                        <p className="mb-2 font-semibold">{product.item}</p>
                        <p className="mb-2 text-semibold text-gray-500">{product.brand}</p>
                        <p className="mb-2 font-semibold">ZAR {product.price}</p>
                    </div>
                    <Link to={`/shop/${product.category}/product?id=${product.id}`} className="rounded-full block w-[95%] m-auto py-2 bg-slate-900 text-white text-center">View Product</Link>
                </div>         

                ))}
            </section>
        </div>
    )
}

export default Products;