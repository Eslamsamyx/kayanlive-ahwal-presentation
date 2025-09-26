import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Cpu, Users } from 'lucide-react';
import AhwalLogo from '../assets/Ahwal-logo.png';
import Tooltip from './Tooltip';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo and title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={AhwalLogo} alt="Ahwal Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
            <h3 className="text-2xl font-bold">وكالة وزارة الداخلية للأحوال المدنية</h3>
          </div>

          {/* Tagline */}
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            نحو تحول رقمي شامل في خدمات الأحوال المدنية بالذكاء الاصطناعي
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-300"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span>مدعوم بالذكاء الاصطناعي</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-300"
            >
              <Cpu className="w-5 h-5 text-blue-400" />
              <span>تقنية <Tooltip text="GPT+RAG" description="دمج نموذج اللغة مع استرجاع المعلومات للدقة والموثوقية" /></span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-300"
            >
              <Users className="w-5 h-5 text-green-400" />
              <span>خدمة على مدار الساعة</span>
            </motion.div>
          </div>

          {/* Project version */}
          <div className="text-sm text-gray-400 mb-8">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span>الإصدار v1.0</span>
            </div>
            <div className="text-center">
              <div>٢٥ سبتمبر ٢٠٢٥م</div>
              <div>٣ ربيع الآخر ١٤٤٧هـ</div>
            </div>
          </div>
        </motion.div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-400">
            جميع الحقوق محفوظة © ٢٠٢٥ وكالة وزارة الداخلية للأحوال المدنية
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;