import Layout from '../../Components/Layout'
import Profile from '../../Components/perfil'

function Perfil() {
    return (
      <>
        <Layout>
        <div className="bg-orange-300 rounded-lg text-lg text-red-950 m-2 px-3 py-0.5">
            Perfil </div>
        <div className='flex justify-center'>
        
        <p className="font-semibold text-center text-xl text-orange-600">
        ¡Bienvenidos a "COFFE TIME"!</p>
    
        </div>
        </Layout>
        <div>
      {/* Otro contenido de tu página */}
      <Profile />
        </div>
      </>
    )
  }
  
  export default Perfil