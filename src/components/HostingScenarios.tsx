import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Network, CloudCog, Check, X, Shield, Database, Cpu, Globe } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

const HostingScenarios: React.FC = () => {
  const scenarios = [
    {
      id: 'on-premises',
      title: 'داخل مركز البيانات',
      icon: Server,
      description: 'استضافة كاملة داخل البنية التحتية للوكالة مع سيادة كاملة على البيانات',
      pros: [
        'سيادة كاملة على البيانات والتحكم المطلق',
        'أمان مطلق مع تشفير داخلي كامل',
        'تشغيل LLM محلي مع RAG داخلي',
        'DMZ مع جدار ناري وWAF وReverse Proxy',
        'نسخ احتياطي مشفر داخليًا'
      ],
      cons: [
        'زمن إطلاق أطول (10-12 أسبوع)',
        'تعقيد تشغيلي أعلى وإدارة الأجهزة',
        'صيانة مستمرة للبنية التحتية',
        'تكلفة رأسمالية مرتفعة للأجهزة والمعدات'
      ],
      requirements: [
        'غرفة خوادم معزولة ومحمية',
        'حوامل خوادم (Racks) مع تبريد وUPS',
        'موارد حوسبة (CPU/GPU) للذكاء الاصطناعي',
        'منظومة SIEM/SOAR وHSM/KMS',
        'تقسيم شبكي (DMZ/Applications/Data/AI)'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'gov-cloud',
      title: 'سحابة حكومية',
      icon: Cloud,
      description: 'استضافة في منصة وطنية معزولة مع توازن بين السيادة والسرعة',
      pros: [
        'توازن مثالي بين السيادة والسرعة',
        'صيانة أقل مع بنية مُدارة',
        'LLM مُدار حكوميًا أو ذاتي على GPU مُدار',
        'قواعد بيانات مُدارة مع تشفير كامل',
        'سجلات وتدقيق مركزي'
      ],
      cons: [
        'الاعتماد على المنصة الوطنية',
        'قيود الموارد المتاحة في السحابة الحكومية',
        'ضرورة ربط خاص وآمن مع الوكالة'
      ],
      requirements: [
        'حساب معزول ضمن VPC',
        'اتصال خاص VPN/IPsec أو ربط مباشر',
        'إدارة هوية وصلاحيات مركزية (IAM)',
        'موارد حوسبة مُدارة بما فيها GPU',
        'تشفير أثناء النقل والتخزين'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'hybrid',
      title: 'نموذج هجين',
      icon: Network,
      description: 'بيانات وRAG داخل الوكالة مع واجهة وLLM سحابي للأداء الأمثل',
      pros: [
        'توازن مثالي بين السيادة والأداء',
        'البيانات الحساسة تبقى داخل الوكالة',
        'مرونة في التوسع وسرعة التطوير',
        'استفادة من أحدث نماذج الذكاء الاصطناعي',
        'مراقبة مشتركة وخطة تعافي متكاملة'
      ],
      cons: [
        'تعقيد الربط بين البيئتين',
        'إدارة متقدمة مطلوبة للتكامل',
        'ضرورة اتفاقيات حوكمة البيانات'
      ],
      requirements: [
        'اتفاقيات قانونية لحوكمة انتقال البيانات',
        'قنوات اتصال خاصة ومشفرة',
        'إبقاء RAG داخل الوكالة',
        'نقطة وصول سحابية للـLLM',
        'تصنيف البيانات وحدود النقل'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'managed-saas',
      title: 'مزود خارجي مُدار',
      icon: CloudCog,
      description: 'خدمة مُدارة بالكامل من مزود خارجي مع أسرع إطلاق',
      pros: [
        'أسرع إطلاق (4-6 أسابيع)',
        'أقل عبء تشغيلي على الفريق الداخلي',
        'تحديثات تلقائية ومستمرة',
        'توفر أحدث التقنيات والممارسات',
        'تكلفة تشغيلية بدلاً من رأسمالية'
      ],
      cons: [
        'تحفظات سيادية على البيانات',
        'اعتمادية كاملة على طرف ثالث',
        'محدودية التخصيص والتحكم',
        'ضرورة تدقيق أمني مستمر'
      ],
      requirements: [
        'سياسات احتفاظ ومحو محددة تعاقدياً',
        'تقارير امتثال دورية',
        'تدقيق مستمر لمسارات البيانات',
        'حق الاطلاع والفحص الأمني',
        'إدارة مفاتيح يملكها العميل (CMK)'
      ],
      color: 'from-orange-600 to-red-600'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">سيناريوهات الاستضافة والتنفيذ</h2>
          <p className="text-xl text-gray-600">خيارات متنوعة تلبي احتياجات الوكالة وفقاً للمتطلبات الأمنية والتشغيلية</p>
        </motion.div>

        <Tabs.Root defaultValue="on-premises" className="w-full" dir="rtl">
          <Tabs.List className="flex flex-wrap justify-center gap-4 mb-12">
            {[...scenarios].reverse().map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Tabs.Trigger
                  key={scenario.id}
                  value={scenario.id}
                  className="group relative flex items-center gap-3 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{scenario.title}</span>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          {scenarios.map((scenario) => {
            const Icon = scenario.icon;
            return (
              <Tabs.Content key={scenario.id} value={scenario.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="flex items-start gap-6 mb-8" dir="rtl">
                    <div className={`w-16 h-16 bg-gradient-to-br ${scenario.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                      <p className="text-lg text-gray-600">{scenario.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-green-800 mb-4" dir="rtl">
                        <Check className="w-5 h-5" />
                        المزايا
                      </h4>
                      <ul className="space-y-3" dir="rtl">
                        {scenario.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-red-800 mb-4" dir="rtl">
                        <X className="w-5 h-5" />
                        التحديات
                      </h4>
                      <ul className="space-y-3" dir="rtl">
                        {scenario.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Requirements section */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-blue-800 mb-4" dir="rtl">
                      <Shield className="w-5 h-5" />
                      المتطلبات التقنية والأمنية
                    </h4>
                    <ul className="space-y-3" dir="rtl">
                      {scenario.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>

        {/* Common features across all scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">ثوابت عبر جميع الخيارات</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-6 h-6" />
              </div>
              <p className="text-sm">وصول فوري للمساعد الذكي</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-sm">دعم متعدد اللغات</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6" />
              </div>
              <p className="text-sm">إدارة مركزية للخدمات</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-sm">أمان وتشفير كامل</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HostingScenarios;