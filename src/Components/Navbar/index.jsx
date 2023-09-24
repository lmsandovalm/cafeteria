import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from "../../Context"
import logo from "../../assets/img/logo2.png"


const Navbar = () =>{

    const context = useContext(CartContext)

    const activeStyle = ' underline underline-offset-4'

    return (
        <nav className="bg-orange-300 flex justify-start items-center top-0 z-10 w-full py-3 px-5 text-base font-medium">
            <div className="flex justify-items-center h-20 gap-20">
                <img src={logo} alt="" />
                
                <ul className="flex justify-between items-center gap-36">
                <li className="text-lg gap-36">
                    <NavLink to='/Bienvenido'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Bienvenido
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Menu'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Menú
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Administrador'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Administrador
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Perfil'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Perfil
                    </NavLink>
                </li>
                <li>
                <div>
                    <samp>🛒:{context.count}</samp>
                </div>
                </li>
            </ul>
            </div> 
            
        </nav>
    )
}

export default Navbar