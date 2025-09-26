import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Shield, Cpu } from 'lucide-react';

const TechnicalArchitecture: React.FC = () => {
  const layers = [
    {
      icon: Globe,
      title: 'طبقة الواجهات',
      color: 'bg-blue-900',
      ring: 'ring-blue-800',
      components: ['Progressive Web App', 'تطبيق موبايل', 'واجهة الموظفين', 'API Gateway']
    },
    {
      icon: Cpu,
      title: 'طبقة المعالجة',
      color: 'bg-amber-600',
      ring: 'ring-amber-500',
      components: ['محرك الذكاء الاصطناعي', 'معالج المعاملات', 'محرك القواعد', 'خدمات التكامل']
    },
    {
      icon: Database,
      title: 'طبقة البيانات',
      color: 'bg-slate-600',
      ring: 'ring-slate-500',
      components: ['قاعدة بيانات PostgreSQL', 'مخزن الوثائق', 'ذاكرة التخزين المؤقت', 'محرك البحث']
    },
    {
      icon: Shield,
      title: 'طبقة الأمان',
      color: 'bg-yellow-700',
      ring: 'ring-yellow-600',
      components: ['جدار الحماية WAF', 'نظام كشف التسلل', 'إدارة الهوية IAM', 'تشفير البيانات']
    }
  ];

  const techStack = [
    { name: 'Frontend', tools: ['React', 'TypeScript', 'Tailwind CSS', 'PWA'] },
    { name: 'Backend', tools: ['Node.js', 'Python', 'FastAPI', 'GraphQL'] },
    { name: 'الذكاء الاصطناعي', tools: ['نماذج لغوية متقدمة (LLM)', 'البحث الذكي (Smart Search)', 'معالجة اللغة الطبيعية (NLP)', 'قواعد البيانات (Databases)'] },
    { name: 'Infrastructure', tools: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'] }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Cpu className="w-4 h-4" />
            <span>بنية تقنية متقدمة</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">البنية التقنية للمنصة</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">معمارية حديثة متعددة الطبقات تضمن الأداء العالي والموثوقية</p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white text-center mb-12"
          >
            طبقات النظام المعمارية
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  {/* Connection line */}
                  {index < layers.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -left-4 z-10">
                      <div className="w-8 h-0.5 bg-gradient-to-l from-white/30 to-transparent"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  )}

                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 group-hover:border-white/30">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon with enhanced styling */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 ${layer.color} rounded-2xl flex items-center justify-center shadow-2xl ring-1 ${layer.ring} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">{layer.title}</h3>

                    {/* Components list */}
                    <ul className="space-y-3">
                      {layer.components.map((component, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-3 group-hover:text-gray-200 transition-colors duration-300">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300"></span>
                          <span className="leading-relaxed">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4"
            >
              <Database className="w-4 h-4" />
              <span>مجموعة التقنيات</span>
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">التقنيات والأدوات المستخدمة</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">مجموعة شاملة من أحدث التقنيات والأدوات لضمان أفضل أداء وموثوقية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <h4 className="font-bold text-white mb-6 text-lg text-center group-hover:text-blue-200 transition-colors duration-300">{stack.name}</h4>
                  <div className="space-y-3">
                    {stack.tools.map((tool, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-200 font-medium">{tool}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="group">
                <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-1">أمان متقدم</h5>
                <p className="text-gray-400 text-sm">حماية شاملة للبيانات والأنظمة</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-1">أداء عالي</h5>
                <p className="text-gray-400 text-sm">معالجة سريعة ومتطورة</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-1">قابلية التوسع</h5>
                <p className="text-gray-400 text-sm">نمو وتطور مستمر للنظام</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;