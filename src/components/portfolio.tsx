"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
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

type CategoryInfo = {
    tagline: string;
    description: string;
    link: string;
}

type CategoryInfoMap = {
    [key in "Web Design" | "Branding" | "Print" | "All"]: CategoryInfo;
}

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState<keyof CategoryInfoMap>("All");
    const [isMounted, setIsMounted] = useState(false);
    const [websiteProjects, setWebsiteProjects] = useState<any[]>([]);

    // Category descriptions for dynamic text
    const categoryInfo: CategoryInfoMap = {
        "Web Design": {
            tagline: "Beautiful websites curated for you",
            description: "Explore our collection of modern, responsive web designs that combine aesthetics with functionality.",
            link: "/portfolio/web-design"
        },
        "Branding": {
            tagline: "Crafting unique brand identities",
            description: "Discover how we help businesses stand out with distinctive brand designs and visual storytelling.",
            link: "/portfolio/branding"
        },
        "Print": {
            tagline: "Print designs that leave an impression",
            description: "From corporate stationery to marketing materials, our print designs speak volumes.",
            link: "/portfolio/print"
        },
        "All": {
            tagline: "Where creativity meets purpose",
            description: "Explore our diverse portfolio spanning web, brand, and print design.",
            link: "/portfolio"
        }
    };

    useEffect(() => {
        setIsMounted(true);
        getProjectDetails().then((projects) => {
            const mapped = projects.filter((p) => p.homepage).map((p, idx) => ({
                id: `website-${idx}`,
                title: p.title,
                category: "Web Design" as keyof CategoryInfoMap,
                image: p.imageUrl || "/portfolio-placeholder.jpg",
                year: "2024",
                slug: p.title.toLowerCase().replace(/\s+/g, "-")
            }));
            setWebsiteProjects(mapped);
        });
    }, []);

    const mergedProjects = projects.filter(project => project.category !== "Web Design").concat(websiteProjects);
    const filteredProjects = activeCategory === "All"
        ? mergedProjects
        : mergedProjects.filter(project => project.category === activeCategory);

    return (
        <div className="w-full py-12 md:py-24 bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 border-b border-gray-200 dark:border-gray-800 pb-4">THE CRE8TIVE</h2>
                
                {/* Dynamic text section */}
                <div className="mb-8 md:mb-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{categoryInfo[activeCategory]?.tagline}</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto px-4">
                        {categoryInfo[activeCategory]?.description}
                    </p>
                    <Link
                        href={categoryInfo[activeCategory]?.link}
                        className="inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300 group"
                        >
                        <span className="mr-2 font-medium">See More</span>
                        <div className="w-4 h-4 md:w-6 md:h-6 bg-orange-500 group-hover:bg-white transition-colors duration-300"></div>
                    </Link>
                </div>

                {/* Portfolio Slider */}
                <div className="w-full">
                    {isMounted && (
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView="auto"
                            initialSlide={1}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                                slideShadows: false,
                            }}
                            pagination={{ clickable: true }}
                            navigation={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true,
                                pauseOnMouseEnter: true,
                            }}
                            onSlideChange={(swiper) => {
                                const activeSlide = mergedProjects[swiper.activeIndex];
                                if (activeSlide) {
                                    setActiveCategory(activeSlide.category as keyof CategoryInfoMap);
                                }
                            }}
                            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                            className="portfolio-swiper !overflow-visible"
                        >
                            {mergedProjects.map((project) => (
                                <SwiperSlide key={project.id} className="!w-[280px] md:!w-[800px] !h-[200px] md:!h-[500px] transition-all duration-500">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="bg-white/90 dark:bg-black/80 p-3 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 rounded-xl md:rounded-2xl">
                                                <div className="flex justify-between items-center mb-2 md:mb-4">
                                                    <h3 className="text-base md:text-xl font-bold">{project.title}</h3>
                                                    <span className="text-sm md:text-base text-orange-500">{project.year}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs md:text-base text-gray-600 dark:text-gray-400">{project.category}</span>
                                                    <Link
                                                        href={`/portfolio/${project.slug}`}
                                                        className="text-sm md:text-base inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300"
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
            <style jsx global>{`
                .portfolio-swiper {
                    padding: 50px 0;
                }
                .portfolio-swiper .swiper-slide {
                    opacity: 0.4;
                    transform: scale(0.7);
                    transition: all 0.3s ease;
                }
                .portfolio-swiper .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1);
                }
                .swiper-button-next,
                .swiper-button-prev {
                    color: #f97316 !important;
                }
                .swiper-button-next::after,
                .swiper-button-prev::after {
                    font-size: 1.5rem !important;
                }
                @media (min-width: 768px) {
                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                        font-size: 2rem !important;
                    }
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