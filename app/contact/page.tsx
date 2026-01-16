'use client';

import { useState } from 'react';
import Link from 'next/link';
import MacTerminal from '@/components/MacTerminal';
import TerminalPrompt from '@/components/TerminalPrompt';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'agustin.yaskuloski@email.com',
      link: 'mailto:agustin.yaskuloski@email.com',
      color: 'terminal-green',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/agustinyaskuloski',
      link: 'https://github.com/agustinyaskuloski',
      color: 'terminal-blue',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/agustinyaskuloski',
      link: 'https://linkedin.com/in/agustinyaskuloski',
      color: 'terminal-cyan',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@ayaskuloski',
      link: 'https://twitter.com/ayaskuloski',
      color: 'terminal-purple',
    },
  ];

  return (
    <div className="min-h-screen bg-terminal-bg">
      {/* Header */}
      <header className="border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-terminal-green font-bold text-lg hover:text-terminal-cyan transition-colors">
            ← Back to Home
          </Link>
          <div className="text-terminal-text text-sm">contact.sh</div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-terminal-cyan mb-2 font-mono">$ ./contact.sh</h1>
          <p className="text-terminal-text opacity-70">Let&apos;s connect and collaborate</p>
        </div>

        {/* Contact Methods */}
        <MacTerminal title="contact-info.sh">
          <div className="p-6">
            <TerminalPrompt path="~/contact" />

            <div className="mt-4">
              <h2 className="text-xl font-bold text-terminal-cyan mb-4">📬 Get In Touch</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-terminal-border hover:bg-${method.color}/20 border border-terminal-border hover:border-${method.color} rounded-lg p-4 transition-all hover:scale-105 group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div className="flex-1">
                        <div className={`text-${method.color} font-semibold mb-1 group-hover:underline`}>
                          {method.label}
                        </div>
                        <div className="text-terminal-text text-sm opacity-70 break-all">
                          {method.value}
                        </div>
                      </div>
                      <span className="text-terminal-text opacity-50">→</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-black/30 rounded p-4 text-terminal-text text-sm">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-terminal-green">💡</span>
                  <div>
                    <div className="font-semibold text-terminal-cyan mb-1">Response Time</div>
                    <div className="opacity-80">
                      I typically respond to emails within 24-48 hours. For urgent matters,
                      feel free to reach out on LinkedIn.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
              <TerminalPrompt path="~/contact" />
              <span className="ml-2 text-terminal-text animate-blink">▋</span>
            </div>
          </div>
        </MacTerminal>

        {/* Contact Form */}
        <MacTerminal title="send-message.sh">
          <div className="p-6">
            <TerminalPrompt path="~/contact/message" />

            <div className="mt-4">
              <h2 className="text-xl font-bold text-terminal-cyan mb-4">✉️ Send a Message</h2>

              {submitted ? (
                <div className="bg-terminal-green/20 border border-terminal-green rounded p-6 text-center">
                  <div className="text-terminal-green text-4xl mb-3">✓</div>
                  <div className="text-terminal-green font-bold mb-2">Message Sent Successfully!</div>
                  <div className="text-terminal-text text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-terminal-cyan text-sm font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-terminal-border border border-terminal-border focus:border-terminal-green text-terminal-text px-4 py-2 rounded outline-none transition-colors font-mono"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-terminal-cyan text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-terminal-border border border-terminal-border focus:border-terminal-green text-terminal-text px-4 py-2 rounded outline-none transition-colors font-mono"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-terminal-cyan text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-terminal-border border border-terminal-border focus:border-terminal-green text-terminal-text px-4 py-2 rounded outline-none transition-colors font-mono"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-cyan text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-terminal-border border border-terminal-border focus:border-terminal-green text-terminal-text px-4 py-2 rounded outline-none transition-colors font-mono resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-terminal-green hover:bg-terminal-green/80 text-terminal-bg font-bold py-3 rounded transition-all hover:scale-105"
                  >
                    $ send_message --now
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
              <TerminalPrompt path="~/contact/message" />
              <span className="ml-2 text-terminal-text animate-blink">▋</span>
            </div>
          </div>
        </MacTerminal>

        {/* Availability */}
        <MacTerminal title="availability.sh">
          <div className="p-6">
            <TerminalPrompt path="~/contact/availability" />

            <div className="mt-4">
              <h3 className="text-lg font-bold text-terminal-cyan mb-4">🕒 Availability</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-terminal-border/30 rounded p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-terminal-green text-xl">●</span>
                    <div>
                      <div className="text-terminal-text font-semibold">Open to Opportunities</div>
                      <div className="text-terminal-text text-sm opacity-70">
                        Full-time, Contract, Consulting
                      </div>
                    </div>
                  </div>
                  <span className="text-terminal-green text-sm font-bold">Available</span>
                </div>

                <div className="flex items-center justify-between bg-terminal-border/30 rounded p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-terminal-blue text-xl">●</span>
                    <div>
                      <div className="text-terminal-text font-semibold">Speaking Engagements</div>
                      <div className="text-terminal-text text-sm opacity-70">
                        Conferences, Workshops, Podcasts
                      </div>
                    </div>
                  </div>
                  <span className="text-terminal-blue text-sm font-bold">Open</span>
                </div>

                <div className="flex items-center justify-between bg-terminal-border/30 rounded p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-terminal-yellow text-xl">●</span>
                    <div>
                      <div className="text-terminal-text font-semibold">Mentorship</div>
                      <div className="text-terminal-text text-sm opacity-70">
                        Limited slots for aspiring AI developers
                      </div>
                    </div>
                  </div>
                  <span className="text-terminal-yellow text-sm font-bold">Limited</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
              <TerminalPrompt path="~/contact/availability" />
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
            href="/experience"
            className="bg-terminal-border hover:bg-terminal-yellow/20 border border-terminal-yellow rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-yellow font-bold mb-1">→ Experience</div>
            <div className="text-terminal-text text-sm opacity-70">Work history</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
