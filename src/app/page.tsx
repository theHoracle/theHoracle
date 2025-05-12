import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";

const Page = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <Hero />
            
            {/* About Us Section */}
            <AboutUs />
            
            {/* Services Section */}
            <Services />
            
            {/* How It Works Section */}
            <HowItWorks />
            
            {/* Portfolio Section */}
            <Portfolio />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Page;