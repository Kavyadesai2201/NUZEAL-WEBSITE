import { Sparkles, Users, Calendar, Trophy } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Bohemian Spirit',
    description: 'Embrace creativity, artistry, and free-spirited expression throughout the festival',
  },
  {
    icon: Users,
    title: '8 Institutes',
    description: 'Witness fierce yet friendly competition among eight prestigious institutes',
  },
  {
    icon: Calendar,
    title: '3 Days',
    description: 'Three days packed with exciting events, performances, and celebrations',
  },
  {
    icon: Trophy,
    title: '10+ Events',
    description: 'Participate in diverse events spanning Arts and Culture',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Light Bohemian Background (2 shades only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFE2D3] via-[#E4C9AD] to-[#D6B08C]" />

      {/* Soft Warm Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-elegant text-sm md:text-base tracking-[0.35em] uppercase mb-3 text-[#7A4A2E]">
            Discover
          </p>

          <h2 className="font-display text-4xl md:text-5xl mb-6 text-[#3F2618]">
            About <span className="text-[#8B5A3C]">NUZEAL</span>
          </h2>

          <div className="ornament-line mx-auto opacity-60" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="font-elegant text-xl md:text-2xl leading-relaxed mb-6 text-[#4A2F22]">
            NUZEAL 2026 is the annual inter-institute cultural extravaganza that brings together 
            the brightest minds and talents from eight distinguished institutes. This year, we 
            embrace the <span className="text-[#8B5A3C] font-semibold">Bohemia</span> theme —
            celebrating artistic freedom, cultural diversity, and the unconventional spirit of creativity.
          </p>

          <p className="font-body leading-relaxed text-[#5C4032]">
            From mesmerizing dance performances to intellectual debates, from melodious musical 
            nights to adrenaline-pumping events — NUZEAL offers a platform for every 
            talent to shine. Join us in this grand celebration of youth, culture, and unity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 text-center rounded-xl bg-[#F7EFE7]/70 border border-[#C9A07A]/40 hover:border-[#8B5A3C]/60 hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#EAD5C0] flex items-center justify-center group-hover:bg-[#D8B493] transition-colors">
                <feature.icon className="w-8 h-8 text-[#8B5A3C]" />
              </div>

              <h3 className="font-display text-lg mb-3 text-[#3F2618]">
                {feature.title}
              </h3>

              <p className="font-body text-sm text-[#5C4032]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;