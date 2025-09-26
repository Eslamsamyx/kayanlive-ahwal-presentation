import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Clock, Shield, Lightbulb, Zap, Award, CheckCircle2 } from 'lucide-react';

const BusinessObjectives: React.FC = () => {
  const objectives = [
    {
      icon: Target,
      title: 'الغاية الاستراتيجية',
      description: 'تطوير منصة رقمية ذكية لخدمات الأحوال المدنية',
      details: [
        'تسهيل الوصول للخدمات الحكومية إلكترونياً',
        'تحقيق التحول الرقمي الشامل للوكالة',
        'رفع مستوى الخدمات المقدمة للمواطنين والمقيمين'
      ],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'المستفيدون المستهدفون',
      description: 'جميع فئات المجتمع من مواطنين ومقيمين وزوار',
      details: [
        'المواطنون السعوديون',
        'المقيمون في المملكة',
        'الزوار والسائحون',
        'موظفو وكالة الأحوال المدنية'
      ],
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'النتائج المتوقعة',
      description: 'تحسين جودة الخدمات وزيادة كفاءة العمليات',
      details: [
        'تقليل أوقات انتظار المستفيدين',
        'زيادة معدل الرضا لأكثر من 95%',
        'تحسين الكفاءة التشغيلية للوكالة',
        'توفير خدمة على مدار الساعة'
      ],
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50'
    }
  ];

  const keyBenefits = [
    {
      icon: Clock,
      title: 'الوقت',
      value: '90%',
      description: 'توفير في الوقت',
      subtitle: 'من دقائق إلى ثوانٍ'
    },
    {
      icon: Shield,
      title: 'الأمان',
      value: '99.9%',
      description: 'موثوقية النظام',
      subtitle: 'حماية شاملة للبيانات'
    },
    {
      icon: Zap,
      title: 'السرعة',
      value: '< 3',
      description: 'ثانية استجابة',
      subtitle: 'أداء فائق السرعة'
    },
    {
      icon: Award,
      title: 'الجودة',
      value: '95%+',
      description: 'دقة الخدمة',
      subtitle: 'معايير عالية الجودة'
    }
  ];

  const strategicGoals = [
    'تحقيق رؤية المملكة 2030 في التحول الرقمي',
    'تعزيز تجربة المستفيدين وسهولة الوصول للخدمات',
    'تحسين الكفاءة التشغيلية وتقليل التكاليف',
    'ضمان أعلى معايير الأمان وحماية البيانات',
    'توفير خدمات ذكية قائمة على الذكاء الاصطناعي',
    'تمكين الموظفين بأدوات تقنية متطورة'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Government Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-3 rounded-lg shadow-xl">
              <Target className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider">الأهداف الاستراتيجية للمشروع</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight pt-2">
            رؤية استراتيجية للتطوير
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            مشروع رقمي طموح يهدف إلى إعادة تشكيل تجربة الخدمات الحكومية من خلال الاستفادة من أحدث تقنيات الذكاء الاصطناعي
          </p>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl font-bold">الرؤية المحورية</h2>
            </div>
            <p className="text-lg leading-relaxed">
              "تمكين المواطنين والمقيمين والزوار من إنجاز خدمات وكالة وزارة الداخلية للأحوال المدنية إلكترونياً بوضوح وسرعة وموثوقية تامة، مع ضمان أعلى معايير الأمان والخصوصية"
            </p>
          </motion.div>
        </motion.div>

        {/* Strategic Objectives Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`${objective.bgColor} rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${objective.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{objective.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    {objective.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {objective.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Benefits Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الفوائد الرئيسية المتوقعة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">مؤشرات الأداء المستهدفة التي ستحققها المنصة الرقمية</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{benefit.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{benefit.description}</h4>
                  <p className="text-xs text-gray-500">{benefit.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Strategic Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الأهداف الاستراتيجية</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">المحاور الرئيسية التي يسعى المشروع لتحقيقها في إطار التحول الرقمي</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {strategicGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">{goal}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessObjectives;