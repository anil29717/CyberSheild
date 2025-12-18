import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      company: 'Global Bank Corp',
      industry: 'Financial Services',
      challenge: 'Preventing sophisticated phishing attacks targeting high-value accounts',
      solution: 'AI-powered threat detection with behavioral analysis',
      results: ['95% reduction in successful attacks', '99.8% detection accuracy', '$12M saved annually'],
      icon: Shield,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      company: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance and ransomware protection for patient data',
      solution: 'Zero-trust architecture with encrypted data storage',
      results: ['100% HIPAA compliant', 'Zero ransomware incidents', '50% faster incident response'],
      icon: Zap,
      color: 'from-blue-400 to-purple-500',
    },
    {
      company: 'TechFlow SaaS',
      industry: 'Technology',
      challenge: 'Securing distributed cloud infrastructure and APIs',
      solution: 'Comprehensive cloud security with API gateway protection',
      results: ['Zero data breaches', '40% cost reduction', '99.99% uptime maintained'],
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="cases" className="relative py-24 bg-gradient-to-b from-[#0d1436] to-[#0b112c]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-semibold">SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Real Results for
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            See how we've helped organizations across industries achieve comprehensive security
            and protect their critical assets.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all overflow-hidden">
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                
                {/* Icon Badge */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${caseStudy.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                    <caseStudy.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                {/* Company & Industry */}
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {caseStudy.company}
                  </h3>
                  <span className="text-sm text-cyan-400 font-semibold">
                    {caseStudy.industry}
                  </span>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Challenge
                  </h4>
                  <p className="text-gray-300">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Solution
                  </h4>
                  <p className="text-gray-300">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Results
                  </h4>
                  <div className="space-y-2">
                    {caseStudy.results.map((result) => (
                      <div key={result} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read More Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-cyan-400 font-semibold group/link"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.button>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Start Your Success Story</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
