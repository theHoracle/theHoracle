import { Users, Award, Clock, Star } from "lucide-react";
import { NumberTicker } from "./magicui/number-ticker";
import Image from "next/image";

const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Star, value: "100%", label: "Client Satisfaction" },
];

const AboutUs = () => {
    return (
        <div className="w-full py-24 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-20 border-b border-gray-200 dark:border-gray-800 pb-4">ABOUT US</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="relative">
                            {/* Background letter */}
                            <div className="absolute -top-20 -left-4 text-[180px] font-bold text-gray-100 dark:text-gray-800/30 select-none pointer-events-none">
                                A
                            </div>
                            <div className="relative z-10">
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                    We're not just developers or designers—we're brand builders. At TheHoracle, we combine creativity, code, and craftsmanship to bring ideas to life across web, mobile, and print.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Whether you're a startup launching your first product, or an established brand looking for a refresh, we help you stand out in every medium. Our team of experts brings together diverse skills and perspectives to create solutions that are both beautiful and functional.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center overflow-hidden ">
                        <div className="relative aspect-video w-full rounded-tl-xl rounded-tr-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
                           <Image src="/about-us.jpg" alt="Team" fill className="object-cover object-center" />
                        </div>
                        <div className=" w-full mx-auto bg-white -mt-6 z-10 dark:bg-black border border-gray-200 dark:border-gray-800 px-3 py-2 rounded-xl shadow-lg">
                            <p className="text-sm font-semibold text-center">"Transforming ideas into exceptional experiences"</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.label} className="text-center p-6 border-t border-gray-200 dark:border-gray-800">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-4">
                                    <Icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;