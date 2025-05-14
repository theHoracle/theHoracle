import { Code2, Palette, Printer } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web & Mobile Development",
        description: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
        icon: Code2,
        letter: "W",
        href: "/services/web-design"
    },
    {
        title: "Branding & Design",
        description: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
        icon: Palette,
        letter: "B",
        href: "/services/branding"
    },
    {
        title: "Printing Solutions",
        description: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
        icon: Printer,
        letter: "P",
        href: "/services/printing"
    }
];

const Services = () => {
    return (
        <div className="w-full py-24 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-20 border-b border-gray-200 dark:border-gray-800 pb-4">SERVICES</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {services.map((service, index) => (
                        <div key={service.title} className="relative">
                            {/* Large background letter */}
                            <div className="absolute -top-20 -left-4 text-[180px] font-bold text-gray-100 dark:text-gray-800/30 select-none pointer-events-none">
                                {service.letter}
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6">{service.title}.</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    {service.description}
                                </p>
                                <Link 
                                    href={service.href} 
                                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300 group"
                                >
                                    <span className="mr-2">Know More</span>
                                    <div className="w-6 h-6 bg-orange-500 group-hover:bg-white transition-colors duration-300"></div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services; 