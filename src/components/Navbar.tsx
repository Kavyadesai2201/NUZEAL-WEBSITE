import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/nav_logo.png";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "itinerary", label: "Itinerary" },
  { id: "events", label: "Events" },
  { id: "leaderboard", label: "Leaderboard" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    let prevScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll < window.innerHeight) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = prevScroll > currentScroll ? "0" : "-90px";
      }

      prevScroll = currentScroll;
    };

    navbar.style.transition = "top 0.35s ease";
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50
                 bg-[#4A2A16]/90 backdrop-blur-md
                 border-b border-white/10 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <button
            onClick={() => handleScrollTo("home")}
            className="flex items-center h-full -ml-8"
          >
            <img
              src={logo}
              alt="NUZEAL Logo"
              className="h-28 sm:h-28 md:h-32 w-auto object-contain -ml-3 sm:ml-0"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="
                  relative text-sm uppercase tracking-widest
                  text-white/80 hover:text-white transition-colors duration-300
                  after:absolute after:left-1/2 after:-bottom-2
                  after:h-[2px] after:w-0 after:bg-[#EAD5C0]
                  after:transition-all after:duration-300
                  hover:after:w-full hover:after:left-0
                "
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-3"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="
                    relative text-left text-sm uppercase tracking-widest
                    text-white/80 hover:text-white transition-colors
                    py-3 pl-4
                    before:absolute before:left-0 before:top-1/2
                    before:-translate-y-1/2 before:h-4 before:w-[2px]
                    before:bg-[#EAD5C0] before:opacity-0
                    hover:before:opacity-100
                  "
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;