import React from 'react';
import { motion } from 'motion/react';
import { Search, Shield, CheckCircle, Zap } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Assess & Analyze',
      description: 'Comprehensive security audit to identify vulnerabilities and assess your current security posture.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Shield,
      number: '02',
      title: 'Design & Deploy',
      description: 'Custom security architecture designed for your needs with seamless implementation and minimal disruption.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Zap,
      number: '03',
      title: 'Monitor & Respond',
      description: '24/7 real-time monitoring with rapid incident response and continuous threat intelligence updates.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Optimize & Evolve',
      description: 'Continuous improvement with regular security updates, compliance audits, and strategy optimization.',
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0d1436] to-[#0b112c]">
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
            <span className="text-cyan-400 text-sm font-semibold">HOW WE WORK</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Our Security
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Implementation Process
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            A proven methodology that delivers enterprise-grade security through strategic planning,
            seamless deployment, and continuous optimization.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all group"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-white shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-xl`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connection Node */}
                <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0b112c] z-20" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white text-lg overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Start Your Security Journey</span>
            <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
