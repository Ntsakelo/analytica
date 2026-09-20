import { Link } from "react-router";
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import Badge from '@mui/material/Badge';
import { useCart } from "../context/CartContext";


const Navbar = () => {
const {count} = useCart();

    return (
        
        <nav>
            <header className="flex">
                <div className="flex-1">
                    <Link to="/" className="block p-5 font-semibold text-lg">Analytica</Link>
                </div>
                <div className="flex-1 flex items-center gap-4 justify-center">
                    <Link to="/shop/women">Women</Link>
                    <Link to="/shop/men">Men</Link>
                    <Link to="/shop/boys">Boys</Link>
                    <Link to="/shop/girls">Girls</Link>
                </div>
                <div className="flex-1 flex items-center gap-4 justify-end pr-5">
                    <Link to="/signin">Sign in</Link>
                    <UserIcon className="size-6" />
                    <div className="">
                        <Link to="/cart">
                        <Badge color="secondary" badgeContent={count} showZero>
                            <ShoppingBagIcon className="size-6" />
                        </Badge>
                        </Link>
                    </div>
                </div>
            </header>
        </nav>
    )
}

export default Navbar;