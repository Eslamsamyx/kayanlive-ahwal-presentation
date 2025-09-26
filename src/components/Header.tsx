import React from 'react';
import { motion } from 'framer-motion';
import AhwalLogo from '../assets/Ahwal-logo.png';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-xl z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4">
            <img src={AhwalLogo} alt="Ahwal Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <div className="text-center">
              <h1 className="text-xl font-bold">
                وكالة وزارة الداخلية للأحوال المدنية
              </h1>
              <p className="text-sm opacity-90">
                المساعد الذكي المدعوم بالذكاء الاصطناعي
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;