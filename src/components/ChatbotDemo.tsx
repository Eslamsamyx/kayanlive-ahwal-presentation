import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Mic, FileText, CreditCard, User, Bot, CheckCircle, Clock, AlertCircle, Shield, UserCheck, DollarSign, Download, CheckCircle2, Star } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
  status?: 'sending' | 'sent' | 'delivered';
  attachments?: string[];
  actions?: Array<{
    title: string;
    type: 'link' | 'form' | 'download';
  }>;
}

const ChatbotDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'أهلاً وسهلاً بك في المساعد الذكي لوزارة الداخلية - الأحوال المدنية. اختر إحدى الخدمات للحصول على إرشادات مفصلة أو اكتب استفسارك مباشرة.',
      timestamp: '10:30'
    }
  ]);

  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [demoStep, setDemoStep] = useState('initial');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const civilAffairsServices = [
    {
      id: 'criminal-record',
      title: 'صحيفة الحالة الجنائية',
      icon: Shield,
      description: 'استخراج صورة من صحيفة الحالة الجنائية',
      steps: [
        'تسجيل الدخول عبر النفاذ الوطني الموحد',
        'اختيار نوع الصحيفة المطلوبة (للفرد أو للغير)',
        'تعبئة البيانات المطلوبة وتحديد الغرض',
        'دفع الرسوم (50 ريال) إلكترونياً',
        'استلام الوثيقة فوراً عبر البريد الإلكتروني'
      ],
      cost: '50 ريال',
      duration: 'فوري',
      requirements: ['الهوية الوطنية', 'تحديد الغرض من الطلب']
    },
    {
      id: 'family-record',
      title: 'سجل الأسرة',
      icon: UserCheck,
      description: 'استخراج أو تحديث سجل الأسرة',
      steps: [
        'التحقق من الهوية عبر النفاذ الوطني الموحد',
        'اختيار نوع الخدمة (استخراج جديد أو تحديث)',
        'مراجعة بيانات أفراد الأسرة المسجلين',
        'إضافة أو حذف أفراد الأسرة (إن وجد)',
        'طباعة السجل أو إرساله إلكترونياً'
      ],
      cost: '20 ريال',
      duration: 'فوري',
      requirements: ['ولي الأمر', 'وثائق إثبات القرابة']
    },
    {
      id: 'birth-certificate',
      title: 'شهادة الميلاد',
      icon: FileText,
      description: 'إصدار أو استخراج شهادة ميلاد',
      steps: [
        'تسجيل الدخول بحساب ولي الأمر',
        'تحديد نوع الطلب (إصدار جديد أو بدل مفقود)',
        'إدخال بيانات المولود أو رقم الهوية',
        'تأكيد البيانات ومراجعتها',
        'دفع الرسوم واستلام الشهادة'
      ],
      cost: '15 ريال',
      duration: 'فوري',
      requirements: ['هوية ولي الأمر', 'تقرير الولادة (للإصدار الجديد)']
    },
    {
      id: 'death-certificate',
      title: 'شهادة الوفاة',
      icon: FileText,
      description: 'إصدار أو استخراج شهادة وفاة',
      steps: [
        'التسجيل باستخدام هوية مقدم الطلب',
        'إدخال بيانات المتوفى (الاسم ورقم الهوية)',
        'تحديد علاقة القرابة بالمتوفى',
        'إرفاق المستندات المطلوبة إن وجدت',
        'مراجعة البيانات ودفع الرسوم'
      ],
      cost: '15 ريال',
      duration: 'فوري',
      requirements: ['هوية مقدم الطلب', 'إثبات القرابة', 'تقرير الوفاة']
    }
  ];

  // Removed auto-scroll effect to prevent unwanted scrolling behavior

  const simulateTyping = (response: string, actions?: Array<{ title: string; type: 'link' | 'form' | 'download' }>, attachments?: string[], delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newMessage: Message = {
        id: messages.length + 1,
        type: 'bot',
        content: response,
        timestamp: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }),
        actions,
        attachments
      };
      setMessages(prev => [...prev, newMessage]);
    }, delay);
  };

  const handleServiceGuidance = (serviceId: string) => {
    const service = civilAffairsServices.find(s => s.id === serviceId);
    if (!service) return;

    setSelectedService(serviceId);
    setDemoStep('guidance');

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: `أريد الحصول على إرشادات حول ${service.title}`,
      timestamp: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate detailed guidance response
    const stepsText = service.steps.map((step, index) => `${index + 1}. ${step}`).join('\n\n');
    const requirementsText = service.requirements.join(' • ');

    const guidanceResponse = `إليك الدليل الشامل لـ ${service.title}:

<strong>الخطوات المطلوبة:</strong><br/>
${stepsText}

<strong>التكلفة:</strong> ${service.cost}<br/>
<strong>مدة الإنجاز:</strong> ${service.duration}

<strong>المتطلبات:</strong><br/>
${requirementsText}

هل تود البدء في هذه الخدمة الآن؟`;

    simulateTyping(guidanceResponse, [
      { title: 'بدء الخدمة الآن', type: 'link' },
      { title: 'عرض تجربة محاكية', type: 'form' },
      { title: 'التواصل مع موظف', type: 'link' }
    ]);
  };


  const simulateServiceFlow = () => {
    setDemoStep('verification');

    // Step 1: Identity Verification
    simulateTyping('ممتاز! سأبدأ عملية التحقق من الهوية الآن...', [], [], 1000);

    setTimeout(() => {
      simulateTyping('✅ تم التحقق من الهوية بنجاح عبر النفاذ الوطني الموحد\n\n🔍 جاري التحقق من البيانات...', [], [], 2000);
    }, 2000);

    setTimeout(() => {
      simulateTyping('✅ تم التحقق من صحة البيانات\n\n📋 <strong>بياناتك المؤكدة:</strong>\n• الاسم: أحمد محمد العلي\n• رقم الهوية: ************1234\n• تاريخ الميلاد: 15/03/1985\n\nهل تؤكد صحة هذه البيانات؟', [
        { title: 'تأكيد البيانات', type: 'link' },
        { title: 'تعديل البيانات', type: 'form' }
      ], [], 1500);
    }, 4500);
  };

  const handleDataConfirmation = () => {
    setDemoStep('processing');

    simulateTyping('✅ تم تأكيد البيانات بنجاح\n\n💳 <strong>تفاصيل الرسوم:</strong>\n• رسوم الخدمة: 50 ريال سعودي\n• رسوم إضافية: 0 ريال\n• المجموع: 50 ريال\n\n🔒 الدفع آمن ومحمي بالكامل', [
      { title: 'الدفع الآن', type: 'link' },
      { title: 'حفظ كمسودة', type: 'form' }
    ]);
  };

  const handlePayment = () => {
    setDemoStep('payment');

    simulateTyping('💳 جاري معالجة عملية الدفع...\n\n🔄 يرجى الانتظار...', [], [], 1000);

    setTimeout(() => {
      simulateTyping('✅ تم الدفع بنجاح!\n\n📄 <strong>جاري إنشاء الوثيقة...</strong>\n\n⏱️ الوقت المتبقي: 15 ثانية', [], [], 2000);
    }, 2000);

    setTimeout(() => {
      simulateTyping('🎉 <strong>تمت العملية بنجاح!</strong>\n\n📋 <strong>تفاصيل الطلب:</strong>\n• رقم الطلب: #CV-2024-001234\n• تاريخ الإصدار: 26/09/2024\n• صالحة حتى: لا تنتهي الصلاحية\n\n📥 الوثيقة جاهزة للتحميل', [
        { title: 'تحميل الوثيقة', type: 'download' },
        { title: 'إرسال عبر البريد الإلكتروني', type: 'form' },
        { title: 'طباعة الوثيقة', type: 'link' }
      ], ['صحيفة الحالة الجنائية - أحمد محمد العلي.pdf']);
      setDemoStep('completed');

      // Start satisfaction survey after a delay
      setTimeout(() => {
        startSatisfactionSurvey();
      }, 2000);
    }, 4500);
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');

    // Simulate intelligent response
    simulateTyping('شكراً لك على سؤالك. يمكنني مساعدتك في أي من خدمات الأحوال المدنية. اختر الخدمة المناسبة من القائمة أو اكتب استفسارك مباشرة.');
  };

  const startSatisfactionSurvey = () => {
    setDemoStep('satisfaction');

    simulateTyping('⭐ <strong>تقييم الخدمة</strong>\n\nنحن نهتم برأيك! يرجى تقييم تجربتك مع خدماتنا الرقمية:', [
      { title: '⭐⭐⭐⭐⭐ ممتاز (5 نجوم)', type: 'link' },
      { title: '⭐⭐⭐⭐ جيد جداً (4 نجوم)', type: 'link' },
      { title: '⭐⭐⭐ جيد (3 نجوم)', type: 'link' },
      { title: '⭐⭐ مقبول (2 نجمة)', type: 'link' },
      { title: '⭐ يحتاج تحسين (1 نجمة)', type: 'link' }
    ]);
  };

  const handleSatisfactionRating = (rating: string) => {
    const ratingValue = rating.includes('5') ? 5 :
                       rating.includes('4') ? 4 :
                       rating.includes('3') ? 3 :
                       rating.includes('2') ? 2 : 1;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: `تم تقييم الخدمة بـ ${ratingValue} نجوم`,
      timestamp: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);

    if (ratingValue >= 4) {
      simulateTyping('🙏 <strong>شكراً لك على تقييمك الإيجابي!</strong>\n\n✨ نحن سعداء لأن الخدمة نالت إعجابك\n🎯 سنستمر في تطوير خدماتنا لنقدم لك الأفضل دائماً', [
        { title: 'بدء طلب جديد', type: 'link' },
        { title: 'تقييم خدمة أخرى', type: 'form' }
      ]);
    } else {
      simulateTyping('🤝 <strong>شكراً لك على ملاحظاتك</strong>\n\n📝 رأيك مهم جداً لتحسين خدماتنا\n🔧 سيتم مراجعة تجربتك من قِبل فريق التطوير\n📞 يمكنك التواصل معنا مباشرة للمساعدة\n\n💡 <strong>كيف يمكننا تحسين الخدمة؟</strong>', [
        { title: 'إرسال اقتراح', type: 'form' },
        { title: 'التواصل مع الدعم', type: 'link' },
        { title: 'بدء طلب جديد', type: 'link' }
      ]);
    }

    setDemoStep('survey_completed');
  };

  const resetDemo = () => {
    setMessages([{
      id: 1,
      type: 'bot',
      content: 'أهلاً وسهلاً بك في المساعد الذكي لوزارة الداخلية - الأحوال المدنية. اختر إحدى الخدمات للحصول على إرشادات مفصلة أو اكتب استفسارك مباشرة.',
      timestamp: '10:30'
    }]);
    setCurrentInput('');
    setDemoStep('initial');
    setSelectedService(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-800 text-white px-6 py-3 rounded-lg shadow-xl mb-6"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wider">تجربة المساعد الذكي التفاعلي</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent mb-6 leading-tight pt-2">
            تجربة المساعد الذكي لوكالة وزارة الداخلية للأحوال المدنية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تجربة تفاعلية توضح كيف يساعد المساعد الذكي المستفيدين في إنجاز خدمات الأحوال المدنية بسهولة وسرعة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Guidance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">خدمات الأحوال المدنية</h3>
              <p className="text-sm text-gray-600 text-center mb-6">اختر الخدمة للحصول على إرشادات مفصلة</p>

              <div className="space-y-4 mb-6">
                {civilAffairsServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceGuidance(service.id)}
                      className="w-full text-right p-4 rounded-lg border-2 border-gray-200 hover:border-green-300 hover:bg-green-50/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-gray-900 mb-1">{service.title}</div>
                          <div className="text-xs text-gray-600">{service.description}</div>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3" />
                              <span>{service.cost}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{service.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={resetDemo}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300"
              >
                مسح المحادثة
              </button>
            </div>
          </motion.div>

          {/* Chatbot Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-green-800 to-green-700 text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">المساعد الذكي - وزارة الداخلية</h4>
                    <div className="flex items-center gap-2 text-xs text-green-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>متصل - جاهز للمساعدة</span>
                    </div>
                  </div>
                  <div className="mr-auto text-xs">
                    <div>متوسط زمن الاستجابة: 2.1 ثانية</div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-gray-50">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`rounded-2xl p-4 ${
                          message.type === 'user'
                            ? 'bg-green-500 text-white'
                            : 'bg-white border border-gray-200 shadow-sm'
                        }`}>
                          <div
                            className="text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br/>') }}
                          />

                          {/* Attachments */}
                          {message.attachments && (
                            <div className="mt-3 space-y-2">
                              {message.attachments.map((attachment, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                                  <FileText className="w-4 h-4 text-gray-500" />
                                  <span className="text-xs text-gray-600">{attachment}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Action Buttons */}
                          {message.actions && (
                            <div className="mt-3 space-y-2">
                              {message.actions.map((action, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    if (action.title === 'بدء الخدمة الآن' || action.title === 'عرض تجربة محاكية') {
                                      simulateServiceFlow();
                                    } else if (action.title === 'تأكيد البيانات') {
                                      handleDataConfirmation();
                                    } else if (action.title === 'الدفع الآن') {
                                      handlePayment();
                                    } else if (action.title === 'تحميل الوثيقة') {
                                      // Simulate download
                                      const userMessage: Message = {
                                        id: messages.length + 1,
                                        type: 'user',
                                        content: 'تم تحميل الوثيقة بنجاح',
                                        timestamp: new Date().toLocaleTimeString('ar', { hour: '2-digit', minute: '2-digit' }),
                                        status: 'sent'
                                      };
                                      setMessages(prev => [...prev, userMessage]);
                                      simulateTyping('✅ تم تحميل الوثيقة بنجاح إلى جهازك\n\n📧 تم إرسال نسخة إضافية إلى بريدك الإلكتروني\n\nشكراً لاستخدام خدماتنا!');
                                    } else if (action.title === 'بدء طلب جديد') {
                                      resetDemo();
                                    } else if (action.title.includes('نجوم') || action.title.includes('نجمة')) {
                                      handleSatisfactionRating(action.title);
                                    }
                                  }}
                                  className="w-full text-right bg-green-50 hover:bg-green-100 text-green-700 text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                  {action.type === 'download' && <Download className="w-3 h-3" />}
                                  {action.type === 'form' && <FileText className="w-3 h-3" />}
                                  {action.type === 'link' && action.title.includes('الدفع') && <CreditCard className="w-3 h-3" />}
                                  {action.type === 'link' && action.title.includes('تأكيد') && <CheckCircle2 className="w-3 h-3" />}
                                  {action.title.includes('نجوم') && <Star className="w-3 h-3" />}
                                  <span>{action.title}</span>
                                </button>
                              ))}
            </div>
                          )}

                          <div className="flex items-center justify-between mt-2">
                            <span className={`text-xs ${message.type === 'user' ? 'text-green-100' : 'text-gray-400'}`}>
                              {message.timestamp}
                            </span>
                            {message.type === 'user' && message.status && (
                              <div className="flex items-center gap-1">
                                {message.status === 'sent' && <CheckCircle className="w-3 h-3 text-green-200" />}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user'
                          ? 'bg-green-500 order-1 ml-3'
                          : 'bg-gray-200 order-2 mr-3'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex justify-end"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-xs text-gray-500">المساعد يكتب...</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(currentInput)}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full bg-gray-100 rounded-full py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-300"
                      dir="rtl"
                    />
                    <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <Mic className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleSendMessage(currentInput)}
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300"
                    disabled={!currentInput.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>الرد في خلال ثوانٍ</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>محمي ومشفر بالكامل</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-green-800 to-green-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">مزايا المساعد الذكي المتقدمة</h3>
            <p className="text-white/80">تقنيات حديثة تضمن أفضل تجربة للمستفيدين مع تقييم مستمر للخدمة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">دردشة ذكية</h4>
              <p className="text-sm text-white/80">فهم طبيعي للغة العربية</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mic className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">تفاعل صوتي</h4>
              <p className="text-sm text-white/80">أوامر صوتية بالعربية</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CreditCard className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">دفع آمن</h4>
              <p className="text-sm text-white/80">تكامل مع بوابات الدفع</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <FileText className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">وثائق فورية</h4>
              <p className="text-sm text-white/80">استخراج وتحميل مباشر</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotDemo;