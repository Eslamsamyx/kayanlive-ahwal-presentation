import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Key, Lock, ShieldCheck, FileText, ShieldAlert } from 'lucide-react';
import Tooltip from './Tooltip';

const SecurityCompliance: React.FC = () => {
  const securityMeasures: Array<{
    icon: any;
    title: string;
    description: string;
    details: (string | React.ReactElement)[];
  }> = [
    {
      icon: Shield,
      title: 'تصنيف البيانات',
      description: 'عام، داخلي، سري، سري للغاية',
      details: ['سياسات تخزين منفصلة', 'صلاحيات وصول محددة', 'تشفير حسب المستوى']
    },
    {
      icon: Key,
      title: 'الهوية والوصول',
      description: 'تحقق متعدد ومراجعات دورية',
      details: ['تحقق بخطوتين', 'مراجعات ربع سنوية', 'إدارة الصلاحيات']
    },
    {
      icon: Lock,
      title: 'حماية الخصوصية',
      description: 'حذف البيانات الشخصية وموافقات صريحة',
      details: [<Tooltip text="PII Redaction" description="حذف أو إخفاء المعلومات الشخصية التعريفية مثل الأرقام الوطنية والأسماء الكاملة لحماية خصوصية المستخدمين" />, 'موافقات المستخدم', 'حق المحو']
    },
    {
      icon: ShieldCheck,
      title: 'التشفير',
      description: 'KMS/HSM مع تدوير منتظم',
      details: ['تشفير أثناء النقل', 'تشفير أثناء التخزين', 'إدارة المفاتيح']
    },
    {
      icon: FileText,
      title: 'السجلات والتتبع',
      description: 'تسجيل شامل لكل العمليات',
      details: ['سجل الأحداث', 'تتبع التعديلات', 'تحليل السلوك']
    },
    {
      icon: ShieldAlert,
      title: 'أمن التطبيقات',
      description: 'اختبارات اختراق ومعالجة فورية',
      details: ['OWASP Top 10', 'مسح الثغرات', 'تصحيحات أمنية']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">أمن المعلومات والامتثال</h2>
          <p className="text-xl text-gray-600">حماية شاملة وامتثال لمعايير الأمان الحكومية</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityMeasures.map((measure, index) => {
            const Icon = measure.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-1 ring-yellow-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{measure.title}</h3>
                    <p className="text-sm text-gray-600">{measure.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {measure.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {typeof detail === 'string' ? <span>{detail}</span> : detail}
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

export default SecurityCompliance;