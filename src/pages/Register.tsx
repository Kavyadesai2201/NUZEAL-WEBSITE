import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, School, Users } from 'lucide-react';
import { toast } from 'sonner';

const eventDetails: Record<string, { title: string; category: string; teamSize: string; fee: string }> = {
  dance: { title: 'Dance Events', category: 'Cultural', teamSize: '1-8 members', fee: '₹200' },
  art: { title: 'Art & Craft', category: 'Creative', teamSize: '1-2 members', fee: '₹100' },
  tech: { title: 'Technical Events', category: 'Tech', teamSize: '1-4 members', fee: '₹300' },
  music: { title: 'Music Events', category: 'Cultural', teamSize: '1-6 members', fee: '₹150' },
  gaming: { title: 'E-Sports', category: 'Gaming', teamSize: '1-5 members', fee: '₹250' },
  fashion: { title: 'Fashion Show', category: 'Cultural', teamSize: '6-12 members', fee: '₹500' },
  literary: { title: 'Literary Events', category: 'Academic', teamSize: '1-3 members', fee: '₹100' },
  sports: { title: 'Sports Events', category: 'Athletics', teamSize: '1-11 members', fee: '₹200' },
};

const Register = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const event = eventDetails[eventId || ''] || eventDetails.dance;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institute: '',
    teamName: '',
    teamMembers: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Registration Successful!', {
      description: `You have been registered for ${event.title}. Check your email for confirmation.`,
    });

    setIsSubmitting(false);
    navigate('/');
  };

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

        <div className="max-w-2xl mx-auto">
          {/* Event Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 text-xs font-body uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-3">
              {event.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Register for <span className="text-primary">{event.title}</span>
            </h1>
            <div className="ornament-line my-4" />
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Team Size: {event.teamSize}</span>
              <span>•</span>
              <span>Registration Fee: {event.fee}</span>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="card-bohemian p-6 md:p-8">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 font-display text-sm text-foreground mb-2">
                  <User size={16} className="text-accent" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 font-display text-sm text-foreground mb-2">
                  <Mail size={16} className="text-accent" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 font-display text-sm text-foreground mb-2">
                  <Phone size={16} className="text-accent" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>

              {/* Institute */}
              <div>
                <label className="flex items-center gap-2 font-display text-sm text-foreground mb-2">
                  <School size={16} className="text-accent" />
                  Institute *
                </label>
                <select
                  name="institute"
                  value={formData.institute}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground transition-all"
                >
                  <option value="">Select your institute</option>
                  <option value="ioe">Institute of Engineering</option>
                  <option value="iot">Institute of Technology</option>
                  <option value="iom">Institute of Management</option>
                  <option value="ios">Institute of Science</option>
                  <option value="ioa">Institute of Arts</option>
                  <option value="ioc">Institute of Commerce</option>
                  <option value="iol">Institute of Law</option>
                  <option value="ioed">Institute of Education</option>
                </select>
              </div>

              {/* Team Name */}
              <div>
                <label className="flex items-center gap-2 font-display text-sm text-foreground mb-2">
                  <Users size={16} className="text-accent" />
                  Team Name (if applicable)
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Enter your team name"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>

              {/* Team Members */}
              <div>
                <label className="flex items-center gap-2 font-display text-sm text-foreground mb-2">
                  Team Members
                </label>
                <textarea
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  placeholder="Enter team member names (one per line)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 font-body text-foreground placeholder:text-muted-foreground transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-bohemian px-8 py-4 rounded-lg font-display text-sm tracking-widest text-primary-foreground uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Registration'}
              </button>
            </div>
          </form>

          {/* Note */}
          <p className="text-center font-body text-sm text-muted-foreground mt-6">
            By registering, you agree to the event guidelines and rules. 
            A confirmation email will be sent to your registered email address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
