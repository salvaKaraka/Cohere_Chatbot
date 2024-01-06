import RobotIcon from "./RobotIcon";

export default function Headrer(){
    return(
    <section className='flex items-center text-blue-500 justify-center mt-10'>
        <h1 className='font-bold text-6xl mb-4 mr-2'><span className='text-white/90'>Chat</span>bot </h1>
        <RobotIcon />
      </section>
    )
}