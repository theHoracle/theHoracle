"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from "next/link";
import { getProjectDetails } from "@/lib/utils/project-details";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const categories = ["All", "Web Design", "Branding", "Print"];

const projects = [
    {
        id: 1,
        title: "Luxury Brand Identity",
        category: "Branding",
        image: "/portfolio/project1.jpg",
        year: "2023",
        slug: "artisan-coffee"
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "Web Design",
        image: "/portfolio/project2.jpg",
        year: "2023",
        slug: "eco-marketplace"
    },
    {
        id: 3,
        title: "Corporate Stationery",
        category: "Print",
        image: "/portfolio/project3.jpg",
        year: "2022",
        slug: "travel-magazine"
    },
    {
        id: 4,
        title: "Mobile App Design",
        category: "Web Design",
        image: "/portfolio/project4.jpg",
        year: "2022",
        slug: "fitness-app"
    },
    {
        id: 5,
        title: "Restaurant Menu Design",
        category: "Print",
        image: "/portfolio/project5.jpg",
        year: "2021",
        slug: "organic-food-delivery"
    },
    {
        id: 6,
        title: "Fashion Brand Identity",
        category: "Branding",
        image: "/portfolio/project6.jpg",
        year: "2021",
        slug: "tech-conference"
    }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isMounted, setIsMounted] = useState(false);
    const [websiteProjects, setWebsiteProjects] = useState<any[]>([]);

    useEffect(() => {
        setIsMounted(true);
        // Fetch website projects from getProjectDetails
        getProjectDetails().then((projects) => {
            // Add a category and year for display, and a slug if needed
            const mapped = projects.filter((p) => p.homepage).map((p, idx) => ({
                id: `website-${idx}`,
                title: p.title,
                category: "Web Design",
                image: p.imageUrl || "/portfolio-placeholder.jpg",
                year: "2024",
                slug: p.title.toLowerCase().replace(/\s+/g, "-")
            }));
            setWebsiteProjects(mapped);
        });
    }, []);

    // Replace hardcoded web design projects with websiteProjects
    const mergedProjects = projects.map((project) => {
        if (project.category === "Web Design") {
            // Will be replaced below
            return null;
        }
        return project;
    }).filter(Boolean);
    // Add website projects in place of the old ones
    const allProjects = [...mergedProjects, ...websiteProjects];

    const filteredProjects = activeCategory === "All"
        ? allProjects
        : allProjects.filter(project => project.category === activeCategory);

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
                        
                        <Link 
                            href="/portfolio" 
                            className="inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300 group"
                        >
                            <span className="mr-2 font-medium">View All Projects</span>
                            <div className="w-6 h-6 bg-orange-500 group-hover:bg-white transition-colors duration-300"></div>
                        </Link>
                    </div>
                    
                    {/* Right side - projects with Swiper */}
                    <div className="md:w-3/4">
                        {isMounted && (
                            <Swiper
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={1.2}
                                breakpoints={{
                                  640: { slidesPerView: 1.2 },
                                  768: { slidesPerView: 2 },
                                  1024: { slidesPerView: 3 },
                                }}
                                pagination={{ clickable: true }}
                                navigation={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: true,
                                    pauseOnMouseEnter: true,
                                }}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                {filteredProjects.map((project) => (
                                    <SwiperSlide key={project.id} className="w-[500px] aspect-[16/9]">
                                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900">
                                            {/* Project image */}
                                            <img
                                              src={project.image}
                                              alt={project.title}
                                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            {/* Overlay that appears on hover */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="bg-white/90 dark:bg-black/80 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                                        <span className="text-orange-500">{project.year}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-gray-600 dark:text-gray-400">{project.category}</span>
                                                        <Link 
                                                            href={`/portfolio/${project.slug}`} 
                                                            className="inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300"
                                                        >
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
            {/* Swiper custom styles for orange arrows and dots */}
            <style jsx global>{`
              .swiper-button-next,
              .swiper-button-prev {
                color: #f97316 !important;
              }
              .swiper-pagination-bullet {
                background: #f97316 !important;
                opacity: 0.5;
              }
              .swiper-pagination-bullet-active {
                opacity: 1 !important;
              }
            `}</style>
        </div>
    );
};

export default Portfolio; 