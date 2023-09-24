import React from 'react';
import chef from '../../assets/img/chef.jpg'
import './styles.css';

const Profile = () => {
return (

    <div className="bg-orange-50 rounded-lg text-lg m-2 px-3 py-0.5 profile justify-center text-orange-950 font-medium">
    <img
        src={chef}
        alt="profile-image"
        className=" justify-center profile-image "
    />
    

<div className='profile-description'>

<p> En medio del ajetreo de la vida diaria, hay un lugar donde los sueños se despiertan y los sentidos cobran vida. Este lugar mágico es COFFE TIME, un rincón encantado donde la pasión por el café se fusiona con el arte de vivir.</p>

<p>Imagina adentrarte en un espacio donde el aroma a café recién tostado te envuelve en un cálido abrazo, donde el suave murmullo de la música jazz te acaricia el alma y donde cada sorbo es un viaje a mundos desconocidos.</p>

<p>Nuestra cafetería es más que un lugar para tomar café; es un santuario para los amantes del buen vivir. Aquí, cada taza es una obra de arte, cada espresso es una sinfonía de sabores y cada cappuccino es un abrazo reconfortante. Nuestro equipo de baristas expertos, apasionados por su oficio, transforma cada grano de café en una experiencia sensorial única.</p>

<p>Nuestro menú es una oda a la diversidad y la innovación. Desde los clásicos como el latte y el americano hasta creaciones exclusivas como el "Café de los Sueños", un caprichoso caramelo tostado con una nota de avellanas y una pizca de magia. ¿Prefieres algo frío? Prueba nuestro "Frapuccino de la Pasión", una explosión refrescante de café helado con un toque de frutas tropicales.</p>

<p>Pero COFFE TIME es mucho más que café. Es un lugar de encuentro, un refugio para los soñadores, los escritores, los amantes y los amigos. Nuestro espacio acogedor y lleno de arte te invita a relajarte, a conversar, a disfrutar de la compañía y a perderte en la lectura de un buen libro.</p>

<p>Nuestra pastelería es una delicia para el paladar. Cada pastel, galleta y croissant es horneado con amor y creatividad, listo para acompañar tu café con un toque dulce. ¿Te atreves a probar nuestra tarta de chocolate y chile, que despierta todos tus sentidos?</p>

<p>Y si eres un amante de la salud, también tenemos opciones para ti. Nuestra selección de tés orgánicos y smoothies frescos te darán energía y vitalidad para enfrentar el día con una sonrisa.</p>

<p>Pero COFFE TIME es más que café y pasteles. Es un lugar de inspiración, un rincón de la imaginación, un oasis de emotividad. Aquí, los artistas locales exponen sus obras, la música en vivo llena el aire de melodía y las palabras cobran vida en nuestros recitales de poesía.</p>

<p>Nos enorgullecemos de ser un lugar inclusivo y sostenible. Nuestro café es de comercio justo y nuestras prácticas respetan el medio ambiente. Cada taza que disfrutas en COFFE TIME contribuye a un mundo más justo y consciente.</p>

<p>Así que, ¿qué esperas? Ven y únete a nuestra comunidad de soñadores. Déjate envolver por el aroma, el sabor y la emotividad que solo COFFE TIME puede ofrecer. Ven a descubrir el café con todos tus sentidos.</p>
</div>
        </div>
    );
};

export default Profile;
