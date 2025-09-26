import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, ShieldAlert, TestTube2, Cpu, Database, Zap, Target, Layers, GitBranch, Search, MessageSquare } from 'lucide-react';
import Tooltip from './Tooltip';

const AIStrategy: React.FC = () => {
  const strategies = [
    {
      icon: Brain,
      title: 'نماذج ذكاء اصطناعي متقدمة',
      description: 'نظام ذكي يجمع بين توليد النصوص والبحث في قواعد البيانات لتقديم إجابات دقيقة',
      details: [
        'نماذج لغوية متطورة',
        'البحث الذكي في قواعد البيانات',
        'ترتيب النتائج حسب الأهمية',
        'التحقق من صحة المعلومات'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'سياسة الإجابة الصارمة',
      description: 'كل إجابة مدعومة بمرجع رسمي موثق مع تاريخ التحديث',
      details: [
        'ربط كل إجابة بمصدر رسمي',
        'عرض تاريخ آخر تحديث',
        'رفض الإجابة بدون مرجع',
        'تصعيد للموظف عند الحاجة'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldAlert,
      title: 'ضوابط الأمان والخصوصية',
      description: 'حماية البيانات الحساسة وتطبيق أعلى معايير الأمان',
      details: [
        <Tooltip text="PII Redaction" description="حذف أو إخفاء المعلومات الشخصية التعريفية مثل الأرقام الوطنية والأسماء الكاملة لحماية خصوصية المستخدمين" />,
        'تشفير end-to-end',
        'مخططات JSON صارمة',
        'تدقيق جميع المدخلات'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: TestTube2,
      title: 'الاختبارات والتحسين المستمر',
      description: 'اختبارات مستمرة للتأكد من جودة الردود ودقتها',
      details: [
        'اختبارات اتزان الردود',
        'قياس دقة الإجابات',
        'تحليل رضا المستخدمين',
        'تحديث النماذج دورياً'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const architecture: {
    title: string;
    layers: Array<{
      name: string;
      icon: any;
      components: (string | React.ReactElement)[];
    }>;
  } = {
    title: 'البنية التقنية للذكاء الاصطناعي',
    layers: [
      {
        name: 'طبقة الواجهة',
        icon: MessageSquare,
        components: [
          'واجهة محادثة تفاعلية',
          'دعم الصوت والنص',
          'واجهات API للتكامل',
          'دعم متعدد اللغات (عربي/إنجليزي)'
        ]
      },
      {
        name: 'طبقة المعالجة',
        icon: Cpu,
        components: [
          'معالج اللغة الطبيعية (NLP)',
          'محلل النوايا والسياق',
          'موجه الاستعلامات',
          'مولد الإجابات'
        ]
      },
      {
        name: 'طبقة الذكاء',
        icon: Brain,
        components: [
          'نماذج ذكاء اصطناعي متقدمة',
          'نماذج متخصصة للأحوال المدنية',
          'نظام التعلم والتحسين المستمر'
        ]
      },
      {
        name: 'طبقة البيانات',
        icon: Database,
        components: [
          'قاعدة البيانات الرسمية',
          <Tooltip text="مخزن المتجهات (Vector Store)" description="نظام متخصص لحفظ وتنظيم المعلومات بطريقة ذكية تسمح بالبحث السريع والعثور على المعلومات المشابهة" />,
          'ذاكرة المحادثات',
          'سجلات التدقيق'
        ]
      }
    ]
  };

  const features = [
    {
      icon: Search,
      title: 'البحث الدلالي',
      items: [
        'فهم المعنى وليس الكلمات فقط',
        'البحث بالمرادفات',
        'تصحيح الأخطاء الإملائية',
        'فهم الاستعلامات المعقدة'
      ]
    },
    {
      icon: GitBranch,
      title: 'التصعيد الذكي',
      items: [
        'تحديد الحاجة للتدخل البشري',
        'توجيه للموظف المناسب',
        'نقل السياق كاملاً',
        'تعلم من التصعيدات'
      ]
    },
    {
      icon: Layers,
      title: 'التكامل السلس',
      items: [
        'ربط مع أنظمة الوكالة',
        'تكامل مع الهوية الوطنية',
        'بوابات الدفع الإلكتروني',
        'أنظمة الإشعارات'
      ]
    },
    {
      icon: Target,
      title: 'الأداء المتميز',
      items: [
        'استجابة < 3 ثواني',
        'دقة > 95%',
        'توافر 99.9%',
        'معالجة 10K+ طلب/ساعة'
      ]
    }
  ];

  const ragProcess = {
    title: 'آلية عمل نظام الذكاء الاصطناعي',
    steps: [
      {
        number: '1',
        title: 'استقبال الاستعلام',
        description: 'تحليل سؤال المستخدم وفهم النية'
      },
      {
        number: '2',
        title: 'البحث والاسترجاع',
        description: 'البحث في قاعدة البيانات الرسمية'
      },
      {
        number: '3',
        title: 'ترتيب النتائج',
        description: 'ترتيب المعلومات حسب الصلة'
      },
      {
        number: '4',
        title: 'توليد الإجابة',
        description: 'صياغة إجابة شاملة ودقيقة'
      },
      {
        number: '5',
        title: 'التحقق والتدقيق',
        description: 'مراجعة الإجابة والمراجع'
      },
      {
        number: '6',
        title: 'التسليم',
        description: 'عرض الإجابة مع المصادر'
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">استراتيجية الذكاء الاصطناعي</h2>
          <p className="text-xl text-gray-600">نظام متطور يستخدم أحدث تقنيات الذكاء الاصطناعي لتقديم خدمات دقيقة وموثوقة</p>
        </motion.div>

        {/* Strategy Cards with Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${strategy.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                      <p className="text-gray-600">{strategy.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 border-t pt-4">
                    {strategy.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mt-1.5"></span>
                        <span className="text-sm text-gray-700">{typeof detail === 'string' ? detail : detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Layers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{architecture.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecture.layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{layer.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {layer.components.map((component, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5"></span>
                        {typeof component === 'string' ? component : component}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* High-Level System Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">تصميم البنية التقنية</h3>
            <p className="text-gray-600">High-Level Design للمكونات الأساسية والتفاعلات الرئيسية في النظام</p>
          </div>

          {/* Diagram Container */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              src="/high-level-design.jpeg"
              alt="مخطط التصميم المعماري عالي المستوى للنظام الذكي"
              className="w-full h-auto rounded-lg shadow-lg max-w-5xl mx-auto"
            />

            {/* Caption */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                <span className="font-medium">High-Level Design:</span> يُظهر المكونات الأساسية للنظام من واجهات المستخدم
                مروراً بمنسق العمليات وصولاً إلى طبقات الأمان والبنية التحتية
              </p>
            </div>
          </div>
        </motion.div>

        {/* RAG Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">{ragProcess.title}</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ragProcess.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  {step.number}
                </div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-xs text-white/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">مؤشرات الأداء المستهدفة</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt; 3s</div>
              <p className="text-sm text-gray-600">زمن الاستجابة</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">&gt; 95%</div>
              <p className="text-sm text-gray-600">دقة الإجابات</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-sm text-gray-600">التوافر المستمر</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <p className="text-sm text-gray-600">طلب/ساعة</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIStrategy;