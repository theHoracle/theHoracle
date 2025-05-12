import { ChevronRight } from "lucide-react"
import { AnimatedGradientText } from "./magicui/animated-gradient-text"
import { cn } from "@/lib/utils"
import MorphingNavbar from "./nav/morphing-navbar"
import { AuroraText } from "./magicui/aurora-text"
import { MorphingText } from "./magicui/morphing-text"
import { WordRotate } from "./magicui/word-rotate"
import { RetroGrid } from "./magicui/retro-grid"
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"
import { ShinyButton } from "./magicui/shiny-button"
import { Button } from "./ui/button"

const Hero = () => {
    return <div className="w-full h-screen p-4">
        <div className="relative rounded-xl bg-[url('/gradient-hero-prerender.avif')] bg-no-repeat bg-cover bg-center size-full py-10 px-10 shadow-lg">
            <MorphingNavbar />        
            <div className="flex items-center z-50 relative size-full justify-center py-20">
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <AnimatedText />
                    <HeadLine />
                    <div className="flex flex-col gap-2 items-center">
                        <InteractiveHoverButton>Get free quote</InteractiveHoverButton>
                        
                        <ShinyButton className="z-10 border border-accent/20 rounded-full">See our works</ShinyButton>
                    </div>
                </div>

            </div>
            <RetroGrid darkLineColor="#f2f2f2" className="inset-0 z-10" />

            
        </div>
    </div>
}

export default Hero


const AnimatedText = () => {
    const offerings = [
        "Designs",
        "Websites",
        "Apps",
        "Prints",
        "Brands",
        "Experiences",
        "Solutions",
    ]
    return  <div className="group relative flex mx-auto items-center max-w-fit justify-center bg-white  dark:bg-black rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
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
      <AnimatedGradientText className="text-sm  font-medium">
        <div className="text-sm flex items-center gap-2 z-10 relative text-black dark:text-white">
            <WordRotate
                words={offerings}
                duration={4000}
                className="uppercase"
                />
             like never before
        </div>
      </AnimatedGradientText>
    </div>

}

const HeadLine = () => {
    const texts = [
        "DESIGN",
        "DEVELOP",
        "DELIVER",
    ];

    return (<h1 className="relative w-full flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-center text-slate-900 tracking-wider">
            WE
        </span>
        <MorphingText texts={texts} className="text-center text-black" />
    </h1>)
}