import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileCheck, Award, CheckCircle } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    { icon: Shield, label: 'ISO 27001 Certified', color: 'from-cyan-400 to-blue-500' },
    { icon: Lock, label: 'SOC 2 Type II', color: 'from-blue-400 to-purple-500' },
    { icon: Eye, label: 'GDPR Compliant', color: 'from-purple-400 to-pink-500' },
    { icon: FileCheck, label: 'PCI DSS Level 1', color: 'from-cyan-400 to-teal-500' },
    { icon: Award, label: 'NIST Framework', color: 'from-blue-500 to-cyan-400' },
    { icon: CheckCircle, label: 'HIPAA Compliant', color: 'from-purple-500 to-blue-500' },
  ];

  return (
    <section className="relative py-16 bg-[#0b112c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="relative px-6 py-3 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all">
                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-lg`} />
                  
                  {/* Label */}
                  <p className="text-sm text-gray-300 group-hover:text-cyan-300 transition-colors relative z-10 whitespace-nowrap">
                    {badge.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};