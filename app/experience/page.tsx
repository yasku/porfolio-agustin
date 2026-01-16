'use client';

import Link from 'next/link';
import MacTerminal from '@/components/MacTerminal';
import TerminalPrompt from '@/components/TerminalPrompt';

export default function ExperiencePage() {
  const experiences = [
    {
      company: 'TechCorp',
      role: 'Senior AI Engineer',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading AI development initiatives and managing a team of ML engineers',
      achievements: [
        'Led development of AI-powered recommendation system serving 10M+ users',
        'Improved model accuracy by 35% through novel architecture improvements',
        'Managed and mentored team of 5 ML engineers',
        'Reduced inference latency by 60% through optimization',
        'Implemented MLOps pipeline reducing deployment time by 70%',
      ],
      tech: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Kubernetes', 'MLflow'],
      color: 'terminal-green',
    },
    {
      company: 'StartupAI',
      role: 'ML Engineer',
      period: '2020 - 2022',
      location: 'San Francisco, CA',
      description: 'Building production ML systems and NLP solutions',
      achievements: [
        'Built NLP pipeline processing 1M+ documents daily',
        'Deployed models handling 5M+ API requests per day',
        'Reduced training time by 50% through distributed computing',
        'Implemented A/B testing framework for model evaluation',
        'Created automated data labeling system saving 200+ hours/month',
      ],
      tech: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Transformers', 'spaCy'],
      color: 'terminal-blue',
    },
    {
      company: 'AI Research Lab',
      role: 'AI Research Intern',
      period: '2019 - 2020',
      location: 'Boston, MA',
      description: 'Research on neural architecture search and optimization techniques',
      achievements: [
        'Conducted research on neural architecture search algorithms',
        'Published paper at major ML conference (NeurIPS 2020)',
        'Developed novel optimization technique improving training speed by 40%',
        'Contributed to open-source ML frameworks',
        'Collaborated with PhD researchers on cutting-edge projects',
      ],
      tech: ['Python', 'PyTorch', 'JAX', 'TensorBoard', 'Jupyter'],
      color: 'terminal-cyan',
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      period: '2018 - 2020',
      focus: 'Artificial Intelligence & Machine Learning',
      achievements: [
        'GPA: 3.9/4.0',
        'Thesis: "Novel Approaches to Neural Architecture Search"',
        'Research Assistant in AI Lab',
        'Teaching Assistant for ML courses',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'MIT',
      period: '2014 - 2018',
      focus: 'Computer Science with AI concentration',
      achievements: [
        'Summa Cum Laude',
        'Dean\'s List all semesters',
        'President of AI/ML Student Club',
        'Winner of University Hackathon 2017',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-terminal-bg">
      {/* Header */}
      <header className="border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-terminal-green font-bold text-lg hover:text-terminal-cyan transition-colors">
            ← Back to Home
          </Link>
          <div className="text-terminal-text text-sm">experience.sh</div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-terminal-cyan mb-2 font-mono">$ cat experience.log</h1>
          <p className="text-terminal-text opacity-70">Professional experience and education</p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-terminal-cyan mb-4 flex items-center gap-2">
            <span className="text-terminal-green">●</span>
            Work Experience
          </h2>

          {experiences.map((exp, index) => (
            <MacTerminal key={index} title={`${exp.company.toLowerCase()}.sh`}>
              <div className="p-6">
                <div className="mb-4">
                  <TerminalPrompt path={`~/experience/${exp.company.toLowerCase()}`} />
                </div>

                {/* Company & Role */}
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className={`text-xl font-bold text-${exp.color} mb-1`}>{exp.role}</h3>
                      <div className="text-terminal-text font-semibold">{exp.company}</div>
                    </div>
                    <div className="text-terminal-yellow text-sm mt-2 md:mt-0">
                      <div>{exp.period}</div>
                      <div className="text-terminal-text opacity-70">{exp.location}</div>
                    </div>
                  </div>
                  <p className="text-terminal-text text-sm opacity-80 italic">
                    {exp.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="text-terminal-cyan text-sm font-semibold mb-2">Key Achievements:</div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                        <span className="text-terminal-green mt-1 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-terminal-border">
                  <div className="text-terminal-cyan text-sm font-semibold mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-terminal-border rounded text-xs text-terminal-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 opacity-50">
                  <TerminalPrompt path={`~/experience/${exp.company.toLowerCase()}`} />
                  <span className="ml-2 text-terminal-text animate-blink">▋</span>
                </div>
              </div>
            </MacTerminal>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-terminal-cyan mb-4 flex items-center gap-2">
            <span className="text-terminal-yellow">●</span>
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <MacTerminal key={index} title={`${edu.school.toLowerCase().replace(/\s+/g, '-')}.sh`}>
                <div className="p-6">
                  <div className="mb-4">
                    <TerminalPrompt path={`~/education/${edu.school.toLowerCase().replace(/\s+/g, '-')}`} />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-terminal-purple mb-1">{edu.degree}</h3>
                        <div className="text-terminal-text font-semibold">{edu.school}</div>
                        <div className="text-terminal-cyan text-sm mt-1">{edu.focus}</div>
                      </div>
                      <div className="text-terminal-yellow text-sm mt-2 md:mt-0">
                        {edu.period}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-terminal-border">
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                            <span className="text-terminal-green">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 opacity-50">
                    <TerminalPrompt path={`~/education/${edu.school.toLowerCase().replace(/\s+/g, '-')}`} />
                    <span className="ml-2 text-terminal-text animate-blink">▋</span>
                  </div>
                </div>
              </MacTerminal>
            ))}
          </div>
        </div>

        {/* Timeline Visualization */}
        <MacTerminal title="timeline.sh" className="mt-8">
          <div className="p-6">
            <TerminalPrompt path="~/experience/timeline" />

            <div className="mt-4">
              <h3 className="text-lg font-bold text-terminal-cyan mb-4">📅 Career Timeline</h3>

              <div className="relative pl-8 space-y-6">
                {/* Vertical Line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-terminal-border"></div>

                <div className="relative">
                  <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-terminal-green border-2 border-terminal-bg"></div>
                  <div className="text-terminal-green font-semibold">2022 - Present</div>
                  <div className="text-terminal-text">Senior AI Engineer @ TechCorp</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-terminal-blue border-2 border-terminal-bg"></div>
                  <div className="text-terminal-blue font-semibold">2020 - 2022</div>
                  <div className="text-terminal-text">ML Engineer @ StartupAI</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-terminal-cyan border-2 border-terminal-bg"></div>
                  <div className="text-terminal-cyan font-semibold">2019 - 2020</div>
                  <div className="text-terminal-text">AI Research Intern @ AI Research Lab</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-terminal-purple border-2 border-terminal-bg"></div>
                  <div className="text-terminal-purple font-semibold">2018 - 2020</div>
                  <div className="text-terminal-text">Master&apos;s Degree @ Stanford University</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[26px] w-3 h-3 rounded-full bg-terminal-yellow border-2 border-terminal-bg"></div>
                  <div className="text-terminal-yellow font-semibold">2014 - 2018</div>
                  <div className="text-terminal-text">Bachelor&apos;s Degree @ MIT</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
              <TerminalPrompt path="~/experience/timeline" />
              <span className="ml-2 text-terminal-text animate-blink">▋</span>
            </div>
          </div>
        </MacTerminal>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Link
            href="/about"
            className="bg-terminal-border hover:bg-terminal-cyan/20 border border-terminal-cyan rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-cyan font-bold mb-1">→ About</div>
            <div className="text-terminal-text text-sm opacity-70">Learn more</div>
          </Link>
          <Link
            href="/skills"
            className="bg-terminal-border hover:bg-terminal-green/20 border border-terminal-green rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-green font-bold mb-1">→ Skills</div>
            <div className="text-terminal-text text-sm opacity-70">Technical expertise</div>
          </Link>
          <Link
            href="/projects"
            className="bg-terminal-border hover:bg-terminal-blue/20 border border-terminal-blue rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-blue font-bold mb-1">→ Projects</div>
            <div className="text-terminal-text text-sm opacity-70">Portfolio work</div>
          </Link>
          <Link
            href="/contact"
            className="bg-terminal-border hover:bg-terminal-purple/20 border border-terminal-purple rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-purple font-bold mb-1">→ Contact</div>
            <div className="text-terminal-text text-sm opacity-70">Get in touch</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
