import { useContext } from 'react'
import { CartContext } from "../../Context";
import './styles.css';
import OrdenarCard from '../OrdenarCard';
import {totalPrice} from '../../utilidades';


const CheckSideMenu = () => {
    const context = useContext(CartContext);
    
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.count - 1)
        
    }

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} check-side-menu flex-col right-0 border border-orange-900 rounded-xl fixed bg-amber-50`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Carrito de Compras 🛒</h2>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-amber-700 w-6 h-6 rounded-full m-2 p-1 text-black"
                onClick={() => context.closeCheckoutSideMenu() }> x </div>
                
            </div>
            <div className='bg-amber-100 px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map( product => (
                        <OrdenarCard
                        key={product.id}
                        id={product.id}
                        nombre={product.nombre}
                        photo={product.photo}
                        precio={product.precio}
                        handleDelete={handleDelete}
                        />
                    )
                        )
                }
            </div>
            <div className="'font-medium text-lg' bg-orange-300 rounded-lg text-lg text-red-950 m-2" >
            <p className='flex justify-between items-center p-6'>
                    <span className='justify-start font-semibold'>Total : </span>
                    <span className='justify-end font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}
export default CheckSideMenu