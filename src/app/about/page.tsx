import { Metadata } from "next";
import Footer from "@/components/footer";
import MorphingNavbar from "@/components/nav/morphing-navbar";

export const metadata: Metadata = {
  title: "About Us | TheHoracle",
  description: "Learn about our journey, mission, and the talented team behind TheHoracle.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MorphingNavbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About TheHoracle
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We are a team of passionate designers and developers dedicated to creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At TheHoracle, our mission is to empower businesses with innovative digital solutions that drive growth and create meaningful connections with their audiences. We believe in the power of thoughtful design and clean code to transform ideas into impactful digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We approach each project with a commitment to excellence, focusing on creating solutions that are not only visually stunning but also functional, accessible, and built to last.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Quality</h3>
                    <p className="text-gray-600 dark:text-gray-300">We never compromise on quality, ensuring every pixel and line of code meets our high standards.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-300">We believe in working closely with our clients to bring their vision to life.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Learn More About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="/about/story" className="block group">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 group-hover:bg-orange-50 dark:group-hover:bg-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Story</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Learn about our journey and how we got started.</p>
                  <span className="text-orange-500 font-medium">Read more →</span>
                </div>
              </a>
              <a href="/about/team" className="block group">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 group-hover:bg-orange-50 dark:group-hover:bg-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Meet the talented people behind our work.</p>
                  <span className="text-orange-500 font-medium">Read more →</span>
                </div>
              </a>
              <a href="/about/process" className="block group">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 group-hover:bg-orange-50 dark:group-hover:bg-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Process</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">How we approach projects and deliver results.</p>
                  <span className="text-orange-500 font-medium">Read more →</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 