import Layout from '../../Components/Layout'
import backgroundImage from '../../assets/img/fondo.png'

function Bienvenido() {

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        height: '118vh',
    };

    return (
    <>
        <Layout>
            <div className='grid gap-4 w-screen'>
            <div style={divStyle}>
        </div>
        </div>
        </Layout>
    </>
)
}

export default Bienvenido