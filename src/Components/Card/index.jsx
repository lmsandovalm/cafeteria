import { useContext } from "react";
import { CartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(CartContext);
  
  // function to save a selected product
  const showProduct = (productDetail) => {
    context.closeCheckoutSideMenu()
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  // Add Products to shopping cart List 
  const addProductosCarrito = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts , productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id). length > 0
    if (isInCart) {
      return(
        <div 
        className="absolute top-0 right-0 flex justify-center items-center bg-orange-200 w-6 h-6 rounded-full m-2 p-1 text-black"
        onClick={(event) => addProductosCarrito(event, data.data)}
        >
          ✓
        </div>
        )
    }
    else{
      return (
        <div 
        className="absolute top-0 right-0 flex justify-center items-center bg-orange-300 w-6 h-6 rounded-full m-2 p-1"
        onClick={(event) => addProductosCarrito(event, data.data)}
        >
          +
        </div>
      )
    }
  }

  return (
    <div 
    className="bg-yellow-900 cursor-pointer w-60 h-60 rounded-lg"
    onClick={() => showProduct(data.data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-orange-800  rounded-lg text-orange-100 text-xs m-2  px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.photo}
          alt=""
        />

      {renderIcon(data.id)}

      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light text-orange-100 m-1  px-0" >{data.data.nombre}</span>
        <span className="text-lg font-medium text-orange-100 m-1  px-2">${data.data.precio}</span>
      </p>
    </div>
  );
};

export default Card;
