import { useRoutes, BrowserRouter } from 'react-router-dom'    
import { CartContextProvider } from '../../Context'

import './App.css'
import Contact from '../Contact'
import Administrador from '../Administrador'
import Navbar from '../../Components/Navbar'
import Menu from '../Menu'
import Perfil from '../Perfil'
import CheckSideMenu from '../../Components/CheckSideMenu'
import Bienvenido from '../Bienvenido'



// Declaración Rutas
const AppRoutes = () => {
    let routes = useRoutes([
      {path: '/Bienvenido', element: <Bienvenido/>},
      {path: '/Menu', element: <Menu/>},
      {path: '/contacto', element: <Contact/>},
      {path: '/Administrador', element: <Administrador/>},
      {path: '/Perfil', element: <Perfil/>}
    ])  
    return routes
}

const App = () => {
  return (
    <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <AppRoutes/>
          <CheckSideMenu/>
        </BrowserRouter>
    </CartContextProvider>

)
}


export default App
