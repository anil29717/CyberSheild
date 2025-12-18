import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Server, Database, Cloud, Network, Eye, Zap, Code, Globe, FileCheck, Users } from 'lucide-react';

export const Technologies: React.FC = () => {
  const technologies = [
    { icon: Shield, name: 'Advanced Firewall' },
    { icon: Lock, name: 'Encryption 256-bit' },
    { icon: Server, name: 'Edge Computing' },
    { icon: Database, name: 'Secure Databases' },
    { icon: Cloud, name: 'Cloud Security' },
    { icon: Network, name: 'Network Analysis' },
    { icon: Eye, name: 'Threat Intelligence' },
    { icon: Zap, name: 'AI Detection' },
    { icon: Code, name: 'Code Scanning' },
    { icon: Globe, name: 'Web Application Firewall' },
    { icon: FileCheck, name: 'Compliance Tools' },
    { icon: Users, name: 'Identity Management' },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0b112c] to-[#0d1436]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
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
            <span className="text-cyan-400 text-sm font-semibold">TECHNOLOGIES & TOOLS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Powered by
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            Industry-leading tools and platforms integrated into a comprehensive security ecosystem.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="relative group"
            >
              {/* Glass Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-400/40 transition-all h-24 flex flex-col items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-xl" />
                
                {/* Icon */}
                <div className="relative mb-2">
                  <tech.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>

                {/* Name */}
                <p className="text-[10px] text-gray-400 group-hover:text-white transition-colors leading-tight">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8 uppercase tracking-wider text-sm">
            Trusted Integration Partners
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
            {['Microsoft', 'AWS', 'Google Cloud', 'Cisco', 'Palo Alto', 'CrowdStrike'].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all"
              >
                <span className="text-gray-400 font-semibold hover:text-cyan-300 transition-colors">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};