import React from 'react';
import { motion } from 'motion/react';
import { Building, Globe, Server, Shield } from 'lucide-react';

export const Industries: React.FC = () => {
  const industries = [
    {
      icon: Building,
      title: 'Financial Services',
      description: 'Protect sensitive financial data and transactions with bank-grade encryption and fraud detection systems.',
      features: ['PCI DSS Compliance', 'Transaction Security', 'Anti-Fraud Systems'],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Globe,
      title: 'Healthcare',
      description: 'HIPAA-compliant security solutions that safeguard patient records and medical data across all platforms.',
      features: ['HIPAA Compliance', 'Patient Data Protection', 'Secure Communications'],
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Server,
      title: 'SaaS & Technology',
      description: 'Comprehensive security for cloud applications, APIs, and development infrastructure with DevSecOps integration.',
      features: ['API Security', 'Code Analysis', 'Cloud Infrastructure'],
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Government',
      description: 'Military-grade security solutions meeting federal compliance standards for classified and sensitive operations.',
      features: ['FedRAMP Compliance', 'Zero Trust Architecture', 'Classified Data Protection'],
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="industries" className="relative py-24 bg-[#0d1436]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
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
            <span className="text-cyan-400 text-sm font-semibold">INDUSTRIES WE SECURE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Specialized Security for
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            Tailored cybersecurity solutions that meet the unique compliance and protection requirements
            of your industry.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all">
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-2xl`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-5 rounded-xl bg-gradient-to-br ${industry.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                    <industry.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {industry.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-6 text-cyan-400 font-semibold flex items-center gap-2 group"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Additional Industries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            We also serve: E-commerce, Education, Manufacturing, Energy, Retail, and more
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-cyan-400 hover:border-cyan-400/40 transition-all"
          >
            <span>Discuss Your Industry Needs</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
