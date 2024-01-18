import Chatbot from '@/components/Chatbot'


const INITIAL_MESSAGE = "Hello! I am designed to answer some questions about Salvador. Keep in mind that my responses are pre-defined by Salvador to have greater control over what I say. The purpose of this chat is to respond to FAQs in a fancier way. How can I assist you on this occasion?";
const ANSWERS = {
    Introduction:(<p className="text-pretty">Hi, Salvador here. I hope you are doing great!</p>),

    Coding:(<p>Love coding, always have. My first experience was at the age of 10 on an old Windows computer. I stumbled upon a tutorial on YouTube where a guy talked about making web pages. It caught my eye, and since that moment, I&apos;ve been learning new technologies. Although I started with web development, I also have interests in robotics, AI, data science, and more. I understand that I can&apos;t be an expert in all these fields, but I enjoy having some knowledge about them - you never know when it can come in handy.</p>),

    Contact: (<p>You can contact me by sending a direct message on LinkedIn <a target="_blank" rel="noopener noreferrer" href="https://Linkedin.com/in/salvador-karakachoff/" >@Salvador_Karakachoff</a>,
    Instagram <a target="_blank" rel="noopener noreferrer" href="https://Instagram.com/salva_karaka">@Salva_Karaka</a>, or by sending an email to <a target="_blank" rel="noopener noreferrer" href="mailto:salvador.karakachoff@gmail.com">salvador.karakachoff@gmail.com</a>.
    If you want to check out some of my projects, you can visit my GitHub <a target="_blank" rel="noopener noreferrer" href="https://Github.com/salvakaraka">@Salvakaraka</a>.</p>),
    
    Dreams:(<p>I believe that when you tell your dreams to people, they don&apos;t come true. However, I can share that my main priority now is simply being happy.</p>),
    
    Fitness:(<p>I&apos;ve practiced a variety of sports throughout my life, including swimming, boxing, Taekwondo, football, among others. Nowadays, I do rock climbing, and I love it. The sensation of solving a problem and reaching the top of the wall is just fantastic.</p>),

    Foodie:(<p>I love cooking and eating; I would say it&apos;s my second passion, just before computers. When I&apos;m not programming, you&apos;ll find me in the kitchen making various dishes. While I enjoy preparing fancy, elaborate food, my absolute favorite is hamburgers.</p>),

    Movies:(<p>I enjoy movies, but I don&apos;t know much about them. On the other hand, my girlfriend loves movies and often makes me watch with her. I really enjoy it; the last movie we saw was "Grand Turismo," and it was great!</p>),

    Music:(<p>Music is the soundtrack of life! I often listen to Eminem&apos;s songs, but my musical taste is diverse. I enjoy Argentine Rock, Pop, Cuarteto, and more.</p>),

    PersonalLife:(<p>Life is good, fortunately. I strive to keep up with studies and work harder every day. To maintain a clear mind, I play video games and engage in exercise - it helps me a lot. Balance is crucial, and I believe I&apos;ve found it.</p>),

    Travel:(<p>Haven&apos;t traveled a lot yet, but I would love to explore the world one day! My first destination would be Italy.</p>),

    Projects:(<p>I&apos;m currently working on two main projects. I can&apos;t reveal them yet, but both involve large databases and lots of backend development. Nonetheless, you can check out my latest projects on GitHub <a target="_blank" rel="noopener noreferrer" href="https://Github.com/salvakaraka">@Salvakaraka</a>.</p>),

    Work:(<p>I work as IT Support at "Facultad de Ingenieria - Universidad Nacional de La Plata". Providing technical support to the entire administrative and teaching staff of the faculty involves implementing, maintaining, and configuring telephone and internet networks with over 2000 devices. Alongside this, I handle the repair of computers and electronic devices. <br/> Addressing each unique problem demands improvisation and on-the-fly learning, all while maintaining a professional approach.</p>),

    Goodbye: (<p>Even though it&apos;s not really me, I&apos;m sure it would have been a pleasure chatting with you. I hope you stay well. Goodbye!</p>),

    Unknown:(<p>As a bot, there are questions I&apos;m not prepared to answer. If it&apos;s important, feel free to reach out on my social media.</p>),
    
    Default:(<p>Sorry, I didn&apos;t understand the question. Please rephrase it for me.</p>),
};

export default function Home() {

  return (
        <main className="p-4 my-4 md:my-8">
          
          <Chatbot initialMessage={INITIAL_MESSAGE} answers={ANSWERS}/>
        
        </main>
  );
}

