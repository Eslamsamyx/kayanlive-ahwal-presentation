import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Star, Activity, PhoneOff, Timer, Shield, Target } from 'lucide-react';
import Tooltip from './Tooltip';

const KPIMetrics: React.FC = () => {
  const kpis = [
    {
      icon: CheckCircle2,
      title: 'الإنجاز الرقمي',
      value: '85',
      unit: '%',
      description: 'نسبة المعاملات المنجزة رقمياً بالكامل دون التصعيد إلى الموظف المناوب',
      subtext: 'متوافق مع رؤية 2030',
      trend: '+12%',
      trendLabel: 'نمو سنوي',
      category: 'التحول الرقمي'
    },
    {
      icon: Clock,
      title: 'سرعة الاستجابة',
      value: '3',
      unit: 'ثانية',
      description: 'متوسط زمن الرد الآلي',
      subtext: 'استجابة فورية على مدار الساعة',
      trend: '-45%',
      trendLabel: 'تحسن في الأداء',
      category: 'كفاءة التشغيل'
    },
    {
      icon: Star,
      title: 'رضا المستفيدين',
      value: '4.8',
      unit: '/5',
      description: 'تقييم الخدمة من المستخدمين',
      subtext: 'من أكثر من 100 ألف مستفيد',
      trend: '+0.8',
      trendLabel: 'تحسن مستمر',
      category: 'جودة الخدمة'
    },
    {
      icon: Activity,
      title: 'استمرارية الخدمة',
      value: '99.9',
      unit: '%',
      description: 'معدل توافر النظام',
      subtext: 'على مدار الساعة طوال العام',
      trend: 'مستقر',
      trendLabel: 'أداء ثابت',
      category: 'الموثوقية'
    },
    {
      icon: PhoneOff,
      title: 'تقليل الأعباء',
      value: 'ملحوظ',
      unit: '',
      description: 'انخفاض الضغط على المراكز من خلال تقليل عدد المراجعين والمكالمات الهاتفية',
      subtext: 'توفير الموارد البشرية',
      trend: 'متزايد',
      trendLabel: 'كفاءة متزايدة',
      category: 'تحسين العمليات'
    },
    {
      icon: Timer,
      title: 'سرعة الإنجاز',
      value: '10',
      unit: 'دقيقة',
      description: 'متوسط وقت إتمام المعاملة',
      subtext: 'بدلاً من 3 أيام عمل',
      trend: '-25%',
      trendLabel: 'تسريع مستمر',
      category: 'كفاءة الأداء'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Professional geometric pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Professional header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Government badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-3 rounded-lg shadow-xl">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider">وكالة وزارة الداخلية للأحوال المدنية</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 leading-tight pt-2">
            مؤشرات الأداء الاستراتيجية
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            معايير قياس النجاح والكفاءة التشغيلية للمنصة الرقمية وفقاً للمعايير الحكومية والدولية
          </p>

          {/* Stats summary bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-8 bg-white rounded-xl shadow-lg px-8 py-4 border border-gray-100"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-xs text-gray-500">خدمة مستمرة</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100K+</div>
              <div className="text-xs text-gray-500">مستفيد</div>
            </div>
          </motion.div>
        </motion.div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Professional card with government styling */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  {/* Category header */}
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-2">
                    <span className="text-xs font-semibold text-white/90 tracking-wider">{kpi.category}</span>
                  </div>

                  <div className="p-6">
                    {/* Icon section */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl p-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center shadow-md">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-800 mb-3">{kpi.title}</h3>

                    {/* Main value display */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-slate-900">{kpi.value}</span>
                        <span className="text-xl text-slate-600">{kpi.unit}</span>
                      </div>
                    </div>

                    {/* Description and subtext */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700 font-medium">{kpi.description}</p>
                      <p className="text-xs text-gray-500 italic">{kpi.subtext}</p>
                    </div>

                    {/* Professional progress indicator */}
                    <div className="mt-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">معدل الإنجاز</span>
                        <span className="text-xs font-bold text-slate-700">{kpi.value}{kpi.unit}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${isNaN(parseFloat(kpi.value)) ? 75 : (parseFloat(kpi.value) > 10 ? parseFloat(kpi.value) : parseFloat(kpi.value) * 10)}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-slate-600 to-slate-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Executive Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          {/* Summary card with government branding */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:30px_30px]"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <Target className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">ملخص الأداء التنفيذي</h3>
                </div>
              </div>

              <p className="text-white/90 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                تحقق المنصة الرقمية للأحوال المدنية معدلات أداء استثنائية تتوافق مع أعلى المعايير الدولية،
                مما يعزز من كفاءة الخدمات الحكومية ويحقق رضا المستفيدين بنسبة تفوق 95%
              </p>

              {/* Key achievements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    <Tooltip
                      text="ISO 27001"
                      description="معيار دولي لإدارة أمن المعلومات يضمن حماية البيانات والخصوصية وفقاً لأعلى المعايير العالمية"
                    />
                  </div>
                  <div className="text-sm text-white/80">معايير أمنية دولية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    <Tooltip
                      text="WCAG 2.1"
                      description="إرشادات الوصول إلى محتوى الويب - معيار عالمي يضمن إمكانية استخدام الخدمات من قبل ذوي الإعاقة"
                    />
                  </div>
                  <div className="text-sm text-white/80">إتاحة شاملة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    <Tooltip
                      text="99.9% SLA"
                      description="اتفاقية مستوى الخدمة - ضمان توافر النظام بنسبة 99.9% (أقل من 9 ساعات توقف سنوياً)"
                    />
                  </div>
                  <div className="text-sm text-white/80">اتفاقية مستوى خدمة</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPIMetrics;