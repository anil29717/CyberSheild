import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, Network, Database, Zap, FileCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'AI-powered real-time threat detection with automated incident response to neutralize attacks before they impact your business.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Lock,
      title: 'Endpoint Security',
      description: 'Comprehensive endpoint protection for all devices with advanced malware detection and zero-trust architecture.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security operations center monitoring your infrastructure with expert analysts and automated threat intelligence.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure your servers, cloud environments, and network infrastructure with military-grade encryption and access controls.',
      color: 'from-cyan-400 to-teal-500',
    },
    {
      icon: Network,
      title: 'Network Protection',
      description: 'Advanced firewall solutions, intrusion prevention systems, and network segmentation to defend against external threats.',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Database,
      title: 'Data Loss Prevention',
      description: 'Protect sensitive data with encryption, access controls, and automated backup systems that ensure business continuity.',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid response team available 24/7 to contain, investigate, and remediate security incidents with minimal downtime.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with GDPR, HIPAA, SOC 2, and other standards through continuous monitoring and reporting.',
      color: 'from-blue-600 to-purple-600',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0d1436]">
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
            <span className="text-cyan-400 text-sm font-semibold">OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Comprehensive Security
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solutions for Every Need
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            From threat detection to compliance management, our full-stack security services
            protect your business at every layer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-2xl`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-4 text-cyan-400 text-sm font-semibold flex items-center gap-2"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
