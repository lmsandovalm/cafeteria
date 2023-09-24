import Layout from '../../Components/Layout'
import Domi from '../../assets/img/domicilio.png';
import taza from '../../assets/img/cafe.png';
import wp from '../../assets/img/whatsapp.png';
import WhatsAppButton from '../../Components/wp';
import backgroundImage from '../../assets/img/fondobarra.png'

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', 
  height: '25vh',
};

function Contact() {

  return (
    <>
      <Layout>
      <div className="justify-items-center bg-orange-300 rounded-lg text-lg text-red-950 w-auto m-2 px-3 py-0.5">
            Contactanos 
            </div>
      <div style={divStyle} className="flex columns-2 justify-items-center bg-orange-400 rounded-xl text-lg text-red-950 m-2 px-3 py-0.5 ">
          <div className='flex justify-start w-40 h-44'>
          <img src={Domi} alt="" />
          </div>
          
          <div className='flex justify-center w-30 h-14 m-5 mt-14' >
            <img className='p-1' src={wp} alt=''/>
            <WhatsAppButton />
          </div>
      </div>

      <div className="flex justify-center bg-orange-400 rounded-lg text-lg text-red-950 m-2 px-3 py-0.5">
        <p>Nos encontramos en: .</p>
        <p>📍Calle falsa #1-2-3</p>
      </div>
      <div className="flex justify-center bg-orange-400 rounded-lg text-lg text-red-950 m-2 px-3 py-0.5">
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.2929665413008!2d-5.805267725376975!3d37.19327034544588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd127f10e9ab020b%3A0x8161a0776997e0ad!2s.!5e0!3m2!1ses!2sco!4v1695522008845!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'></iframe>
            </div>
      </Layout>
    </>
  )
}

export default Contact
