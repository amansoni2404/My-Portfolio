// Technology logo mapping - maps skill names to logo image paths
const techLogos: Record<string, string> = {
  // Languages
  'Python': '/tech-logos/python.svg',
  'JavaScript': '/tech-logos/javascript.svg',
  'TypeScript': '/tech-logos/typescript.svg',
  'C++': '/tech-logos/cpp.svg',
  'C': '/tech-logos/c.svg',
  'SQL': '/tech-logos/sql.svg',
  // Frameworks
  'React': '/tech-logos/react.svg',
  'Node.js': '/tech-logos/nodejs.svg',
  'Flask': '/tech-logos/flask.svg',
  'Django': '/tech-logos/django.svg',
  'FastAPI': '/tech-logos/fastapi.svg',
  'PyTorch': '/tech-logos/pytorch.svg',
  'NumPy': '/tech-logos/numpy.svg',
  'Pandas': '/tech-logos/pandas.svg',
  'Falcon': '/tech-logos/falcon.svg',
  'Scikit-learn': '/tech-logos/scikitlearn.svg',
  'Keras': '/tech-logos/keras.svg',
  'OpenCV': '/tech-logos/opencv.svg',
  // Cloud & Databases
  'AWS DynamoDB': '/tech-logos/dynamodb.svg',
  'AWS RDS': '/tech-logos/rds.svg',
  'AWS S3': '/tech-logos/s3.svg',
  'AWS Lambda': '/tech-logos/lambda.svg',
  'AWS EC2': '/tech-logos/ec2.svg',
  'MySQL': '/tech-logos/mysql.svg',
  'PostgreSQL': '/tech-logos/postgresql.svg',
  'MongoDB': '/tech-logos/mongodb.svg',
  // Platforms & Tools
  'Docker': '/tech-logos/docker.svg',
  'Git': '/tech-logos/git.svg',
  'Redis': '/tech-logos/redis.svg',
  'RabbitMQ': '/tech-logos/rabbitmq.svg',
  'Linux': '/tech-logos/linux.svg',
  'Supabase': '/tech-logos/supabase.svg',
  'Hugging Face': '/tech-logos/hugging-face.svg',
  'Weights & Biases': '/tech-logos/weights-and-biases.svg',
  'JIRA': '/tech-logos/jira.svg',
  'Jenkins': '/tech-logos/jenkins.svg',
  'VS Code': '/tech-logos/vscode.svg',
  'Postman': '/tech-logos/postman.svg',
  'Tableau': '/tech-logos/tableau.svg',
  'Power BI': '/tech-logos/powerbi.svg',
  // Domains
  'Web Development': '/tech-logos/web-development.svg',
  'Machine Learning': '/tech-logos/machine-learning-model.svg',
  'Cloud Computing': '/tech-logos/aws.svg',
  'Data Visualization': '/tech-logos/data-visualization.svg',
};

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'C++', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    skills: ['Flask', 'Falcon', 'Django', 'FastAPI', 'Node.js', 'React', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Pandas', 'NumPy'],
  },
  {
    title: 'Cloud & Databases',
    skills: ['AWS DynamoDB', 'AWS RDS', 'AWS S3', 'AWS Lambda', 'AWS EC2', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Platforms & Tools',
    skills: ['Linux', 'Docker', 'Git', 'JIRA', 'Jenkins', 'Hugging Face', 'Weights & Biases', 'Redis', 'RabbitMQ', 'Supabase', 'VS Code',  'Postman','Tableau', 'Power BI']
  },
  {
    title: 'Domains',
    skills: ['Web Development', 'Machine Learning', 'Cloud Computing', 'Data Visualization'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Tech Stack
            </p>
            <h2 className="section-title">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-muted-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const logoPath = techLogos[skill];
                    return (
                      <span key={skill} className="skill-tag flex items-center gap-2">
                        {logoPath && (
                          <img 
                            src={logoPath} 
                            alt={`${skill} logo`}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Visual */}
          <div className="mt-20 glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-display font-bold text-gradient mb-2">Cloud</div>
                <p className="text-muted-foreground">Amazon Web Services</p>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-gradient mb-2">Backend</div>
                <p className="text-muted-foreground">Python • Node.js • Flask • FastAPI</p>
              </div>
              <div>
                <div className="text-5xl font-display font-bold text-gradient mb-2">AI/ML</div>
                <p className="text-muted-foreground">PyTorch • Scikit-learn • OpenCV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
