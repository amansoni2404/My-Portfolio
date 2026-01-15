import { ExternalLink, Github, Music, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'MUSE - AI Music Source Separation',
    description: 'An AI system leveraging Demucs deep learning model for music source separation (vocals, drums, bass, instruments) achieving 90%+ SDR.',
    longDescription: 'Built an end-to-end interactive platform integrating Flask, React, and PostgreSQL to allow users to upload audio, visualize separated tracks, and receive personalized song recommendations through content-based and user-feedback algorithms.',
    technologies: ['Python', 'PyTorch', 'Flask', 'React', 'PostgreSQL', 'Librosa'],
    icon: Music,
    metrics: '90%+ SDR accuracy • 30% improvement in recommendations',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Bank Loan Default Prediction',
    description: 'A bank loan default prediction system using Bagging ensemble machine learning techniques to forecast loan repayment probability and mitigate banking risk.',
    longDescription: 'Experimented with 5 classification algorithms: Logistic Regression, K-Nearest Neighbors, SVM, Decision Tree, and Random Forest. Random Forest classifier achieved 81.04% accuracy, outperforming other models.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
    icon: TrendingUp,
    metrics: '81.04% accuracy • IEEE Published Research',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Featured Work
            </p>
            <h2 className="section-title">
              Selected <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card group relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="p-4 bg-secondary rounded-2xl w-fit">
                      <project.icon size={32} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-2xl md:text-3xl font-bold">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          <button className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors">
                            <Github size={18} />
                          </button>
                          <button className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors">
                            <ExternalLink size={18} />
                          </button>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg">
                        {project.description}
                      </p>

                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4">
                        <p className="text-sm font-medium text-foreground">
                          {project.metrics}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/amansoni2404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-accent rounded-full transition-colors font-medium"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
