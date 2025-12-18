import React from 'react';
import { motion } from 'motion/react';

export const DataStreams: React.FC = () => {
  // Create multiple data streams with binary code
  const streams = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${(i * 7) % 100}%`,
    delay: i * 0.3,
    duration: 8 + (i % 5) * 2,
  }));

  const binaryChars = ['0', '1', '01', '10', '001', '110', '101', '010'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 w-px"
          style={{ left: stream.left }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{
            y: '200%',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Binary code characters falling */}
          <div className="flex flex-col gap-4 text-xs font-mono text-cyan-400/40">
            {binaryChars.map((char, idx) => (
              <motion.span
                key={idx}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 1,
                  delay: idx * 0.1,
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Horizontal data streams */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{
            top: `${20 + i * 20}%`,
            width: '200px',
          }}
          initial={{ x: '-200px', opacity: 0 }}
          animate={{
            x: 'calc(100vw + 200px)',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Pulsing connection nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/60"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + (i % 3) * 25}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            boxShadow: [
              '0 0 5px rgba(34, 211, 238, 0.3)',
              '0 0 20px rgba(34, 211, 238, 0.8)',
              '0 0 5px rgba(34, 211, 238, 0.3)',
            ],
          }}
          transition={{
            duration: 2 + (i % 3),
            delay: i * 0.4,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};
