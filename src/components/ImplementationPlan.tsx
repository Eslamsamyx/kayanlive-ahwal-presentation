import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Rocket, Target, TrendingUp } from 'lucide-react';

const ImplementationPlan: React.FC = () => {
  const phases = [
    {
      id: 0,
      title: 'المرحلة 0: التحليل',
      duration: 'أسبوعان',
      status: 'pending',
      icon: Target,
      color: 'bg-slate-600',
      ring: 'ring-slate-500',
      tasks: [
        'مراجعة الوثائق والمتطلبات',
        'جرد الخدمات المراد تقديمها',
        'تقييم جاهزية التكامل',
        'اعتماد سياسات الحوكمة'
      ]
    },
    {
      id: 1,
      title: 'المرحلة 1: MVP',
      duration: '8-10 أسابيع',
      status: 'pending',
      icon: Rocket,
      color: 'bg-blue-900',
      ring: 'ring-blue-800',
      tasks: [
        'منصة إلكترونية + 3 خدمات أولوية',
        'مساعد ذكي مع RAG مصغر',
        'تكامل الهوية والدفع',
        'لوحة موظف الوكالة الأساسية'
      ]
    },
    {
      id: 2,
      title: 'المرحلة 2: التوسع',
      duration: '6-8 أسابيع',
      status: 'pending',
      icon: TrendingUp,
      color: 'bg-amber-600',
      ring: 'ring-amber-500',
      tasks: [
        'إضافة 7-10 خدمات إضافية من خدمات الأحوال المدنية (استعلامات، شهادات، طلبات تحديث)',
        'تطوير نظام تصعيد ذكي للموظفين مع واجهة بصرية تفاعلية لإدارة الحالات المعقدة',
        'اختبارات تحميل موسعة لضمان استيعاب آلاف المستخدمين المتزامنين',
        'تحسين جودة الردود من خلال تدريب النماذج على بيانات الأحوال المدنية المحدثة'
      ]
    },
    {
      id: 3,
      title: 'المرحلة 3: التحسين المستمر',
      duration: 'مستمرة',
      status: 'pending',
      icon: CheckCircle,
      color: 'bg-yellow-600',
      ring: 'ring-yellow-500',
      tasks: [
        'زيادة قاعدة البيانات بمعلومات محدثة عن القوانين والإجراءات الجديدة',
        'تحسين نماذج الذكاء الاصطناعي بناءً على تفاعلات المستخدمين والملاحظات',
        'مراجعات دورية شهرية لقياس الأداء ورضا المستفيدين وتحديد نقاط التحسين',
        'تحديثات مستمرة للنظام واستضافة تقنيات ذكاء اصطناعي جديدة لتعزيز الخدمة'
      ]
    }
  ];

  const timeline = [
    { month: 'الشهر 1', phases: [0], color: 'bg-slate-600' },
    { month: 'الشهر 2-3', phases: [1], color: 'bg-blue-900' },
    { month: 'الشهر 4-5', phases: [1, 2], color: 'bg-amber-600' },
    { month: 'الشهر 6+', phases: [2, 3], color: 'bg-yellow-600' }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">خطة التنفيذ المرحلية</h2>
          <p className="text-xl text-gray-600">مسار واضح من التحليل إلى الإطلاق والتحسين المستمر</p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            {timeline.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`h-2 ${period.color} rounded-full w-24 md:w-32 mb-2`}></div>
                <p className="text-sm font-medium text-gray-700">{period.month}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 ${phase.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg ring-1 ${phase.ring}`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-gray-600">{idx + 1}</span>
                        </div>
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlan;