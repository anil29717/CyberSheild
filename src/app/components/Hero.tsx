import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Lock, Database, Server, Binary, Code, Settings, Cpu, Activity, Globe, Fingerprint, Eye, Radar } from 'lucide-react';
import { DataStreams } from './DataStreams';

export const Hero: React.FC = () => {
  // Floating 3D Icons Configuration
  const floatingIcons = [
    { Icon: Shield, delay: 0, duration: 20, x: '10%', y: '20%', rotation: 360 },
    { Icon: Lock, delay: 2, duration: 25, x: '80%', y: '15%', rotation: -360 },
    { Icon: Database, delay: 1, duration: 22, x: '15%', y: '70%', rotation: 360 },
    { Icon: Server, delay: 3, duration: 28, x: '85%', y: '65%', rotation: -360 },
    { Icon: Binary, delay: 1.5, duration: 24, x: '25%', y: '40%', rotation: 360 },
    { Icon: Code, delay: 2.5, duration: 26, x: '75%', y: '45%', rotation: -360 },
    { Icon: Settings, delay: 0.5, duration: 23, x: '50%', y: '10%', rotation: 360 },
    { Icon: Cpu, delay: 3.5, duration: 27, x: '90%', y: '85%', rotation: -360 },
    { Icon: Activity, delay: 1, duration: 21, x: '5%', y: '50%', rotation: 360 },
    { Icon: Globe, delay: 2, duration: 25, x: '70%', y: '80%', rotation: -360 },
    { Icon: Fingerprint, delay: 0.8, duration: 24, x: '35%', y: '25%', rotation: 360 },
    { Icon: Eye, delay: 2.8, duration: 26, x: '60%', y: '30%', rotation: -360 },
    { Icon: Radar, delay: 1.2, duration: 23, x: '40%', y: '75%', rotation: 360 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b112c]">
      {/* Floating 3D Cyber Icons Background */}
      <div className="absolute inset-0 z-0 perspective-1000">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              transform: 'translateZ(0)',
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotateX: 0,
              rotateY: 0,
              z: -100,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
              rotateX: [0, 360, 0],
              rotateY: [0, item.rotation, 0],
              z: [-50, 50, -50],
              y: [-20, 20, -20],
              x: [-15, 15, -15],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 blur-xl opacity-50"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: item.duration / 2,
                  repeat: Infinity,
                  delay: item.delay,
                }}
              >
                <item.Icon className="w-16 h-16 text-cyan-400" />
              </motion.div>
              
              {/* Main Icon with Metallic Effect */}
              <div className="relative bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl" />
                <motion.div
                  animate={{
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: item.duration / 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <item.Icon className="w-12 h-12 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Additional Glow Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/20 rounded-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: item.delay,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />

      {/* Animated Scan Lines */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
          backgroundSize: '100% 4px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '0px 100px'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Data Streams */}
      <DataStreams />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Shield Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-50"
              />
              <div className="relative bg-[#0b112c]/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/30">
                <Shield className="w-20 h-20 text-cyan-400" />
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl mb-6 text-white"
          >
            Protect Your Digital
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fortress with CyberShield
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Enterprise-grade cybersecurity solutions powered by AI and advanced threat detection.
            Secure your business from evolving digital threats 24/7.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-center gap-2 font-semibold text-white text-lg">
                Get Protected Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-cyan-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-center gap-2 font-semibold text-white text-lg">
                <Lock className="w-5 h-5" />
                Explore Services
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>SOC 2 Compliant</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b112c] to-transparent z-10" />
    </section>
  );
};
