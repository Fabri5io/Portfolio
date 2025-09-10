import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);
    return <nav className="fixed top-0 w-full z-40 bg-[#41424c] backdrop-blur-lg border-b border-[#41424c] shadow-lg ">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="/" className="flex items-center">
                    <img
                        src="/me.gif"
                        alt="Logo"
                        className="h-15 w-auto"
                    />
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex item-center space-x-8">
                    <a href="#home" className="text-gray-200 hove:text-white transition-colors"
                    >
                        {""}
                        Home{""}
                    </a>
                    <a href="#about" className="text-gray-200 hove:text-white transition-colors"
                    >
                        {""}
                        About{""}
                    </a>
                    <a href="#projects" className="text-gray-200 hove:text-white transition-colors"
                    >
                        {""}
                        Projects{""}
                    </a>
                    <a href="#contact" className="text-gray-200 hove:text-white transition-colors"
                    >
                        {""}
                        Contact{""}
                    </a>
                </div>
                <a href="/" className="flex items-center">
                    <img
                        src="/me.gif"
                        alt="Logo2."
                        className="h-15 w-auto"
                    />
                </a>
            </div>
        </div>
    </nav>
}