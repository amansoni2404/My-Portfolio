import { Briefcase, Code, GraduationCap } from 'lucide-react';

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
                I like the part of engineering where an idea meets real traffic. Across 3+ years of
                industry experience I've shipped systems people depend on daily — lending platforms
                processing 700 loans a day, pipelines delivering 60,000+ financial documents a month,
                and claims tooling that makes 100K+ records searchable in seconds.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm now finishing an MS in Computer Science & Engineering at the University of Michigan,
                working where scalable systems meet applied AI — most recently a dental-claims
                intelligence platform at Delta Dental of Michigan, and TriGuard, a semantic caching layer
                that cuts LLM API costs 14x without serving stale answers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you're building something ambitious in backend, distributed systems, or AI
                infrastructure, I'd love to hear about it.
              </p>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Code size={24} className="text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">What I'm Building</h3>
                    <p className="text-muted-foreground text-sm">Backend Systems & AI Infrastructure</p>
                    <p className="text-sm mt-2 text-muted-foreground">
                      Python and FastAPI services, PostgreSQL pipelines, and retrieval systems — currently
                      deep in semantic caching and making LLM responses trustworthy at scale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Briefcase size={24} className="text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Where I've Worked</h3>
                    <p className="text-muted-foreground text-sm">Delta Dental of Michigan · Aditya Birla Capital</p>
                    <p className="text-sm mt-2 text-muted-foreground">
                      Dental-claims intelligence and AutoML-assisted triage as a 2026 SWE intern, after three
                      years in Mumbai building lending platforms, REST and GraphQL APIs, and an AWS migration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <GraduationCap size={24} className="text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Studying at Michigan</h3>
                    <p className="text-muted-foreground text-sm">MS CSE · Graduating December 2026</p>
                    <p className="text-sm mt-2 text-muted-foreground">
                      Scalable systems, databases, NLP, and compilers — carrying a 3.74 GPA while looking for
                      full-time software engineering roles.
                    </p>
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
