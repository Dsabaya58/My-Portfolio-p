// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen relative" 
         style={{ backgroundImage: `url('/src/assets/pic.jpg')` }}>
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm"></div>
            {/* Your page content on top of the background image */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
               <div className="text-center mt-0"> 
                   <h1 className="text-4xl font-bold mb-9">Hello! I Am <button className="bg-blue-500 text-white py-2 px-4 rounded-xl">UX/UI</button><br /> Damian David</h1>
                    <h2 className="text-2xl font-bold font-sans mb-20">
                        I excel in crafting robust and interactive web applications using React.js. <br /> My expertise extends to popular UI frameworks like Material UI, Tailwind CSS, and Bootstrap,<br /> enabling me to create highly customized and responsive interfaces that align with your brand's aesthetic.
                    </h2>

                    <div className="flex space-x-4 justify-center"> 
                        <Link to={'#'}>
                            <img className="w-12" src="/src/assets/instagram.png" alt="insta" />
                        </Link>
                        <Link to={'#'}>
                            <img className="w-12" src="/src/assets/twitter.png" alt="insta" />
                        </Link>
                        <Link to={'#'}>
                            <img className="w-12" src="/src/assets/linkedin.png" alt="insta" />
                        </Link>
                        <Link to={'#'}>
                            <img className="w-12" src="/src/assets/github.png" alt="insta" />
                        </Link>
                        <Link to={'#'}>
                            <img className="w-12" src="/src/assets/facebook.png" alt="insta" />
                        </Link>
                    </div>
               </div>
                
           </div>

    </div>
  )
}

export default Home