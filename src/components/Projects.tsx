import { ExternalLink, FileText, Github, Music, Network, ScanEye, ShieldCheck, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'TriGuard: Validity-Aware Semantic Caching for LLM APIs',
    description: 'A 3-gate semantic caching middleware that cuts LLM inference costs while preventing stale or hallucinated responses from being served at scale.',
    highlights: [
      'Replaced standard cosine similarity with Pythagorean Fuzzy Sets (PyFS) over a dual Redis + ChromaDB storage layer, cutting false-positive cache hits by 30% against GPTCache and delivering a 14x reduction in operational expenditure.',
      'Trained an adaptive TTL classifier (Logistic Regression over BGE embeddings) that reached 97% recall on volatile query detection, automatically bypassing the cache for time-sensitive queries like stock prices and live data.',
      'Deployed asynchronous Triple SLM verification (Qwen2.5-1.5B + ms-marco-MiniLM) as a pre-ingestion hallucination filter, sustaining a 44% effective hit rate at ~75ms warm-path latency on A100 GPUs.',
    ],
    technologies: ['Python', 'Large Language Models', 'Vector Databases', 'Semantic Caching', 'Logistic Regression', 'Redis', 'ChromaDB', 'Systems Design', 'Transformers (NLP)', 'LLM Inference'],
    icon: ShieldCheck,
    metrics: '30% fewer false-positive hits • 14x lower OPEX • ~75ms warm-path latency',
    color: 'from-emerald-500/20 to-teal-500/20',
    github: 'https://github.com/Megh-Zyke/CSE-584',
    document: { file: 'triguard-paper.pdf', label: 'Read Paper' },
  },
  {
    title: 'Dependency-Aware Scheduling for Knowledge Graph Updates',
    description: 'A data-dependency-aware transaction scheduler that orchestrates concurrent, LLM-driven updates to a shared Knowledge Graph without sacrificing correctness.',
    highlights: [
      'Designed a conflict detection engine that identifies read-write and write-write hazards on shared entities in real time, mapping incoming updates into a Directed Acyclic Graph (DAG) of independent, parallelizable execution layers.',
      'Achieved a 3x–5x speedup in transaction throughput over sequential baselines while guaranteeing 100% final state correctness, eliminating the race conditions and write conflicts that degrade naive parallel execution by 30%–50%.',
      'Built an asynchronous extraction and reasoning pipeline using open-source LLMs for pronoun resolution, entity extraction, and relationship mapping on streaming text, with pluggable in-memory and Neo4j storage backends.',
      'Served models on GPU clusters via the vLLM inference engine for high-throughput batching, evaluating latency and throughput across workloads of up to 1,000 transactions at entity conflict ratios from 10% to 95%.',
    ],
    technologies: ['Python', 'Large Language Models', 'Graph Databases', 'Neo4j', 'vLLM', 'Natural Language Processing', 'LLM Inference'],
    icon: Network,
    metrics: '3x–5x throughput speedup • 100% final-state correctness',
    color: 'from-orange-500/20 to-amber-500/20',
    github: 'https://github.com/amansoni2404/CSE585-Project',
  },
  {
    title: 'Training-Free Hallucination Control for Vision-Language Models',
    description: 'Research on a logit-steering framework that aligns VLM language generation with visual grounding — no retraining required.',
    highlights: [
      'Engineered a training-free hallucination control pipeline for VLMs such as Qwen3-VL-4B-Instruct, building a 10,000-image COCO dataset and extracting 22-dimensional statistical features plus last-layer hidden states to train MLP and regularized Logistic Regression probes.',
      'Used those probes to dynamically gate intermediate representation adjustments, suppressing text-prior bias and preventing object hallucination at generation time.',
      'Refined the steering mechanics with function-word masking (a 176-word essential list that zeroes grammatical tokens in the steering delta) and JS-divergence-based adaptive scaling.',
      'Resolved the performance degradation of state-of-the-art baselines like VISTA — which suffered a 44.2% drop in BLEU-1 and a 27.9% spike in object hallucination — while maintaining language fluency and achieving lower hallucination metrics.',
    ],
    technologies: ['Multimodal AI', 'PyTorch', 'Python', 'Large Language Models', 'Deep Learning', 'Vision Language Models'],
    icon: ScanEye,
    metrics: 'Lower hallucination at preserved fluency • training-free',
    color: 'from-indigo-500/20 to-violet-500/20',
    github: 'https://github.com/Mack-26/VLM_Research',
  },
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
    link: { url: 'https://ieeexplore.ieee.org/document/9941215', label: 'View IEEE Publication' },
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
            {projects.map((project) => (
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
                        <div className="flex gap-2 flex-shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} on GitHub`}
                              title="View source on GitHub"
                              className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors"
                            >
                              <Github size={18} />
                            </a>
                          )}
                          {project.document && (
                            <a
                              href={`/${project.document.file}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} — ${project.document.label}`}
                              title={project.document.label}
                              className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors"
                            >
                              <FileText size={18} />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} — ${project.link.label}`}
                              title={project.link.label}
                              className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg">
                        {project.description}
                      </p>

                      {project.longDescription && (
                        <p className="text-muted-foreground">
                          {project.longDescription}
                        </p>
                      )}

                      {project.highlights && (
                        <ul className="space-y-3">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

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
