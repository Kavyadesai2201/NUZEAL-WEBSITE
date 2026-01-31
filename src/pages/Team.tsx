import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Sparkles } from 'lucide-react';

const teamMembers = [
  { name: 'Pal Patel', role: 'Developer' },
  { name: 'Pranshu Rajan', role: 'Developer' },
  { name: 'Manya Shah', role: 'Developer' },
  { name: 'Rajvi Doshi', role: 'Developer' },
  { name: 'Jayanish Shah', role: 'Developer' },
  { name: 'Milan Shah', role: 'Developer' },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 font-body text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Code className="w-4 h-4" />
              <span className="font-body text-sm uppercase tracking-wider">ITNU</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              The <span className="text-primary">Creators</span>
            </h1>
            <div className="ornament-line my-6" />
            <p className="font-elegant text-xl text-muted-foreground italic">
              The minds behind NUZEAL 2026 digital experience
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-bohemian p-8 group hover:scale-105 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-display text-2xl text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display text-xl text-foreground mb-1">{member.name}</h3>
                <p className="font-body text-sm text-accent">{member.role}</p>

                {/* Decorative */}
                <div className="mt-4 flex justify-center">
                  <Sparkles className="w-5 h-5 text-accent/50" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 card-bohemian p-6 border-l-4 border-accent">
            <p className="font-elegant text-lg text-muted-foreground italic">
              "Built with passion for NUZEAL 2026 - The Bohemia"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
