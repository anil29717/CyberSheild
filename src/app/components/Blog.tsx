import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Shield, Lock, Eye } from 'lucide-react';

export const Blog: React.FC = () => {
  const posts = [
    {
      icon: Shield,
      category: 'Threat Intelligence',
      title: 'Top 10 Cybersecurity Threats in 2025',
      excerpt: 'Stay ahead of emerging threats with our comprehensive analysis of the latest cyber attack vectors and mitigation strategies.',
      author: 'Dr. Alex Martinez',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Lock,
      category: 'Best Practices',
      title: 'Zero Trust Architecture: A Complete Guide',
      excerpt: 'Learn how to implement zero-trust security principles to protect your organization from insider threats and lateral movement.',
      author: 'Sarah Johnson',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Eye,
      category: 'Compliance',
      title: 'GDPR Compliance: What You Need to Know',
      excerpt: 'Navigate the complexities of data protection regulations with our practical guide to GDPR compliance for businesses.',
      author: 'Michael Chen',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section id="blog" className="relative py-24 bg-gradient-to-b from-[#0b112c] to-[#0d1436]">
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
            <span className="text-cyan-400 text-sm font-semibold">BLOG & INSIGHTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Latest Cybersecurity
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Insights & Trends
            </span>
          </h2>
          
          <p className="text-lg text-gray-400">
            Stay informed with expert analysis, best practices, and the latest developments
            in cybersecurity.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all">
                {/* Icon Header */}
                <div className={`relative h-48 bg-gradient-to-br ${post.color} bg-opacity-10 flex items-center justify-center overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-10`} />
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <post.icon className="w-20 h-20 text-cyan-400" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
                    <span className="text-cyan-400 text-xs font-semibold uppercase">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-cyan-400 font-semibold group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity pointer-events-none`} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white hover:border-cyan-400/40 transition-all"
          >
            <span className="font-semibold">View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
