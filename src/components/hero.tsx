import { ChevronRight } from "lucide-react"
import { AnimatedGradientText } from "./magicui/animated-gradient-text"
import { cn } from "@/lib/utils"
import HoverNav from "./nav/hover-nav"
import { AuroraText } from "./magicui/aurora-text"
import { MorphingText } from "./magicui/morphing-text"

const Hero = () => {
    return <div className="w-full h-screen p-4">
        <div className="rounded-xl bg-white size-full py-10 px-10 shadow-lg relative">
            <HoverNav />        
            <div className="flex py-20">
                <div className="flex flex-col gap-4 items-start">
                    <AnimatedText />
                    <HeadLine />
                </div>

            </div>
            </div>
    </div>
}

export default Hero


const AnimatedText = () => {
    return  <div className="group relative flex items-center max-w-fit justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <AnimatedGradientText className="text-sm font-medium">
        Design | Develop | Deliver
      </AnimatedGradientText>
    </div>

}

const HeadLine = () => {
    const texts = [
        "Websites",
        "Apps",
        "Experiences",
        "Solutions",
        "Prints",
        "Brands",
    ];

    return (<h1 className="text-4xl font-bold tracking-tighter flex text-slate-950 dark:text-slate-200 flex-col md:text-5xl lg:text-7xl">
      We build  <MorphingText texts={texts} className="text-primary" />
      
    </h1>)
}