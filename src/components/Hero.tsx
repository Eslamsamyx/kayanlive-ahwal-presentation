import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Globe2, Headphones, Building2 } from 'lucide-react';
import AhwalLogo from '../assets/Ahwal-logo.png';
import Tooltip from './Tooltip';

const Hero: React.FC = () => {
  const features = [
    { icon: Globe2, title: 'متعدد اللغات', color: 'bg-blue-900', ring: 'ring-blue-800' },
    { icon: Bot, title: 'ذكاء اصطناعي', color: 'bg-amber-500', ring: 'ring-amber-400' },
    { icon: Headphones, title: 'دعم فوري', color: 'bg-slate-600', ring: 'ring-slate-500' },
    { icon: Building2, title: 'إدارة مركزية', color: 'bg-yellow-600', ring: 'ring-yellow-500' }
  ];

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-2"
          >
            <img src={AhwalLogo} alt="Ahwal Logo" className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto object-contain drop-shadow-2xl" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              المساعد الذكي
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              لخدمات الأحوال المدنية
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            منصة رقمية متطورة تستخدم أحدث تقنيات الذكاء الاصطناعي
            لتقديم خدمات الأحوال المدنية بكفاءة وسرعة فائقة
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-3 mx-auto shadow-lg ring-1 ${feature.ring}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">{feature.title}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContent}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full font-bold text-lg shadow-xl transition-all duration-300"
            >
              استكشف المشروع
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;