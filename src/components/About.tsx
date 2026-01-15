import { Briefcase, Code, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              About Me
            </p>
            <h2 className="section-title">
              Meet <span className="text-gradient">Aman Soni</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate Full-Stack Developer pursuing Master of Science in Computer Science 
                and Engineering at the University of Michigan, Ann Arbor. With nearly 3 years of 
                industry experience, I specialize in building scalable web applications and 
                AI-powered solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans from developing loan processing systems handling 700+ daily 
                transactions to creating machine learning models for music source separation. 
                I thrive on solving complex problems and delivering impactful solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring the latest in AI and cloud technologies, 
                contributing to open-source projects, and sharing knowledge with the developer community.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold">3+</p>
                  <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold">10+</p>
                  <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold">1</p>
                  <p className="text-muted-foreground text-sm mt-1">IEEE Publication</p>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Code size={24} className="text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Current Focus</h3>
                    <p className="text-muted-foreground text-sm">Full-Stack Development & Machine Learning</p>
                    <p className="text-sm mt-2 text-muted-foreground">Building AI-powered applications with modern web technologies</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Briefcase size={24} className="text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Industry Experience</h3>
                    <p className="text-muted-foreground text-sm">Ex-Aditya Birla Capital</p>
                    <p className="text-sm mt-2 text-muted-foreground">Developed enterprise-level financial systems and scalable architectures</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Rocket size={24} className="text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Passion & Goals</h3>
                    <p className="text-muted-foreground text-sm">Continuous Learning & Innovation</p>
                    <p className="text-sm mt-2 text-muted-foreground">Exploring cutting-edge technologies and contributing to impactful projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
