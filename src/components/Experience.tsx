import { Calendar, MapPin, Building2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Delta Dental of Michigan',
    companyUrl: 'https://www.deltadentalmi.com',
    logo: '/delta-dental-logo.png',
    location: 'East Lansing, MI',
    period: 'May 2026 – Aug 2026',
    type: 'Internship',
    points: [
      'Designed and shipped a dental-claims intelligence platform that pulls scattered patient records into a single reviewable timeline, mapping each treatment to the tooth it was performed on and cutting the time reviewers spend locating a claim by roughly half across 100,000+ records.',
      'Built the service in FastAPI on PostgreSQL with SQLAlchemy, using Pandas for aggregation and Plotly for the interactive views, and opened up search across procedure codes, service dates, and dental anatomy.',
      'Folded claims data that previously lived in separate database tables and spreadsheets into one pipeline behind a single review interface, trimming roughly 30% off manual case-review time.',
      'Prototyped an AI-assisted triage workflow in PyCaret, benchmarking classification models against historical adjudication patterns to surface the cases most likely to need a human look — tightening review consistency by about 20%.',
      'Picked up Angular and Java on the job to deliver a claims review-determination feature, handed off polished and ready for the full-time team to integrate.',
    ],
    document: {
      file: 'delta-dental-performance-review.pdf',
      label: 'View Manager Performance Review',
    },
  },
  {
    title: 'Software Developer',
    company: 'Aditya Birla Capital Ltd.',
    companyUrl: 'https://www.adityabirlacapital.com',
    logo: '/aditya-birla-logo.png',
    location: 'Mumbai, India',
    period: 'July 2023 – July 2025',
    type: 'Full-time',
    points: [
      'Led development and management of personal loan web applications, streamlining processing of 700 loans daily with USD 3,000 typical loan amount.',
      'Engineered RESTful APIs using Flask to integrate modules like Bureau Enquiries, Fraud Checks, KYC Verification, E-Mandate, and Disbursal, automating checks and reducing operational turnaround time by 25%.',
      'Contributed to developing Data Science modules using Python packages like NumPy, Pandas, and Scikit-learn to automate customer eligibility decisions per company policies.',
      'Built a GraphQL-based MIS portal for generating customer onboarding reports, enabling 15+ business stakeholders to access real-time data—contributing to a 10% increase in successful loan applications.',
    ],
  },
  {
    title: 'Graduate Engineer Trainee',
    company: 'Aditya Birla Capital Ltd.',
    companyUrl: 'https://www.adityabirlacapital.com',
    logo: '/aditya-birla-logo.png',
    location: 'Mumbai, India',
    period: 'July 2022 – June 2023',
    type: 'Full-time',
    points: [
      'Awarded for developing STP REST APIs to retrieve financial documents from the LMS and deliver them via Email and SMS, using RabbitMQ for asynchronous processing—enabling 60,000+ monthly deliveries.',
      'Executed a streamlined data pipeline to migrate 10+ on-premise database tables to AWS RDS, leveraging stored procedures, SFTP, and Lambda triggers to automate daily transfers.',
    ],
  },
  {
    title: 'Automation Intern',
    company: 'Anheuser-Busch InBev',
    companyUrl: 'https://www.ab-inbev.com',
    logo: '/ab-inbev-logo.png',
    location: 'Bengaluru, India',
    period: 'Aug 2021 – Jan 2022',
    type: 'Internship',
    points: [
      'Designed and deployed automated bots using Blue Prism to handle report generation, error detection, and SAP updates, saving 3 FTEs by eliminating manual tasks.',
      'Designed a Power BI dashboard visualizing brand-specific sales data across 25+ cities, enabling efficient data-driven decision making and contributing to a 12% increase in regional sales.',
    ],
  },
];

const Experience = () => {
  const handleDocumentView = (filename: string) => {
    window.open(`/${filename}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Career Journey
            </p>
            <h2 className="section-title">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-dot" />
                
                <div className="glass-card p-6 md:p-8 ml-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl md:text-2xl font-bold">
                          {exp.title}
                        </h3>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          exp.type === 'Internship' 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                            : 'bg-accent-orange/20 text-accent-orange border border-accent-orange/30'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground text-base font-medium mb-2 hover:text-accent-orange transition-colors group"
                      >
                        <div className="w-16 h-16 rounded-lg bg-white/10 p-2 flex items-center justify-center border-2 border-border/60 group-hover:border-accent-orange/50 transition-colors flex-shrink-0">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} Logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              if (target.parentElement) {
                                target.parentElement.innerHTML = `
                                  <svg class="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                  </svg>
                                `;
                              }
                            }}
                          />
                        </div>
                        <span className="group-hover:underline">{exp.company}</span>
                      </a>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.document && (
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10"
                        onClick={() => handleDocumentView(exp.document.file)}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        {exp.document.label}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
