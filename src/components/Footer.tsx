import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <a href="#home" className="font-display text-2xl font-bold tracking-tight">
                AS<span className="text-muted-foreground">.</span>
              </a>
              <p className="text-muted-foreground text-sm mt-2">
                © {new Date().getFullYear()} Aman Soni. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/aman-soni24/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/amansoni2404"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:amansoni@umich.edu"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
