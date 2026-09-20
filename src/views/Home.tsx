import { Link } from "react-router";
import Navbar from "../components/Navbar";
import boys from '../assets/boys.jpg';
import girls from '../assets/girls.jpg';
import women from '../assets/women.jpg';
import men from '../assets/men.jpg';


const Home = () => {
    return (
        <div>
             <Navbar />

             <section className="h-60 grid items-center">
                  <div className="">
                  <h2 className="text-center text-2xl font-semibold">THE STORE FOR YOU. WE HAVE ALL THE LATEST TRENDING FASHION</h2>
                   <Link to="/shop" className="block m-auto w-[fit-content] mt-5 rounded-full p-2 px-4 bg-slate-900 text-white">Shop Now</Link>  
                  </div>  
             </section>
             <section className="grid grid-cols-4 gap-4 p-5">
                 <div className={`h-80 bg-[url(assets/boys.jpg)] relative flex justify-center bg-cover`}>
                   <Link to="/shop/boys" className="absolute bottom-0 mb-5 block m-auto p-2 px-4 rounded-full bg-slate-900 text-white z-200">Shop Boys</Link>
                 </div>
                     <div className={`h-80 bg-[url(assets/girls.jpg)] relative flex justify-center bg-cover`}>
                   <Link to="/shop/girls" className="absolute bottom-0 mb-5 block m-auto p-2 px-4 rounded-full bg-slate-900 text-white z-200">Shop Girls</Link>                    
                 </div>
                     <div className={`h-80 bg-[url(assets/women.jpg)] relative flex justify-center bg-cover`}>
                   <Link to="/shop/women" className="absolute bottom-0 mb-5 block m-auto p-2 px-4 rounded-full bg-slate-900 text-white z-200">Shop Ladies</Link>                    
                 </div>
                     <div className={`h-80 bg-[url(assets/men.jpg)] relative flex justify-center bg-cover`}>
                   <Link to="/shop/men" className="absolute bottom-0 mb-5 block m-auto p-2 px-4 rounded-full bg-slate-900 text-white z-200">Shop Men</Link>                    
                 </div>    
             </section>
        </div>
    )
}

export default Home;