import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "Discovery",
        description: "We begin by understanding your vision, goals, and requirements through detailed discussions and research.",
        number: "01",
        letter: "D"
    },
    {
        icon: PenTool,
        title: "Design",
        description: "Our creative team develops compelling designs and strategies that align with your brand identity.",
        number: "02",
        letter: "D"
    },
    {
        icon: Code2,
        title: "Development",
        description: "We bring designs to life with clean, efficient code and high-quality production processes.",
        number: "03",
        letter: "D"
    },
    {
        icon: Rocket,
        title: "Delivery",
        description: "We ensure smooth deployment and provide ongoing support to maintain your digital presence.",
        number: "04",
        letter: "D"
    }
];

const HowItWorks = () => {
    return (
        <div className="w-full py-24 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-20 border-b border-gray-200 dark:border-gray-800 pb-4">OUR PROCESS</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div 
                                key={step.title}
                                className="relative group"
                            >
                                {/* Background letter */}
                                <div className="absolute -top-20 -left-4 text-[180px] font-bold text-gray-100 dark:text-gray-800/30 select-none pointer-events-none">
                                    {step.letter}
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center group-hover:border-orange-500 transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <span className="text-orange-500 font-bold">{step.number}</span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold mb-6">{step.title}.</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <div className="mt-16 text-center">
                    <a 
                        href="#" 
                        className="inline-flex items-center text-gray-900 dark:text-white hover:text-orange-500 transition-colors duration-300 group"
                    >
                        <span className="mr-2 font-medium">Learn more about our process</span>
                        <div className="w-6 h-6 bg-orange-500 group-hover:bg-white transition-colors duration-300"></div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks; 