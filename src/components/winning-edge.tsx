"use client";
import { Search, Target, Smartphone, Clock, DollarSign, Zap } from "lucide-react";
import { motion } from "framer-motion";

const edgePoints = [
    {
        icon: Search,
        title: "SEO-Optimized Websites",
        description:
            "Our SEO-centric design approach enhances your online visibility, driving organic traffic by securing prime ranks on Google search."
    },
    {
        icon: Target,
        title: "High-Converting Design",
        description:
            "Our engaging design techniques drive remarkable increases in conversion rates by compelling visitors to take decisive, intentional action."
    },
    {
        icon: Smartphone,
        title: "Peak Performance on Any Screen",
        description:
            "Our fluid website experience guarantees flawless performance across all screens, from desktops and laptops to tablets and mobile devices."
    },
    {
        icon: Clock,
        title: "Fast Turnaround Time",
        description:
            "Launch your landing pages swiftly within 7 to 14 days, ensuring fast access to online opportunities without sacrificing quality."
    },
    {
        icon: DollarSign,
        title: "Quality Without Overcharge",
        description:
            "Always receive exceptional quality without any additional costs, ensuring unparalleled value and trust in every service we provide."
    },
    {
        icon: Zap,
        title: "Effortless Experience",
        description:
            "Our streamlined process and world-class systems minimize your involvement, saving you time while maximizing efficiency."
    }
];

const WinningEdge = () => {
    return (
        <div className="w-full py-24 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Our Winning Edge</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Discover our unique strength and distinctive value we offer
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {edgePoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <div 
                                key={index} 
                                className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="relative mb-6 w-16 h-16 flex items-center justify-center">
                                    <motion.div 
                                        className="absolute inset-0 bg-orange-100 dark:bg-orange-900/20 rounded-full"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    />
                                    <Icon className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {point.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WinningEdge; 