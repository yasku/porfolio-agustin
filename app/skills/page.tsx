'use client';

import Link from 'next/link';
import MacTerminal from '@/components/MacTerminal';
import TerminalPrompt from '@/components/TerminalPrompt';

export default function SkillsPage() {
  const skills = {
    'AI/ML': [
      { name: 'TensorFlow', level: 95, color: 'bg-terminal-green' },
      { name: 'PyTorch', level: 90, color: 'bg-terminal-green' },
      { name: 'Keras', level: 85, color: 'bg-terminal-green' },
      { name: 'Scikit-learn', level: 90, color: 'bg-terminal-green' },
      { name: 'Neural Networks', level: 95, color: 'bg-terminal-green' },
      { name: 'Deep Learning', level: 90, color: 'bg-terminal-green' },
      { name: 'NLP', level: 88, color: 'bg-terminal-green' },
      { name: 'Computer Vision', level: 85, color: 'bg-terminal-green' },
    ],
    'Programming': [
      { name: 'Python', level: 95, color: 'bg-terminal-blue' },
      { name: 'JavaScript/TypeScript', level: 88, color: 'bg-terminal-blue' },
      { name: 'SQL', level: 80, color: 'bg-terminal-blue' },
      { name: 'C++', level: 75, color: 'bg-terminal-blue' },
      { name: 'Java', level: 70, color: 'bg-terminal-blue' },
    ],
    'Frameworks & Tools': [
      { name: 'React/Next.js', level: 85, color: 'bg-terminal-cyan' },
      { name: 'FastAPI', level: 90, color: 'bg-terminal-cyan' },
      { name: 'Django', level: 85, color: 'bg-terminal-cyan' },
      { name: 'Flask', level: 88, color: 'bg-terminal-cyan' },
      { name: 'Docker', level: 85, color: 'bg-terminal-cyan' },
      { name: 'Kubernetes', level: 75, color: 'bg-terminal-cyan' },
    ],
    'Cloud & Infrastructure': [
      { name: 'AWS', level: 85, color: 'bg-terminal-yellow' },
      { name: 'GCP', level: 80, color: 'bg-terminal-yellow' },
      { name: 'Azure', level: 75, color: 'bg-terminal-yellow' },
      { name: 'CI/CD', level: 85, color: 'bg-terminal-yellow' },
    ],
    'Data Science': [
      { name: 'Pandas', level: 90, color: 'bg-terminal-purple' },
      { name: 'NumPy', level: 90, color: 'bg-terminal-purple' },
      { name: 'Matplotlib', level: 85, color: 'bg-terminal-purple' },
      { name: 'Jupyter', level: 88, color: 'bg-terminal-purple' },
    ],
  };

  return (
    <div className="min-h-screen bg-terminal-bg">
      {/* Header */}
      <header className="border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-terminal-green font-bold text-lg hover:text-terminal-cyan transition-colors">
            ← Back to Home
          </Link>
          <div className="text-terminal-text text-sm">skills.sh</div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-terminal-cyan mb-2 font-mono">$ ls -la ~/skills/</h1>
          <p className="text-terminal-text opacity-70">Technical skills and expertise</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <MacTerminal key={category} title={`${category.toLowerCase().replace(/\s+/g, '-')}.sh`}>
              <div className="p-6">
                <div className="mb-4">
                  <TerminalPrompt path={`~/skills/${category.toLowerCase().replace(/\s+/g, '-')}`} />
                </div>

                <h2 className="text-xl font-bold text-terminal-cyan mb-4 flex items-center gap-2">
                  <span className="text-terminal-green">●</span>
                  {category}
                </h2>

                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-terminal-text font-medium">{skill.name}</span>
                        <span className="text-terminal-green text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-terminal-border h-2 rounded-full overflow-hidden">
                        <div
                          className={`${skill.color} h-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
                  <TerminalPrompt path={`~/skills/${category.toLowerCase().replace(/\s+/g, '-')}`} />
                  <span className="ml-2 text-terminal-text animate-blink">▋</span>
                </div>
              </div>
            </MacTerminal>
          ))}
        </div>

        {/* Additional Skills Section */}
        <MacTerminal title="additional-tools.sh" className="mt-6">
          <div className="p-6">
            <TerminalPrompt path="~/skills/tools" />

            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-bold text-terminal-cyan mb-3">🛠️ Additional Tools & Technologies</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'Git & GitHub',
                  'MLflow',
                  'Weights & Biases',
                  'Hugging Face',
                  'OpenAI API',
                  'LangChain',
                  'Vector DBs',
                  'Redis',
                  'PostgreSQL',
                  'MongoDB',
                  'Elasticsearch',
                  'Grafana',
                  'Prometheus',
                  'Nginx',
                  'REST APIs',
                  'GraphQL',
                ].map((tool) => (
                  <div
                    key={tool}
                    className="bg-terminal-border hover:bg-terminal-green/20 border border-terminal-border hover:border-terminal-green rounded px-3 py-2 text-sm text-terminal-text transition-all"
                  >
                    <span className="text-terminal-green">✓</span> {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
              <TerminalPrompt path="~/skills/tools" />
              <span className="ml-2 text-terminal-text animate-blink">▋</span>
            </div>
          </div>
        </MacTerminal>

        {/* Certifications Section */}
        <MacTerminal title="certifications.sh">
          <div className="p-6">
            <TerminalPrompt path="~/skills/certifications" />

            <div className="mt-4">
              <h3 className="text-lg font-bold text-terminal-cyan mb-4">🏆 Certifications & Achievements</h3>

              <div className="space-y-3">
                <div className="bg-terminal-border/30 rounded p-4 border-l-4 border-terminal-green">
                  <div className="font-bold text-terminal-green mb-1">AWS Certified Machine Learning - Specialty</div>
                  <div className="text-sm text-terminal-text opacity-70">Amazon Web Services • 2023</div>
                </div>
                <div className="bg-terminal-border/30 rounded p-4 border-l-4 border-terminal-blue">
                  <div className="font-bold text-terminal-blue mb-1">TensorFlow Developer Certificate</div>
                  <div className="text-sm text-terminal-text opacity-70">Google • 2022</div>
                </div>
                <div className="bg-terminal-border/30 rounded p-4 border-l-4 border-terminal-yellow">
                  <div className="font-bold text-terminal-yellow mb-1">Deep Learning Specialization</div>
                  <div className="text-sm text-terminal-text opacity-70">DeepLearning.AI • 2021</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
              <TerminalPrompt path="~/skills/certifications" />
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
            href="/projects"
            className="bg-terminal-border hover:bg-terminal-blue/20 border border-terminal-blue rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-blue font-bold mb-1">→ Projects</div>
            <div className="text-terminal-text text-sm opacity-70">Portfolio work</div>
          </Link>
          <Link
            href="/experience"
            className="bg-terminal-border hover:bg-terminal-yellow/20 border border-terminal-yellow rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-yellow font-bold mb-1">→ Experience</div>
            <div className="text-terminal-text text-sm opacity-70">Work history</div>
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
