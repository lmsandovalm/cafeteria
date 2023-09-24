import { useContext } from 'react'
import { CartContext } from "../../Context";
import './styles.css'


const ProductDetail = () => {
    const context = useContext(CartContext);
    
    // console.log('Producto a Mostrar: ', context.productToShow)


    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-orange-900 rounded-xl fixed bg-amber-50`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-amber-700 w-6 h-6 rounded-full m-2 p-1 text-black" onClick={() => context.closeProductDetail() }>x</div>
            </div>
            <figure className='flex justify-center px-6'>
                <img className='w-60 h-44 rounded-lg' 
                src={context.productToShow.photo} 
                alt={context.productToShow.nombre} />
            </figure>
            <p className='flex justify-between flex-col p-6'>
                <span className='font-medium flex justify-center text-base mb-2'>Producto ☕: {context.productToShow.nombre}</span>
                <span className='font-medium flex justify-center text-2xl mb-2'>$ {context.productToShow.precio}</span>
            </p>
        </aside>
    )
}
export default ProductDetail