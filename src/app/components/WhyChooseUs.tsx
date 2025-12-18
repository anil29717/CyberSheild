import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Globe, Zap } from 'lucide-react';

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 2, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref}>
      <span>{count}</span>
      <span>{suffix}</span>
    </div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const stats = [
    {
      icon: Shield,
      value: 99.9,
      suffix: '%',
      label: 'Threat Detection Rate',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Protected Companies',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Globe,
      value: 50,
      suffix: '+',
      label: 'Countries Served',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Zap,
      value: 2,
      suffix: 'min',
      label: 'Average Response Time',
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  const benefits = [
    {
      title: 'AI-Powered Protection',
      description: 'Machine learning algorithms that adapt to new threats in real-time',
    },
    {
      title: 'Expert Security Team',
      description: 'Certified professionals with decades of combined experience',
    },
    {
      title: 'Proactive Monitoring',
      description: '24/7/365 SOC monitoring with rapid incident response',
    },
    {
      title: 'Compliance Guaranteed',
      description: 'Meet all regulatory requirements with continuous compliance checks',
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Never trust, always verify with comprehensive access controls',
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Enterprise security at prices that scale with your business',
    },
  ];

  return (
    <section className="relative py-24 bg-[#0b112c]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
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
            <span className="text-cyan-400 text-sm font-semibold">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Trusted by Industry Leaders
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-400/40 transition-all">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-2xl`} />
                
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-5xl font-bold text-white mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all">
                {/* Check Icon */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
