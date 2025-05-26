import WinningEdge from "@/components/winning-edge";
import Hero from "@/components/hero";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Portfolio from "@/components/portfolio";
import BrandServices from "@/components/brand-services";
import MeetingScheduler from "@/components/meeting-scheduler";
import Footer from "@/components/footer";

const Page = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <Hero />
            
            {/* Our Winning Edge Section */}
            <WinningEdge />
            
            {/* Services Section */}
            <Services />
            
            {/* How It Works Section */}
            <HowItWorks />
            
            {/* Portfolio Section */}
            <Portfolio />
            
            {/* Brand Services Section */}
            <BrandServices />
            
            {/* Meeting Scheduler Section */}
            <MeetingScheduler />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Page;