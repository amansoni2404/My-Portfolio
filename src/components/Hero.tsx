import { Button } from '@/components/ui/button';
import { Download, Code, Hash, Cloud, Terminal, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a0a0a]">
      {/* Subtle Code Screens Background - Scattered Across Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract grid lines - very subtle */}
        <div className="absolute inset-0 circuit-grid opacity-5"></div>
        
        {/* Glowing code screens - scattered across the entire hero section with moving animation */}
        {/* Top left screen with < /> symbols */}
        <div className="absolute top-16 left-[10%] floating-code-icon opacity-25" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-28 h-20 rounded border border-accent-orange/30 bg-accent-orange/10 backdrop-blur-sm shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-accent-orange/30">
              <span>&lt;/&gt;</span>
            </div>
          </div>
        </div>
        
        {/* Top center screen with network pattern */}
        <div className="absolute top-24 left-[45%] floating-code-icon opacity-20" style={{ animationDelay: '1.1s' }}>
          <div className="relative w-36 h-28 rounded border border-accent-orange/25 bg-gradient-to-br from-accent-orange/10 to-blue-500/10 backdrop-blur-sm shadow-lg">
            <svg className="absolute inset-2 w-full h-full" viewBox="0 0 100 80" opacity="0.4">
              <line x1="20" y1="20" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-accent-orange"/>
              <line x1="50" y1="40" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-accent-orange"/>
              <line x1="20" y1="60" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
              <line x1="80" y1="60" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
              <circle cx="50" cy="40" r="3" fill="currentColor" className="text-accent-orange"/>
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-accent-orange"/>
              <circle cx="80" cy="20" r="2" fill="currentColor" className="text-accent-orange"/>
              <circle cx="20" cy="60" r="2" fill="currentColor" className="text-blue-500"/>
              <circle cx="80" cy="60" r="2" fill="currentColor" className="text-blue-500"/>
            </svg>
          </div>
        </div>
        
        {/* Top right screen with {} symbols */}
        <div className="absolute top-20 right-[15%] floating-code-icon opacity-25" style={{ animationDelay: '0.6s' }}>
          <div className="relative w-24 h-20 rounded border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-4xl font-bold text-blue-500/30">
              <span>{'{}'}</span>
            </div>
          </div>
        </div>
        
        {/* Middle right screen with < /> symbols */}
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 floating-code-icon opacity-25" style={{ animationDelay: '1.9s' }}>
          <div className="relative w-30 h-22 rounded border border-accent-orange/30 bg-accent-orange/10 backdrop-blur-sm shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-accent-orange/30">
              <span>&lt;/&gt;</span>
            </div>
          </div>
        </div>
        
        {/* Bottom left screen with network pattern */}
        <div className="absolute bottom-32 left-[12%] floating-code-icon opacity-20" style={{ animationDelay: '2.4s' }}>
          <div className="relative w-34 h-26 rounded border border-blue-500/25 bg-gradient-to-br from-blue-500/10 to-accent-orange/10 backdrop-blur-sm shadow-lg">
            <svg className="absolute inset-2 w-full h-full" viewBox="0 0 100 80" opacity="0.4">
              <line x1="25" y1="25" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
              <line x1="75" y1="25" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-blue-500"/>
              <line x1="50" y1="40" x2="50" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-accent-orange"/>
              <circle cx="50" cy="40" r="3" fill="currentColor" className="text-blue-500"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" className="text-blue-500"/>
              <circle cx="75" cy="25" r="2" fill="currentColor" className="text-blue-500"/>
              <circle cx="50" cy="60" r="2" fill="currentColor" className="text-accent-orange"/>
            </svg>
          </div>
        </div>
        
        {/* Bottom center screen with {} symbols */}
        <div className="absolute bottom-24 left-[50%] -translate-x-1/2 floating-code-icon opacity-22" style={{ animationDelay: '1.4s' }}>
          <div className="relative w-26 h-20 rounded border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-4xl font-bold text-blue-500/30">
              <span>{'{}'}</span>
            </div>
          </div>
        </div>
        
        {/* Bottom right screen */}
        <div className="absolute bottom-28 right-[10%] floating-code-icon opacity-25" style={{ animationDelay: '0.9s' }}>
          <div className="relative w-28 h-22 rounded border border-accent-orange/30 bg-accent-orange/10 backdrop-blur-sm shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-accent-orange/30">
              <span>&lt;/&gt;</span>
            </div>
          </div>
        </div>
        
        {/* Subtle data stream lines scattered */}
        <div className="absolute top-1/3 left-[40%] w-px h-28 bg-gradient-to-b from-transparent via-accent-orange/8 to-transparent rotate-12"></div>
        <div className="absolute top-1/2 right-[45%] w-px h-36 bg-gradient-to-b from-transparent via-blue-500/6 to-transparent -rotate-12"></div>
        <div className="absolute bottom-1/3 left-[55%] w-px h-32 bg-gradient-to-b from-transparent via-accent-orange/7 to-transparent rotate-6"></div>
        <div className="absolute top-2/3 right-[40%] w-px h-30 bg-gradient-to-b from-transparent via-blue-5/6 to-transparent -rotate-6"></div>
        
        {/* Moving Code Icons - Scattered across hero */}
        {/* Python Logo */}
        <div className="absolute top-24 left-[30%] floating-code-icon opacity-22">
          <div className="relative w-12 h-12 rounded border border-blue-500/35 bg-blue-500/12 backdrop-blur-sm p-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-500/50">
              <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 4.79 4.533 4.79 4.533l1.203 2.004s1.493-.852 3.127-.852c1.636 0 2.465.933 2.465 1.849v2.048h-4.328v-.003zm-1.224 1.089v-.941c0-1.2-.908-2.182-2.023-2.182-1.114 0-2.023.982-2.023 2.182v.941h4.046z"/>
              <path d="M18.302 4.533S15.73 3 11.151 3c-4.777 0-6.335 2.391-6.335 2.391v3.951h4.328v-.941s.039-1.849 2.023-1.849c2.023 0 2.023 1.849 2.023 1.849v2.048c0 .916-.828 1.849-2.465 1.849-1.636 0-3.127.852-3.127.852l-1.203 2.004s2.572 1.533 7.146 1.533c4.777 0 6.335-2.391 6.335-2.391v-3.951h-4.328v.941c0 1.429-1.937 1.849-2.023 1.849-2.023 0-2.023-1.849-2.023-1.849v-2.048h4.328zm-1.224 3.833v.941H13.03v-.941c0-1.2.908-2.182 2.023-2.182 1.114 0 2.023.982 2.023 2.182z"/>
            </svg>
          </div>
        </div>
        
        {/* AWS Logo */}
        <div className="absolute top-40 right-[30%] floating-code-icon opacity-22" style={{ animationDelay: '0.5s' }}>
          <div className="relative w-14 h-10 rounded border border-orange-500/35 bg-orange-500/12 backdrop-blur-sm p-1.5">
            <svg viewBox="0 0 24 16" fill="currentColor" className="w-full h-full text-orange-500/50">
              <path d="M8.693 4.24c.126-.426.26-.842.386-1.26h1.056c-.126.42-.256.834-.382 1.26l-.024.078H11.7l.368 1.304H9.548c-.324.918-.642 1.834-.96 2.754-.046.154-.096.306-.148.456h2.494l.362 1.3H7.724c-.138.424-.27.852-.402 1.278l-.07.22-.024.078H4.804L4.432 10.05h1.754c.314-.9.634-1.8.958-2.7.05-.14.1-.28.15-.42H4.794l-.362-1.304h2.488c.04-.128.082-.254.124-.38.318-.92.636-1.836.96-2.754zm8.728 6.31c-.168.01-.33.016-.49.016-.776 0-1.37-.204-1.77-.618-.408-.414-.612-1.024-.612-1.826 0-.81.216-1.434.648-1.87.44-.438 1.072-.658 1.89-.658.208 0 .396.01.564.03v6.678h-.618v-2.746zm-1.608-3.286c-.222 0-.392.044-.51.132-.118.09-.174.228-.174.414 0 .194.056.334.168.42.112.086.288.13.528.13.16 0 .302-.01.424-.03v-1.066h-.436zm5.96-1.78c-.446 0-.786.096-1.02.288-.234.192-.35.46-.35.802 0 .374.124.656.374.848.25.19.586.286 1.01.286.09 0 .178-.004.264-.012v-.592c-.056.008-.112.012-.168.012-.288 0-.496-.06-.626-.18-.13-.12-.194-.298-.194-.536 0-.23.072-.406.216-.528.144-.122.354-.183.63-.183.088 0 .18.006.278.018v-.574c-.092-.008-.18-.012-.264-.012zm-.114 3.286c.168.01.33.016.49.016.776 0 1.37-.204 1.77-.618.408-.414.612-1.024.612-1.826 0-.81-.216-1.434-.648-1.87-.44-.438-1.072-.658-1.89-.658-.208 0-.396.01-.564.03v6.678h.618v-2.746zm1.608-3.286c.222 0 .392.044.51.132.118.09.174.228.174.414 0 .194-.056.334-.168.42-.112.086-.288.13-.528.13-.16 0-.302-.01-.424-.03v-1.066h.436z"/>
            </svg>
          </div>
        </div>
        
        {/* Hash Symbol */}
        <div className="absolute top-32 left-[55%] floating-code-icon opacity-25" style={{ animationDelay: '1s' }}>
          <div className="relative w-10 h-10 rounded border border-accent-orange/35 bg-accent-orange/12 backdrop-blur-sm p-2">
            <Hash className="w-full h-full text-accent-orange/50" />
          </div>
        </div>
        
        {/* Code Icon */}
        <div className="absolute top-56 left-[20%] floating-code-icon opacity-22" style={{ animationDelay: '1.5s' }}>
          <div className="relative w-10 h-10 rounded border border-blue-500/35 bg-blue-500/12 backdrop-blur-sm p-2">
            <Code className="w-full h-full text-blue-500/50" />
          </div>
        </div>
        
        {/* Terminal Icon */}
        <div className="absolute top-1/3 right-[35%] floating-code-icon opacity-22" style={{ animationDelay: '2s' }}>
          <div className="relative w-10 h-10 rounded border border-accent-orange/35 bg-accent-orange/12 backdrop-blur-sm p-2">
            <Terminal className="w-full h-full text-accent-orange/50" />
          </div>
        </div>
        
        {/* Cloud Icon */}
        <div className="absolute top-2/3 left-[40%] floating-code-icon opacity-22" style={{ animationDelay: '2.5s' }}>
          <div className="relative w-10 h-10 rounded border border-blue-500/35 bg-blue-500/12 backdrop-blur-sm p-2">
            <Cloud className="w-full h-full text-blue-500/50" />
          </div>
        </div>
        
        {/* Code Symbols - Moving */}
        <div className="absolute top-44 left-[65%] floating-code-icon opacity-25" style={{ animationDelay: '0.8s' }}>
          <div className="relative font-mono text-2xl font-bold text-accent-orange/35">
            &&
          </div>
        </div>
        
        <div className="absolute bottom-40 left-[25%] floating-code-icon opacity-25" style={{ animationDelay: '1.8s' }}>
          <div className="relative font-mono text-2xl font-bold text-blue-500/35">
            ||
          </div>
        </div>
        
        <div className="absolute top-1/2 left-[50%] floating-code-icon opacity-25" style={{ animationDelay: '2.2s' }}>
          <div className="relative font-mono text-2xl font-bold text-accent-orange/35">
            ++
          </div>
        </div>
        
        <div className="absolute bottom-32 right-[25%] floating-code-icon opacity-25" style={{ animationDelay: '1.2s' }}>
          <div className="relative font-mono text-xl font-bold text-blue-500/35">
            ==
          </div>
        </div>
        
        <div className="absolute top-1/4 right-[45%] floating-code-icon opacity-25" style={{ animationDelay: '0.3s' }}>
          <div className="relative font-mono text-xl font-bold text-accent-orange/35">
            !=
          </div>
        </div>
        
        {/* React-like symbol */}
        <div className="absolute bottom-1/3 left-[50%] floating-code-icon opacity-22" style={{ animationDelay: '1.7s' }}>
          <div className="relative w-12 h-12 rounded border border-cyan-500/35 bg-cyan-500/12 backdrop-blur-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-cyan-500/50">
              <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        {/* Node.js symbol */}
        <div className="absolute top-3/4 right-[30%] floating-code-icon opacity-22" style={{ animationDelay: '0.7s' }}>
          <div className="relative w-10 h-10 rounded-full border border-green-500/35 bg-green-500/12 backdrop-blur-sm flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-green-500/50">JS</span>
          </div>
        </div>
        
        {/* TypeScript TS */}
        <div className="absolute top-48 right-[50%] floating-code-icon opacity-22" style={{ animationDelay: '1.3s' }}>
          <div className="relative w-10 h-10 rounded border border-blue-500/35 bg-blue-500/12 backdrop-blur-sm flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-blue-500/50">TS</span>
          </div>
        </div>
        
        {/* Soft glow effects scattered */}
        <div className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-accent-orange/3 blur-3xl"></div>
        <div className="absolute top-1/2 right-[20%] w-56 h-56 rounded-full bg-blue-500/2 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[45%] w-60 h-60 rounded-full bg-accent-orange/2 blur-3xl"></div>
        <div className="absolute top-1/3 right-[35%] w-52 h-52 rounded-full bg-blue-500/3 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-12 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Side - Text Content */}
          <div className="space-y-5 z-10">
            <div className="space-y-5 animate-fade-up opacity-0">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight">
                Hello<span className="text-accent-orange">.</span>
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-accent-orange"></div>
                <span className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-[#FF7A30] via-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent">
                  I'm Aman
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground">
                Software Developer
              </h2>

              <div className="text-muted-foreground text-lg max-w-2xl leading-relaxed space-y-2">
                <p>MS CSE @UMich.</p>
                <p>Passionate about building intelligent systems that solve real world problems through cutting edge AI, scalable cloud infrastructure, backend systems, and innovative software solutions.</p>
                <p>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange border border-accent-orange/30 inline-block">
                    Seeking Summer 2026 Internships in SWE, Data, or AI/ML Engineering
                  </span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up opacity-0 stagger-3">
              <Button 
                size="lg" 
                className="bg-accent-orange hover:bg-accent-orange/90 text-background rounded-sm px-8 py-6 text-lg font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Got a project?
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent-orange text-accent-orange hover:bg-accent-orange/10 rounded-sm px-8 py-6 text-lg font-medium"
                onClick={() => {
                  // Create a temporary anchor element to trigger download
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Aman_Soni_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                My resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-5 animate-fade-up opacity-0 stagger-4">
              <a
                href="https://linkedin.com/in/aman-soni24/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent-orange/10 hover:border-accent-orange/30 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-foreground/80 hover:text-accent-orange transition-colors" />
              </a>
              <a
                href="mailto:amansoni@umich.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:bg-accent-orange/10 hover:border-accent-orange/30 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground/80 hover:text-accent-orange transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Side - Portrait Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xs mx-auto">
              {/* Orange Circle Container with Image Inside */}
              <div className="relative w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] mx-auto">
                {/* Orange Circle Border */}
                <div className="absolute inset-0 rounded-full border-[4px] border-accent-orange/40 overflow-hidden">
                  {/* Semi-circle arc on top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 border-t-[4px] border-r-[4px] border-accent-orange/50 rounded-t-full"></div>
                </div>
                
                {/* Portrait Image - Circular, fits inside the circle */}
                <div className="absolute inset-[8px] rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="/portrait.jpg" 
                    alt="Aman Soni - Software Developer" 
                    className="w-full h-full object-cover"
                    loading="eager"
                    style={{ 
                      objectPosition: 'center 32%',
                      transform: 'scale(1.00)',
                      transformOrigin: 'center center'
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative Chevrons */}
              <div className="absolute top-1/4 left-0 -translate-x-1/2 w-0 h-0 border-t-[25px] lg:border-t-[32px] border-t-transparent border-r-[35px] lg:border-r-[48px] border-r-accent-orange/20 border-b-[25px] lg:border-b-[32px] border-b-transparent"></div>
              <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-0 h-0 border-t-[25px] lg:border-t-[32px] border-t-transparent border-l-[35px] lg:border-l-[48px] border-l-accent-orange/20 border-b-[25px] lg:border-b-[32px] border-b-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
