import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Bot, LayoutDashboard, CreditCard, Link } from 'lucide-react';

const ProjectScope: React.FC = () => {
  const scopes = [
    {
      icon: Monitor,
      title: 'واجهة المستفيد (PWA)',
      description: 'تطبيق ويب تقدمي مع دخول موحد ودعم متعدد اللغات',
      features: ['تسجيل دخول موحد SSO', 'دعم اللغة العربية RTL', 'رفع المرفقات', 'تتبع الطلبات']
    },
    {
      icon: Bot,
      title: 'المساعد الافتراضي',
      description: 'GPT+RAG مع تحليل النوايا والاسترجاع المعزز',
      features: ['تحليل نوايا المستخدم', 'إسناد الإجابات لمصادر رسمية', 'استدعاء وظائف خدمية', 'تصعيد سلس للموظف']
    },
    {
      icon: LayoutDashboard,
      title: 'لوحة المشرف',
      description: 'إدارة التذاكر ومؤشرات الأداء',
      features: ['سجلات العمل', 'لوحات مؤشرات الأداء', 'قاعدة معرفية داخلية', 'إدارة الموظفين']
    },
    {
      icon: CreditCard,
      title: 'المدفوعات والوثائق',
      description: 'دفع إلكتروني وإصدار مستندات رقمية',
      features: ['دفع الرسوم والغرامات', 'إصدار PDF بختم رقمي', 'إيصالات رقمية', 'تحقق من المدفوعات']
    },
    {
      icon: Link,
      title: 'التكاملات',
      description: 'ربط مع الأنظمة الحكومية',
      features: ['الهوية الوطنية', 'السجل المدني', 'بوابات الدفع', 'قنوات الإشعارات']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">نطاق المشروع والوظائف الأساسية</h2>
          <p className="text-xl text-gray-600">منصة متكاملة تغطي جميع جوانب خدمات الأحوال المدنية</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scopes.map((scope, index) => {
            const Icon = scope.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center mb-4 shadow-lg ring-1 ring-slate-600">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scope.title}</h3>
                <p className="text-gray-600 mb-4">{scope.description}</p>
                <ul className="space-y-2">
                  {scope.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectScope;