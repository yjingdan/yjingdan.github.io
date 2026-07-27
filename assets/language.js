(() => {
  'use strict';

  const STORAGE_KEY = 'jingdan-site-language';

  const zh = {
    // Shared navigation and profile
    'Skip to content': '跳转到主要内容',
    'Home': '首页',
    'Research': '研究',
    'Clinical': '临床',
    'Teaching': '教学',
    'CV': '简历',
    'PhD Candidate / Speech-Language Therapist': '博士研究生 / 言语语言治疗师',
    'Speech-Language Therapist': '言语语言治疗师',
    'PhD Candidate': '博士研究生',
    'PhD Candidate / Speech-Language Therapist · The Hong Kong Polytechnic University':
      '博士研究生 / 言语语言治疗师 · 香港理工大学',
    'Department of Language Science and Technology': '语言科学与技术学系',
    'The Hong Kong Polytechnic University': '香港理工大学',
    'Scholar': '谷歌学术',
    '© 2026 Jingdan YANG 杨静丹': '© 2026 Jingdan YANG 杨静丹',

    // Home
    'About': '关于我',

    'I am a PhD candidate in the Department of Language Science and Technology at The Hong Kong Polytechnic University and a bilingual (English/Mandarin) Speech-Language Therapist. My work bridges research and clinical practice to improve communication outcomes for Mandarin-speaking children.':
      '我现为香港理工大学语言科学与技术学系博士研究生，同时是一名英汉双语言语语言治疗师。我的工作连接研究与临床实践，致力于改善普通话儿童的沟通成效。',

    'My research develops and validates language assessment tools and evidence-based interventions for children with language disorders. Clinically, I have provided individual and group therapy across the lifespan, with a focus on ASD, social communication, and AAC.':
      '我的研究聚焦于为语言障碍儿童开发并验证语言评估工具，以及评估循证干预方法。在临床工作中，我曾为不同年龄人群提供个别及小组治疗，重点领域包括孤独症谱系障碍、社会沟通和辅助与替代沟通。',

    'Research Interests': '研究兴趣',
    'Speech-Language Pathology': '言语语言病理学',
    'Child Language Disorders': '儿童语言障碍',
    'Test Development': '测验开发',
    'Language Assessment': '语言评估',
    'Intervention Science': '干预科学',
    'Implementation Research': '实施研究',
    'Dynamic assessment': '动态评估',
    'Developmental Language Disorder (DLD)': '发展性语言障碍（DLD）',
    'Autism Spectrum Disorder (ASD)': '孤独症谱系障碍（ASD）',

    'Education': '教育背景',
    'PhD in Child Language Disorders': '儿童语言障碍博士',
    '2024 – present': '2024 – 至今',
    'Thesis:': '论文题目：',

    'From Assessment to Intervention: Validating a Narrative Instrument and Evaluating Intervention Effects in Mandarin-Speaking Children':
      '从评估到干预：验证普通话儿童叙事工具并评估干预效果',

    'Advisors: Prof. Li Sheng, Prof. Trina Spencer (University of Kansas).':
      '导师：盛欐教授、Trina Spencer 教授（堪萨斯大学）。',

    'Erasmus Mundus Joint Master in Clinical Linguistics':
      '伊拉斯谟世界计划临床语言学联合硕士',

    'University of Groningen · University of Potsdam · University of Eastern Finland':
      '格罗宁根大学 · 波茨坦大学 · 东芬兰大学',

    'Erasmus Mundus Scholarship, European Union.':
      '欧盟伊拉斯谟世界计划奖学金。',

    'BEd in Speech and Hearing Sciences': '言语与听觉科学教育学学士',
    'Beijing Language and Culture University': '北京语言大学',

    // Research page
    'Research — Jingdan YANG 杨静丹': '研究 — Jingdan YANG 杨静丹',

    'Narrative assessment · diagnosis · intervention · cross-linguistic validity':
      '叙事评估 · 诊断 · 干预 · 跨语言效度',

    'Overview': '概述',

    'I adapt and validate the Narrative Language Measures (NLM) for Mandarin-speaking children, study how developmental language disorder is identified, and develop dynamic approaches to assessment and intervention. A recurring question across this work is whether measures and intervention programs function as effectively in Mandarin as in English.':
      '我为普通话儿童改编并验证叙事语言测量工具（Narrative Language Measures，NLM），研究发展性语言障碍的识别方式，并开发动态评估与干预方法。贯穿这些工作的一个核心问题是：相关测量工具和干预项目在普通话中的成效是否能与英语中的成效相当。',

    'Research Areas': '研究领域',

    'Adapting and validating narrative language-sampling measures for Mandarin-speaking children.':
      '为普通话儿童改编并验证叙事语言样本测量工具。',

    'Identifying DLD in Mandarin': '普通话发展性语言障碍识别',

    'Community-based, multi-phase and multi-method identification of developmental language disorder.':
      '采用社区取样、多阶段和多方法路径识别发展性语言障碍。',

    'Dynamic assessment & intervention': '动态评估与干预',

    'Dynamic assessment and evidence-based narrative intervention, including how change is measured.':
      '开展动态评估和循证叙事干预，并研究如何测量变化。',

    'Cross-linguistic validity': '跨语言效度',

    'Fair assessment for bilingual and Chinese-background children, distinguishing difference from disorder.':
      '为双语儿童及华语背景儿童提供公平评估，区分语言差异与语言障碍。',

    'Publications & Presentations': '论文与会议报告',
    'Publications': '论文发表',
    'Conference presentations': '会议报告',

    ", Kim, J.-H., Tuomainen, O., & Xu Rattanasone, N. Bilingual Mandarin–English preschoolers' spoken narrative skills and contributing factors: A remote online story-retell study.":
      '，Kim, J.-H.、Tuomainen, O. 与 Xu Rattanasone, N. 汉英双语学龄前儿童的口语叙事能力及其影响因素：一项远程在线故事复述研究。',

    ', & Sheng, L. Establishing the psychometric validity of a narrative assessment tool for Mandarin-speaking children.':
      ' 与 Sheng, L. 建立普通话儿童叙事评估工具的心理测量学效度。',

    ', Gold Coast, Australia.': '，澳大利亚黄金海岸。',

    ', Luo, H., Wang, R., & Sheng, L. Identifying developmental language disorder in Mandarin-speaking children: A community-based multi-phase and multi-method study.':
      '，Luo, H.、Wang, R. 与 Sheng, L. 普通话儿童发展性语言障碍的识别：一项基于社区的多阶段、多方法研究。',

    ', Madison, WI, USA.': '，美国威斯康星州麦迪逊。',

    ', & Sheng, L. Reliability and validity evidence for the Mandarin narrative language measures – listening.':
      ' 与 Sheng, L. 普通话叙事语言测量——听力分测验的信度与效度证据。',

    'Second International Symposium on Child Language and Speech Acquisition and Cognitive Development':
      '第二届儿童语言与言语习得及认知发展国际研讨会',

    ', Ürümqi, China.': '，中国乌鲁木齐。',
    'Full list on Google Scholar →': '在谷歌学术查看完整列表 →',

    'Research Experience': '研究经历',
    'Research Assistant': '研究助理',
    'Macquarie University, Australia (remote)': '澳大利亚麦考瑞大学（远程）',

    'Transcribed and coded Mandarin and English child narrative samples (CHAT/CLAN); analysed data using linear mixed-effects models in R.':
      '转录并编码普通话和英语儿童叙事样本（CHAT/CLAN）；使用 R 中的线性混合效应模型分析数据。',

    'SLP and Audiology Summer School': '言语语言病理学与听力学暑期学校',
    'Rush University (Shenzhen)': '拉什大学（深圳）',
    'North Carolina Central University (Beijing)': '北卡罗来纳中央大学（北京）',

    'Acquired language disorders, dysphagia, and motor language disorders.':
      '学习获得性语言障碍、吞咽障碍和运动性语言障碍。',

    'Anatomy and physiology, introduction to audiology, auditory rehabilitation, clinical phonetics, and speech-language development.':
      '学习解剖与生理学、听力学导论、听觉康复、临床语音学和言语语言发展。',

    'Methods & Tools': '研究方法与工具',
    'Psychometrics': '心理测量学',
    'Single-Case Experimental Design (SCED)': '单一案例实验设计（SCED）',
    'Language sampling (CLAN/ELAN)': '语言样本分析（CLAN/ELAN）',
    'Mixed Methods': '混合研究方法',

    // Clinical page
    'Clinical — Jingdan YANG 杨静丹': '临床 — Jingdan YANG 杨静丹',
    'Clinical Experience': '临床经历',

    'Bilingual speech-language therapy across clinics, special education centers and hospitals':
      '在诊所、特殊教育中心和医院开展双语言语语言治疗',

    'Bilingual (English/Mandarin) Speech-Language Therapist with experience providing individual and group therapy across the lifespan in private clinics, special education centres and schools and public hospitals. Practice spans paediatric assessment and intervention as well as adult neurogenic caseloads.':
      '英汉双语言语语言治疗师，拥有在私人诊所、特殊教育中心、学校和公立医院为不同年龄人群提供个别及小组治疗的经验。临床实践涵盖儿童评估与干预，以及成人神经源性障碍个案。',

    'Positions': '工作经历',
    'Speech-Language Therapist (Lead)': '言语语言治疗师（督导）',
    'Neural Galaxy Healthcare Clinic, Beijing': '银河脑医疗诊所，北京',

    'Led diagnostic assessment and intervention planning for a diverse caseload of clients aged 3–30 years, including individuals with ASD, Down syndrome, dysarthria, and developmental language disorder (DLD).':
      '负责 3–30 岁多样化个案的诊断性评估与干预计划制定，包括孤独症谱系障碍、唐氏综合征、构音障碍和发展性语言障碍（DLD）个案。',

    'Supervised and supported junior clinicians in assessment, intervention planning, and clinical decision-making.':
      '督导并支持初级临床人员开展评估、制定干预计划和进行临床决策。',

    'Developed and delivered training for clinical staff and families to support evidence-based intervention and carryover across settings.':
      '为临床人员和家庭开发并开展培训，以支持循证干预及其在不同环境中的延伸与应用。',

    'Engage Learn and Grow, Shanghai': 'Engage Learn and Grow，上海',

    'Managed a caseload of children aged 3–20 with complex needs (ASD, CP, Down syndrome, Williams Syndrome, Rett Syndrome).':
      '负责 3–20 岁复杂需求儿童的个案管理，包括孤独症谱系障碍、脑性瘫痪、唐氏综合征、威廉姆斯综合征和雷特综合征。',

    'Conducted standardized assessment and delivered evidence-based intervention.':
      '实施标准化评估并提供循证干预。',

    'Collaborated with OTs, BCBAs, and psychologists on integrated intervention plans.':
      '与作业治疗师、注册行为分析师和心理学家合作制定整合式干预计划。',

    'Student Clinician': '学生治疗师',
    'China–Japan Friendship Hospital, Beijing': '中日友好医院，北京',

    'Evaluation and treatment for adults with aphasia, dysarthria, dysphagia, and dementia under supervision.':
      '在督导下为失语症、构音障碍、吞咽障碍及失智症成人提供评估与治疗。',

    'Areas of Expertise': '专业领域',
    'Social communication': '社会沟通',

    'Augmentative and Alternative Communication (AAC)':
      '辅助与替代沟通（AAC）',

    'Language delay': '语言发育迟缓',
    'Aphasia': '失语症',
    'Dysarthria': '构音障碍',
    'Cognitive-Communication Impairments': '认知沟通障碍',

    'Assessment Tools': '评估工具',

    'Languages of practice: Mandarin (native), English (fluent).':
      '执业语言：普通话（母语）、英语（流利）。',

    'Professional Training and Development': '专业培训与发展',
    'LSVT Loud': 'LSVT Loud',

    // Teaching page
    'Teaching — Jingdan YANG 杨静丹': '教学 — Jingdan YANG 杨静丹',
    'Teaching & Mentorship': '教学与指导',

    'University teaching · professional training · clinical supervision':
      '大学教学 · 专业培训 · 临床督导',

    'I contribute to training through university teaching, professional development, and clinical supervision, with an emphasis on evidence-based assessment and intervention.':
      '我通过大学教学、专业发展培训和临床督导参与人才培养，重点关注循证评估与干预。',

    'Teaching & Supervision': '教学与督导',
    'Teaching Assistant': '助教',

    'Undergraduate courses, speech and hearing sciences':
      '言语与听觉科学本科课程',

    'Professional & family training': '专业人员与家庭培训',
    'Clinical settings': '临床机构',

    'Developed and delivered training on evidence-based SLP practice for clinical staff and for families.':
      '为临床人员和家庭开发并开展循证言语语言治疗实践培训。',

    'Clinical supervision': '临床督导',

    'Mentored and supervised junior therapists and interns.':
      '指导并督导初级治疗师和实习生。',

    // Accessibility, metadata, and illustration labels
    'Primary': '主导航',
    'Jingdan Yang': '杨静丹',
    'Story panels being scored': '正在评分的故事画面',
    'Screening a group of children': '对一组儿童进行筛查',
    'Test, teach, and retest progression': '测试、教学与再测试流程',
    'Mandarin and English measures compared': '普通话与英语测量工具对比',

    'Teaching, professional training, and clinical supervision':
      '教学、专业培训与临床督导',

    'Jingdan (Aria) Yang — PhD Candidate and Speech-Language Therapist, Department of Language Science and Technology, The Hong Kong Polytechnic University.':
      '杨静丹（Aria Yang）——香港理工大学语言科学与技术学系博士研究生、言语语言治疗师。',

    'Research on narrative language assessment, DLD identification, dynamic assessment, and intervention for Mandarin-speaking children.':
      '关于普通话儿童叙事语言评估、发展性语言障碍识别、动态评估与干预的研究。',

    'Bilingual speech-language therapy experience across clinics and hospitals: paediatric ASD and DLD caseloads, standardized assessment, AAC, and adult neurogenic disorders.':
      '在诊所和医院开展双语言语语言治疗的经历，包括儿童 ASD 与 DLD 个案、标准化评估、AAC 以及成人神经源性障碍。',

    'Teaching, clinical supervision, and mentorship in speech-language pathology.':
      '言语语言病理学领域的教学、临床督导与指导。'
  };

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const originalTitle = document.title;

  const metaDescriptions = Array.from(
    document.querySelectorAll('meta[name="description"]')
  );

  const originalMetaDescriptions = new Map(
    metaDescriptions.map((meta) => [meta, meta.content])
  );

  function preserveWhitespace(source, replacement) {
    const leading = source.match(/^\s*/)?.[0] ?? '';
    const trailing = source.match(/\s*$/)?.[0] ?? '';
    return `${leading}${replacement}${trailing}`;
  }

  function translateTextNodes(lang) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.nodeValue.trim()) {
            return NodeFilter.FILTER_REJECT;
          }

          const parent = node.parentElement;

          if (
            !parent ||
            parent.closest('script, style, noscript, [data-i18n-ignore]')
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      if (!originalText.has(node)) {
        originalText.set(node, node.nodeValue);
      }

      const source = originalText.get(node);
      const key = source.trim();
      const translated = lang === 'zh' && zh[key] ? zh[key] : key;

      node.nodeValue = preserveWhitespace(source, translated);
    });
  }

  function translateAttributes(lang) {
    document
      .querySelectorAll('[aria-label], [alt], [title]')
      .forEach((element) => {
        if (element.closest('[data-i18n-ignore]')) {
          return;
        }

        if (!originalAttrs.has(element)) {
          originalAttrs.set(element, {
            'aria-label': element.getAttribute('aria-label'),
            alt: element.getAttribute('alt'),
            title: element.getAttribute('title')
          });
        }

        const originals = originalAttrs.get(element);

        Object.entries(originals).forEach(([attribute, source]) => {
          if (source === null) {
            return;
          }

          element.setAttribute(
            attribute,
            lang === 'zh' && zh[source] ? zh[source] : source
          );
        });
      });
  }

  function updateLanguageButton(lang) {
    const button = document.querySelector('[data-language-toggle]');

    if (!button) {
      return;
    }

    const label = button.querySelector('[data-language-label]');
    const targetLanguage = lang === 'zh' ? 'English' : '中文';

    if (label) {
      label.textContent = targetLanguage;
    }

    const accessibleLabel =
      lang === 'zh' ? 'Switch to English' : '切换到中文';

    button.setAttribute('aria-label', accessibleLabel);
    button.setAttribute('title', accessibleLabel);
    button.setAttribute('aria-pressed', String(lang === 'zh'));
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      // localStorage may be unavailable in restricted previews.
    }
  }

  function getSavedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en';
    } catch (_) {
      return 'en';
    }
  }

  function applyLanguage(lang, persist = true) {
    const normalized = lang === 'zh' ? 'zh' : 'en';

    document.documentElement.lang =
      normalized === 'zh' ? 'zh-CN' : 'en';

    document.documentElement.dataset.language = normalized;
    document.body.classList.toggle(
      'lang-zh',
      normalized === 'zh'
    );

    translateTextNodes(normalized);
    translateAttributes(normalized);

    document.title =
      normalized === 'zh' && zh[originalTitle]
        ? zh[originalTitle]
        : originalTitle;

    metaDescriptions.forEach((meta) => {
      const source = originalMetaDescriptions.get(meta);

      meta.content =
        normalized === 'zh' && zh[source]
          ? zh[source]
          : source;
    });

    updateLanguageButton(normalized);

    if (persist) {
      saveLanguage(normalized);
    }
  }

  function init() {
    const button = document.querySelector(
      '[data-language-toggle]'
    );

    const initialLanguage = getSavedLanguage();

    applyLanguage(initialLanguage, false);

    button?.addEventListener('click', () => {
      const current =
        document.documentElement.dataset.language === 'zh'
          ? 'zh'
          : 'en';

      applyLanguage(current === 'zh' ? 'en' : 'zh');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      init,
      { once: true }
    );
  } else {
    init();
  }
})();