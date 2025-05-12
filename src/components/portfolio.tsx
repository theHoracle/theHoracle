"use client"
import { useState } from "react";

const categories = ["All", "Web Design", "Branding", "Print"];

const projects = [
    {
        id: 1,
        title: "Luxury Brand Identity",
        category: "Branding",
        image: "/portfolio/project1.jpg",
        year: "2023"
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "Web Design",
        image: "/portfolio/project2.jpg",
        year: "2023"
    },
    {
        id: 3,
        title: "Corporate Stationery",
        category: "Print",
        image: "/portfolio/project3.jpg",
        year: "2022"
    },
    {
        id: 4,
        title: "Mobile App Design",
        category: "Web Design",
        image: "/portfolio/project4.jpg",
        year: "2022"
    },
    {
        id: 5,
        title: "Restaurant Menu Design",
        category: "Print",
        image: "/portfolio/project5.jpg",
        year: "2021"
    },
    {
        id: 6,
        title: "Fashion Brand Identity",
        category: "Branding",
        image: "/portfolio/project6.jpg",
        year: "2021"
    }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    
    const filteredProjects = activeCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="w-full py-24 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-20 border-b border-gray-200 dark:border-gray-800 pb-4">THE CRE8TIVE</h2>
                
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left side - categories */}
                    <div className="md:w-1/4">
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Explore our portfolio of successful projects across various industries. 
                            Our work demonstrates our commitment to excellence and innovation.
                        </p>
                        
                        <div className="flex flex-col space-y-3 mb-12">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`text-left text-lg py-2 border-l-2 pl-4 transition-all duration-300 ${
                                        activeCategory === category 
                                            ? "border-orange-500 text-gray-900 dark:text-white" 
                                            : "border-transparent text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-white"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        
                        <a 
                            href="#" 
                            className="inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300 group"
                        >
                            <span className="mr-2 font-medium">View All Projects</span>
                            <div className="w-6 h-6 bg-orange-500 group-hover:bg-white transition-colors duration-300"></div>
                        </a>
                    </div>
                    
                    {/* Right side - projects */}
                    <div className="md:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className="group relative overflow-hidden h-[300px] bg-gray-100 dark:bg-gray-900 transform transition-all duration-500 hover:-translate-y-2"
                                >
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 group-hover:opacity-50 transition-opacity duration-500">
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-lg">
                                            {project.title} Image
                                        </div>
                                    </div>
                                    
                                    {/* Overlay that appears on hover */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="bg-white/90 dark:bg-black/80 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-bold">{project.title}</h3>
                                                <span className="text-orange-500">{project.year}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">{project.category}</span>
                                                <a 
                                                    href="#" 
                                                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300"
                                                >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio; 