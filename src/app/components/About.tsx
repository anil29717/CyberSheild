import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Zap, Users } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '15+ Years Experience',
      description: 'Protecting businesses worldwide',
    },
    {
      icon: Target,
      title: '99.9% Protection Rate',
      description: 'Industry-leading security',
    },
    {
      icon: Zap,
      title: 'Real-time Response',
      description: '24/7 threat monitoring',
    },
    {
      icon: Users,
      title: '500+ Companies',
      description: 'Trust our solutions',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#0b112c] to-[#0d1436]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-semibold">ABOUT CYBERSHIELD</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Leading the Future of
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Cybersecurity Excellence
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              CyberShield is a cutting-edge cybersecurity firm dedicated to protecting organizations
              from sophisticated digital threats. With advanced AI-powered solutions and a team of
              elite security experts, we deliver comprehensive protection that evolves with the
              threat landscape.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our mission is to make enterprise-grade security accessible to businesses of all sizes,
              ensuring your digital assets remain protected 24/7 with proactive threat detection,
              rapid incident response, and continuous security monitoring.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glassmorphic Container */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all">
              {/* SVG Illustration */}
              <div className="relative aspect-square">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Central Shield */}
                  <motion.g
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                  >
                    <path
                      d="M200 80 L240 90 L260 110 L270 150 L260 230 L240 270 L200 290 L160 270 L140 230 L130 150 L140 110 L160 90 Z"
                      fill="url(#shieldGradient)"
                      opacity="0.2"
                      stroke="url(#shieldStroke)"
                      strokeWidth="2"
                    />
                    <path
                      d="M200 100 L230 108 L245 125 L252 155 L245 220 L230 250 L200 265 L170 250 L155 220 L148 155 L155 125 L170 108 Z"
                      fill="none"
                      stroke="url(#shieldStroke)"
                      strokeWidth="3"
                    />
                  </motion.g>

                  {/* Lock Icon */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <rect x="180" y="170" width="40" height="50" rx="5" fill="url(#lockGradient)" />
                    <path d="M185 170 L185 155 Q185 140 200 140 Q215 140 215 155 L215 170" fill="none" stroke="url(#shieldStroke)" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="200" cy="195" r="5" fill="#0b112c" />
                  </motion.g>

                  {/* Orbiting Nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 200 + Math.cos(rad) * 120;
                    const y = 200 + Math.sin(rad) * 120;
                    return (
                      <motion.g
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <circle cx={x} cy={y} r="8" fill="url(#nodeGradient)" />
                        <circle cx={x} cy={y} r="12" fill="none" stroke="url(#shieldStroke)" strokeWidth="1" opacity="0.5" />
                        <motion.line
                          x1="200" y1="200" x2={x} y2={y}
                          stroke="url(#shieldStroke)"
                          strokeWidth="1"
                          opacity="0.3"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                        />
                      </motion.g>
                    );
                  })}

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                    </linearGradient>
                    <radialGradient id="nodeGradient">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-3xl -z-10" />
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
