// import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 flex">Who Be me  <img className="w-10 h-10" src="/src/assets/thinking.png" alt="emoji" /></h1>
      <h3 className="text-lg mb-6 font-bold">
        I am a passionate front-end developer dedicated to crafting intuitive and beautiful web experiences. My core strength lies in React.js, where I excel in building component-based, scalable applications. To complement my React expertise,  I am highly proficient in UI frameworks like Material UI, Tailwind CSS, and Bootstrap. This versatility allows me to tailor UI solutions that precisely match project needs and brand aesthetics. I'm constantly exploring new technologies and thrive in collaborative environments where I can learn and contribute to innovative projects.
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <img src="/src/assets/pic.jpg" alt="Team Photo" className="rounded-lg"/>
        <h2 className="mt-10 text-blue-500 font-sans font-semibold ml-6"> <h1 className="mt-5 mb-6 text-black font-bold">What I love doing!</h1>Building websites that are as enjoyable to use as they are to look at, that is my front-end philosophy! I am hooked on React.js and its ability to create dynamic, user-centric interfaces. <br />
         <br /> I am not just a code-slinger; I enjoy the problem-solving side of development and the satisfaction of seeing a project come together. Let us collaborate on something awesome!

         <button className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-lg ml-2 mt-28 w-40">Download CV</button> 
         </h2>
        
      </div>  
    </div>
  );
}

export default About