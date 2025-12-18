import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  const benefits = [
    'Free security assessment included',
    '24/7 expert support',
    'No long-term contracts',
    'Start protecting in 24 hours',
  ];

  return (
    <section className="relative py-24 bg-[#0d1436] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Decorative Shield */}
            <div className="absolute top-0 right-0 opacity-5">
              <Shield className="w-64 h-64 text-cyan-400" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 0.8 }}
                className="flex justify-center mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur-2xl opacity-50" />
                  <div className="relative bg-[#0b112c]/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/30">
                    <Shield className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
              >
                Ready to Secure Your
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Digital Future?
                </span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
              >
                Join 500+ companies that trust CyberShield to protect their most valuable assets.
                Get started today with a free security assessment.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 mb-10"
              >
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex items-center gap-3 font-bold text-white text-lg">
                    Get Free Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-cyan-500/30 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 font-bold text-white text-lg">
                    View Services
                  </span>
                </motion.a>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-sm text-gray-500"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Trusted by Fortune 500 companies worldwide
                </span>
              </motion.div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-br-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};