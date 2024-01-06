import Chatbot from '@/components/Chatbot'


const INITIAL_MESSAGE="¡Hola! Estoy diseñado para responer algunas preguntas acerca de Salvador ¿Cómo puedo ayudarte en esta ocasión?";
const ANSWERS = {
    Introduction:(<p className="text-pretty">Hola, Soy Salvador! Tengo mas de 5 años de experiencia como desarrollador Web y mas de 2 como Soporte IT.
    Ademas de hacer web apps me gusta programar en Java, C, C++, Python, C#, entre otros lenguajes.
    Soy un estudiante avanzado en las carreras de Ingeniería en Computación y Data Science en la UNLP.
    Me recibí como Técnico Electrónico en 2021. Actualmente vivo en La Plata, Argentina.</p>),
    Contact:(<p>Podes contactarme enviandome un mensaje directo por LinkedIn <a target="_blank" rel="noopener noreferrer" href="https://Linkedin.com/in/salvador-karakachoff/" >@Salvador_Karakachoff</a>,
     Instagram <a target="_blank" rel="noopener noreferrer" href="https://Instagram.com/salva_karaka">@Salva_Karaka</a> o enviandome un correo electronico a <a target="_blank" rel="noopener noreferrer" href="mailto:salvador.karakachoff@gmail.com">salvador.karakachoff@gmail.com</a>.
     Si queres ver algunos de mis proyectos podes visitar mi GitHub <a target="_blank" rel="noopener noreferrer" href="https://Github.com/salvakaraka">@Salvakaraka</a>.</p>),
    Unknown:(<p>Como soy un bot hay preguntas que no estoy preparado para responder, si te resulta importante que te conteste podes escribirme por alguna de mis redes.</p>),
    Default:(<p>Lo siento, no entendi la pregunta, por favor reformulala.</p>),
};

export default function Home() {

  return (
        <main className="p-4">
          <Chatbot initialMessage={INITIAL_MESSAGE} answers={ANSWERS}/>
        </main>
  );
}

