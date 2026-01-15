import { GraduationCap, Award, Download, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  const handleTranscriptDownload = (filename: string, displayName: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = `${displayName}_Transcript.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Education
            </p>
            <h2 className="section-title">
              Academic <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* University of Michigan */}
            <div className="glass-card p-6 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                {/* Logo */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-border/50">
                  <img 
                    src="/umich-logo.png" 
                    alt="University of Michigan Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="p-2 bg-secondary rounded-lg">
                              <svg class="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                              </svg>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1">University of Michigan, Ann Arbor</h3>
                  <p className="text-muted-foreground text-sm font-medium">Master of Science in Computer Science & Engineering</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <p className="text-muted-foreground text-xs">Ann Arbor, Michigan</p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <p className="text-muted-foreground text-xs">Aug 2025 – Dec 2026</p>
                  </div>
                  <p className="text-sm mt-3">
                    <span className="font-semibold">GPA:</span> 3.66/4.0
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-sm text-muted-foreground">Relevant Coursework:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Advanced Scalable Systems</li>
                      <li>Algorithms</li>
                      <li>AI Foundations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10"
                  onClick={() => handleTranscriptDownload('umich-transcript.pdf', 'UMich')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Transcript
                </Button>
              </div>
            </div>

            {/* SRM Institute */}
            <div className="glass-card p-6 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                {/* Logo */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-border/50">
                  <img 
                    src="/srm-logo.png" 
                    alt="SRM Institute Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="p-2 bg-secondary rounded-lg">
                              <svg class="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                              </svg>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1">SRM Institute of Science and Technology</h3>
                  <p className="text-muted-foreground text-sm font-medium">Bachelor of Technology in Computer Science & Engineering</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <p className="text-muted-foreground text-xs">Chennai, India</p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <p className="text-muted-foreground text-xs">June 2018 – May 2022</p>
                  </div>
                  <p className="text-sm mt-3">
                    <span className="font-semibold">CGPA:</span> 9.51/10
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-sm text-muted-foreground">Relevant Coursework:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Data Structures and Algorithms</li>
                      <li>Database Management Systems</li>
                      <li>Natural Language Processing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10"
                  onClick={() => handleTranscriptDownload('srm-transcript.pdf', 'SRM')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Transcript
                </Button>
              </div>
            </div>

            {/* IEEE Publication */}
            <div className="glass-card p-6 md:col-span-2 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <Award size={24} className="text-accent-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg mb-1">IEEE Publication</h3>
                  <p className="text-muted-foreground text-sm font-medium">Bank Loan Default Prediction using Machine Learning</p>
                  <p className="text-muted-foreground text-xs mt-2">ICPS 2022 Conference</p>
                  <p className="text-xs text-muted-foreground mt-1">ISBN: 978-1-6654-7022-3</p>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10"
                  onClick={() => window.open('https://ieeexplore.ieee.org/document/9941215', '_blank', 'noopener,noreferrer')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Publication
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

