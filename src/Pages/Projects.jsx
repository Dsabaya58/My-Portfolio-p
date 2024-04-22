// import React from 'react'

const servicesData = [
    {
      title: "Toursboat",
      description: "We build responsive websites that wow your customers.",
      imageUrl: "/src/assets/ip.jpg" 
    },
    {
      title: "Nice Admin",
      description: "Create engaging mobile experiences for your users.",
      imageUrl: "/src/assets/ip2.jpg" 
    },
    {
      title: "Dashboard Solutions",
      description: "Build robust online stores tailored to your business needs.",
      imageUrl: "/src/assets/ip3.jpg" 
    },  
    {
      title: "Monitoring Solutions",
      description: "Harness the power of cloud computing for scalability and efficiency.",
      imageUrl: "/src/assets/ip4.jpg" 
    },
    {
      title: "Data Visualization",
      description: "Transform your data into actionable insights for better decision-making.",
      imageUrl: "/src/assets/ip5.jpg" 
    },
    {
      title: "Quality Assurance & Testing",
      description: "Ensure flawless software experiences with our rigorous testing processes.",
      imageUrl: "/src/assets/ip6.jpg" 
    }
  ];

const Projects = () => {
    return (
        <div className="container mx-auto py-12 ">
          <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {servicesData.map((service) => (
              <div key={service.title} className="bg-blue-200 rounded-lg shadow-md overflow-hidden flex flex-row">
                <img src={service.imageUrl} alt={service.title} className="w-60 h-52 object-cover"/> 
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Projects