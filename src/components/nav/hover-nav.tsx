const HoverNav = () => {
    return <nav className="relative w-screen bg-slate-200 backdrop-blur-sm p-2 shadow-lg md:w-[70%] mx-auto rounded-full h-16">
        <div className="absolute flex items-center justify-between w-full h-full px-6 inset-0">

        <div>{"<TheHoracle />"}</div>
        <div className="flex gap-2">
            <div>
                about | company | stuff
            </div>
            <div>           
                contact us 
            </div>
        </div>
        </div>
    </nav>
}

export default HoverNav