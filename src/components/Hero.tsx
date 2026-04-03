import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import heroBg from "../assets/bg.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0, 0, 0.58, 1],
    },
  },
};

const Hero = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    let prevScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < window.innerHeight) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = currentScroll < prevScroll ? "0" : "-80px";
      }

      prevScroll = currentScroll;
    };

    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "50";
    navbar.style.transition = "top 0.3s ease";

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll with navbar offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-[#f6efe7]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[length:250%] md:bg-cover bg-[center_top] md:bg-[center_top_-80px] bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(58, 37, 32, 0.25), rgba(58, 37, 32, 0.25)), url(${heroBg})` }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-[18vh] md:pt-[22vh]"
      >
        <motion.div
          variants={itemVariants}
          className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-20 mt-14 md:mt-20 mb-10"
        >
          <button
            onClick={() => scrollToSection("events")}
            className="w-full max-w-xs rounded-lg px-10 py-4 font-display tracking-widest uppercase shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
            style={{ backgroundColor: "#6B3A1E", color: "#F6EFE7", border: "none" }}
          >
            Explore Events
          </button>

          <button
            onClick={() => scrollToSection("itinerary")}
            className="w-full max-w-xs rounded-lg px-10 py-4 font-display tracking-widest uppercase shadow-md transition-all hover:scale-105 active:scale-95 sm:w-auto"
            style={{
              backgroundColor: "#F6EFE7",
              color: "#6B3A1E",
              border: "1px solid #6B3A1E",
            }}
          >
            Itinerary
          </button>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-display uppercase tracking-[0.3em] md:tracking-[0.45em] text-lg sm:text-xl md:text-2xl"
          style={{ color: "#5A2E1A", fontWeight: 800 }}
        >
          19 – 20 – 21 FEB
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;