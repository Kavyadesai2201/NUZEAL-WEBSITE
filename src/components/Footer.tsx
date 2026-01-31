import { MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container mx-auto px-6 py-10">

        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Follow Us (1st on phone, 2nd on laptop) */}
          <div className="text-center space-y-3 order-1 md:order-2">
            <h4 className="font-display text-lg tracking-wider text-primary-foreground">
              Follow Us
            </h4>

            <a
              href="https://www.instagram.com/cultcomm.itnu?igsh=MW5jZW9lYTZpN3R0dw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-4 rounded-full border border-accent transition-all duration-300 hover:bg-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/30 cursor-pointer group"
            >
              <Instagram className="w-5 h-5 text-accent transition-colors duration-300 group-hover:text-foreground" />
            </a>
          </div>

          {/* Developed By (2nd on phone, 3rd on laptop) */}
          <div className="text-center md:text-right space-y-3 order-2 md:order-3">
            <h4 className="font-display text-lg tracking-wider text-primary-foreground">
              Developed By
            </h4>

            <div className="space-y-1">
              <a
                href="https://www.instagram.com/pal_ptl21?igsh=cmxzeDM4NDRybXF0"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Pal Patel
              </a>

              <a
                href="https://www.instagram.com/pranshu.2712?igsh=MWI3eHhvNGNsaXRkaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Pranshu Rajan
              </a>
            </div>
          </div>

          {/* Contact Us (3rd on phone, 1st on laptop) */}
          <div className="text-center md:text-left space-y-3 order-3 md:order-1">
            <h4 className="font-display text-lg tracking-wider text-primary-foreground">
              Contact Us
            </h4>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-body text-sm text-primary-foreground/70">
                Nirma University, Ahmedabad
              </span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-accent" />
              <a
                href="https://www.instagram.com/rutvij__26?igsh=MXJuZ3JjeWhxdHdvMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary-foreground/70 hover:text-accent"
              >
                Rutvij Borisagar: +91 94082 26804
              </a>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 text-accent" />
              <span className="font-body text-sm text-primary-foreground/70">
                Samiya Ayachit: +91 78980 91733
                </span>
            </div>

          </div> {/* ✅ THIS WAS MISSING */}

        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-4 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/50 tracking-wide">
            © NUZEAL 2026 • Nirma University
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;