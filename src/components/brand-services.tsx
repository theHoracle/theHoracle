"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BrandServices = () => {
  return (
    <div className="w-full py-24 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Conversion Centric</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Design that Turns visitors into customers
          </p>
        </div>
        
        {/* People illustrations */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex overflow-hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="mx-2">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image 
                    src={`/person-${num}.svg`} 
                    alt={`Person ${num}`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
          >
            <div className="flex justify-center mb-6">
              <div className="text-blue-500 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M8.25 4.5a3.75 3.75 0 117.5 0v.75c0 .414.336.75.75.75h1a.75.75 0 01.75.75V21a1.5 1.5 0 01-1.5 1.5H6.5A1.5 1.5 0 015 21V7.5a.75.75 0 01.75-.75h1a.75.75 0 00.75-.75V4.5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Close Clients</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Close more clients for your business with highly optimized landing pages 
              that clearly explains your services and uniqueness.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
          >
            <div className="flex justify-center mb-6">
              <div className="text-red-500 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Generate Leads</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Turn visitors into signups for your Digital Products by clearly explaining 
              your product with striking visuals and user experience.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
          >
            <div className="flex justify-center mb-6">
              <div className="text-green-500 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Sell Online</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Sell your digital goods and courses with conversion-centric landing 
              pages tailored to drive purchases and engagement.
            </p>
          </motion.div>
        </div>
        
        <div className="text-center mt-20">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We focus on design that will bring growth to you
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandServices; 