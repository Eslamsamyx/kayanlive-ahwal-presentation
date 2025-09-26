import { Section, HostingScenario, Phase, KPI } from '../types';

export const sections: Section[] = [
  {
    id: 'intro',
    titleAr: 'المقدمة وعن المشروع',
    titleEn: 'Introduction & About the Project',
    contentAr: 'منصة رقمية مدعومة بمساعد ذكي قائم على استخدام (GPT+RAG) لمساندة المستفيدين في إنجاز خدمات وكالة وزارة الداخلية للأحوال المدنية.',
    contentEn: 'A digital platform powered by an AI assistant based on (GPT+RAG) to support beneficiaries in completing Civil Affairs Agency services.',
    features: [
      {
        titleAr: 'وصول فوري للمعلومة',
        titleEn: 'Instant Information Access',
        descriptionAr: 'مساعد ذكي متعدد اللغات',
        descriptionEn: 'Multilingual AI assistant',
        icon: 'Globe'
      },
      {
        titleAr: 'مساندة مباشرة',
        titleEn: 'Direct Support',
        descriptionAr: 'نصي أو مرئي مع تصعيد سلس',
        descriptionEn: 'Text or video with seamless escalation',
        icon: 'Headphones'
      },
      {
        titleAr: 'إدارة مركزية',
        titleEn: 'Centralized Management',
        descriptionAr: 'تغطية مواقع متعددة بكفاءة عالية',
        descriptionEn: 'Multiple locations with high efficiency',
        icon: 'Building'
      }
    ]
  },
  {
    id: 'objectives',
    titleAr: 'الغاية والأهداف',
    titleEn: 'Goals & Objectives',
    contentAr: 'تمكين المواطنين والمقيمين والزوار من إنجاز خدمات وكالة وزارة الداخلية للأحوال المدنية إلكترونيًا بوضوح وسرعة وموثوقية.',
    contentEn: 'Empowering citizens, residents and visitors to complete Civil Affairs services electronically with clarity, speed and reliability.',
    features: []
  },
  {
    id: 'scope',
    titleAr: 'نطاق المشروع',
    titleEn: 'Project Scope',
    subsections: [
      {
        titleAr: 'واجهة المستفيد (PWA)',
        titleEn: 'User Interface (PWA)',
        contentAr: 'تطبيق ويب تقدمي مع دخول موحد ودعم متعدد اللغات',
        contentEn: 'Progressive Web App with SSO and multilingual support',
        icon: 'Monitor'
      },
      {
        titleAr: 'المساعد الافتراضي',
        titleEn: 'Virtual Assistant',
        contentAr: 'GPT+RAG مع تحليل النوايا والاسترجاع المعزز',
        contentEn: 'GPT+RAG with intent analysis and enhanced retrieval',
        icon: 'Bot'
      },
      {
        titleAr: 'لوحة المشرف',
        titleEn: 'Admin Dashboard',
        contentAr: 'إدارة التذاكر ومؤشرات الأداء',
        contentEn: 'Ticket management and performance indicators',
        icon: 'LayoutDashboard'
      },
      {
        titleAr: 'المدفوعات والوثائق',
        titleEn: 'Payments & Documents',
        contentAr: 'دفع إلكتروني وإصدار مستندات رقمية',
        contentEn: 'Electronic payments and digital document issuance',
        icon: 'CreditCard'
      },
      {
        titleAr: 'التكاملات',
        titleEn: 'Integrations',
        contentAr: 'الهوية الوطنية، السجل المدني، بوابات الدفع',
        contentEn: 'National ID, Civil Registry, Payment Gateways',
        icon: 'Link'
      }
    ]
  },
  {
    id: 'security',
    titleAr: 'أمن المعلومات والامتثال',
    titleEn: 'Information Security & Compliance',
    subsections: [
      {
        titleAr: 'تصنيف البيانات',
        titleEn: 'Data Classification',
        contentAr: 'عام، داخلي، سري، سري للغاية',
        contentEn: 'Public, Internal, Confidential, Top Secret',
        icon: 'Shield'
      },
      {
        titleAr: 'الهوية والوصول',
        titleEn: 'Identity & Access',
        contentAr: 'تحقق متعدد ومراجعات ربع سنوية',
        contentEn: 'Multi-factor authentication and quarterly reviews',
        icon: 'Key'
      },
      {
        titleAr: 'حماية الخصوصية',
        titleEn: 'Privacy Protection',
        contentAr: 'حذف البيانات الشخصية وموافقات صريحة',
        contentEn: 'PII redaction and explicit consents',
        icon: 'Lock'
      },
      {
        titleAr: 'التشفير',
        titleEn: 'Encryption',
        contentAr: 'KMS/HSM مع تدوير منتظم',
        contentEn: 'KMS/HSM with regular rotation',
        icon: 'ShieldCheck'
      }
    ]
  },
  {
    id: 'ai-strategy',
    titleAr: 'استراتيجية الذكاء الاصطناعي',
    titleEn: 'AI Strategy',
    contentAr: 'نموذج GPT+RAG مع ضوابط أمان صارمة وإسناد كل إجابة لمرجع رسمي',
    contentEn: 'GPT+RAG model with strict security controls and official reference attribution',
    subsections: [
      {
        titleAr: 'سياسة الإجابة',
        titleEn: 'Response Policy',
        contentAr: 'كل إجابة تستند إلى مرجع رسمي مع تاريخ التحديث',
        contentEn: 'Every answer based on official reference with update date',
        icon: 'FileText'
      },
      {
        titleAr: 'ضوابط الأمان',
        titleEn: 'Security Controls',
        contentAr: 'حذف البيانات الحساسة ومخططات JSON صارمة',
        contentEn: 'PII redaction and strict JSON schemas',
        icon: 'ShieldAlert'
      },
      {
        titleAr: 'الاختبارات',
        titleEn: 'Testing',
        contentAr: 'اختبارات الاستجابة بعد كل تحديث',
        contentEn: 'Prompt regression after each update',
        icon: 'TestTube2'
      }
    ]
  }
];

export const hostingScenarios: HostingScenario[] = [
  {
    id: 'on-premises',
    titleAr: 'داخل مركز بيانات الوكالة',
    titleEn: 'On-Premises Data Center',
    descriptionAr: 'استضافة كاملة داخل البنية التحتية للوكالة',
    descriptionEn: 'Full hosting within agency infrastructure',
    prosAr: ['سيادة كاملة على البيانات', 'أمان مطلق', 'تحكم كامل'],
    prosEn: ['Complete data sovereignty', 'Absolute security', 'Full control'],
    challengesAr: ['زمن إطلاق أطول', 'تعقيد تشغيلي أعلى', 'صيانة مستمرة'],
    challengesEn: ['Longer launch time', 'Higher operational complexity', 'Continuous maintenance'],
    icon: 'Server'
  },
  {
    id: 'gov-cloud',
    titleAr: 'سحابة حكومية',
    titleEn: 'Government Cloud',
    descriptionAr: 'استضافة في منصة وطنية معزولة',
    descriptionEn: 'Hosting on isolated national platform',
    prosAr: ['توازن بين السيادة والسرعة', 'صيانة أقل', 'مرونة عالية'],
    prosEn: ['Balance between sovereignty and speed', 'Less maintenance', 'High flexibility'],
    challengesAr: ['الاعتماد على المنصة الوطنية', 'قيود الموارد'],
    challengesEn: ['Dependency on national platform', 'Resource constraints'],
    icon: 'Cloud'
  },
  {
    id: 'hybrid',
    titleAr: 'هجين',
    titleEn: 'Hybrid',
    descriptionAr: 'بيانات داخلية مع واجهات سحابية',
    descriptionEn: 'Internal data with cloud interfaces',
    prosAr: ['توازن مثالي', 'أداء محسّن', 'مرونة في التوسع'],
    prosEn: ['Optimal balance', 'Enhanced performance', 'Scalability'],
    challengesAr: ['تعقيد الربط', 'إدارة متقدمة'],
    challengesEn: ['Integration complexity', 'Advanced management'],
    icon: 'Network'
  },
  {
    id: 'managed-saas',
    titleAr: 'مزود خارجي مُدار',
    titleEn: 'Managed SaaS',
    descriptionAr: 'خدمة مُدارة بالكامل من مزود خارجي',
    descriptionEn: 'Fully managed service from external provider',
    prosAr: ['أسرع إطلاق', 'أقل عبء تشغيلي', 'تحديثات تلقائية'],
    prosEn: ['Fastest launch', 'Minimal operational burden', 'Automatic updates'],
    challengesAr: ['تحفظات سيادية', 'اعتمادية على طرف ثالث'],
    challengesEn: ['Sovereignty concerns', 'Third-party dependency'],
    icon: 'CloudCog'
  }
];

export const implementationPhases: Phase[] = [
  {
    id: 'phase0',
    titleAr: 'المرحلة 0: التحليل',
    titleEn: 'Phase 0: Analysis',
    durationAr: 'أسبوعان',
    durationEn: '2 weeks',
    tasksAr: [
      'مراجعة الوثائق والمتطلبات',
      'جرد الخدمات المراد تقديمها',
      'تقييم جاهزية التكامل',
      'اعتماد سياسات الحوكمة'
    ],
    tasksEn: [
      'Review documents and requirements',
      'Inventory of services to be provided',
      'Integration readiness assessment',
      'Governance policy approval'
    ],
    status: 'pending'
  },
  {
    id: 'phase1',
    titleAr: 'المرحلة 1: MVP',
    titleEn: 'Phase 1: MVP',
    durationAr: '8-10 أسابيع',
    durationEn: '8-10 weeks',
    tasksAr: [
      'منصة إلكترونية + 3 خدمات أولوية',
      'مساعد ذكي مع RAG مصغر',
      'تكامل الهوية والدفع',
      'لوحة موظف الوكالة الأساسية'
    ],
    tasksEn: [
      'Digital platform + 3 priority services',
      'AI assistant with mini RAG',
      'Identity and payment integration',
      'Basic agency employee dashboard'
    ],
    status: 'pending'
  },
  {
    id: 'phase2',
    titleAr: 'المرحلة 2: التوسع',
    titleEn: 'Phase 2: Expansion',
    durationAr: '6-8 أسابيع',
    durationEn: '6-8 weeks',
    tasksAr: [
      'إضافة 7-10 خدمات إضافية من خدمات الأحوال المدنية (استعلامات، شهادات، طلبات تحديث)',
      'تطوير نظام تصعيد ذكي للموظفين مع واجهة بصرية تفاعلية لإدارة الحالات المعقدة',
      'اختبارات تحميل موسعة لضمان استيعاب آلاف المستخدمين المتزامنين',
      'تحسين جودة الردود من خلال تدريب النماذج على بيانات الأحوال المدنية المحدثة'
    ],
    tasksEn: [
      'Add 7-10 services',
      'Text and video escalation',
      'Extended load testing',
      'Response quality improvement'
    ],
    status: 'pending'
  },
  {
    id: 'phase3',
    titleAr: 'المرحلة 3: التحسين المستمر',
    titleEn: 'Phase 3: Continuous Improvement',
    durationAr: 'مستمرة',
    durationEn: 'Ongoing',
    tasksAr: [
      'زيادة قاعدة البيانات بمعلومات محدثة عن القوانين والإجراءات الجديدة',
      'تحسين نماذج الذكاء الاصطناعي بناءً على تفاعلات المستخدمين والملاحظات',
      'مراجعات دورية شهرية لقياس الأداء ورضا المستفيدين وتحديد نقاط التحسين',
      'تحديثات مستمرة للنظام واستضافة تقنيات ذكاء اصطناعي جديدة لتعزيز الخدمة'
    ],
    tasksEn: [
      'Expand knowledge base',
      'AI model improvement',
      'Periodic reviews',
      'Continuous updates'
    ],
    status: 'pending'
  }
];

export const kpis: KPI[] = [
  {
    id: 'digital-completion',
    titleAr: 'إتمام رقمي',
    titleEn: 'Digital Completion',
    value: '>85',
    unit: '%',
    icon: 'CheckCircle2'
  },
  {
    id: 'response-time',
    titleAr: 'زمن الاستجابة',
    titleEn: 'Response Time',
    value: '<3',
    unit: 'ثانية/sec',
    icon: 'Clock'
  },
  {
    id: 'satisfaction',
    titleAr: 'رضا المستفيدين',
    titleEn: 'User Satisfaction',
    value: '>4.5',
    unit: '/5',
    icon: 'Star'
  },
  {
    id: 'availability',
    titleAr: 'توافر الخدمة',
    titleEn: 'Service Availability',
    value: '99.9',
    unit: '%',
    icon: 'Activity'
  },
  {
    id: 'call-reduction',
    titleAr: 'انخفاض المكالمات',
    titleEn: 'Call Reduction',
    value: '>40',
    unit: '%',
    icon: 'PhoneOff'
  },
  {
    id: 'transaction-time',
    titleAr: 'وقت المعاملة',
    titleEn: 'Transaction Time',
    value: '<10',
    unit: 'دقيقة/min',
    icon: 'Timer'
  }
];