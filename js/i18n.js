(() => {
  const STORAGE_KEY = "nexa_waitlist_lang";
  const SUPPORTED = ["en", "fr", "ar"];

  const dict = {
    en: {
      meta: {
        indexTitle: "Become one of the first 100 hosts | Nexa Stays",
        indexDesc:
          "Join the Nexa Stays Founding Host Program. Get 0% commission for your first 3 months. Limited to the first 100 approved hosts in Morocco.",
      },
      nav: {
        lang: "Language",
      },
      apply: {
        scarcity: "Founding Host Program · Limited to the first 100 approved hosts",
        heroTitle: "Become one of the first 100 hosts on Nexa Stays",
        heroSub: "Get 0% commission for your first 3 months.",
        tick1: "Founding Host Program",
        tick2: "Priority onboarding",
        tick3: "Launch visibility",
        urgency: "Applications are reviewed in the order they're received.",
        trustTitle: "Founding Host Program",
        trust1: "Limited to the first 100 approved hosts",
        trust2: "No payment required",
        trust3: "Takes less than 2 minutes",
        step1of2: "Step 1 of 2",
        step2of2: "Step 2 of 2",
        continue: "Continue",
        backStep: "Back",
        fullName: "Full name",
        fullNamePh: "Your full name",
        phone: "Phone",
        email: "Email",
        emailPh: "you@example.com",
        city: "City in Morocco",
        cityPlaceholder: "Select a city",
        cityOther: "Other",
        propertyType: "Property type",
        apartment: "Apartment",
        villa: "Villa",
        riad: "Riad",
        hotel: "Hotel",
        hostel: "Hostel",
        propertyCountQ: "How many properties would you like to list?",
        hostExperienceQ: "Have you hosted before?",
        expAirbnb: "Airbnb",
        expBooking: "Booking",
        expBoth: "Both",
        expNew: "New host",
        hostActivityQ: "How active do you expect to be?",
        actOccasionally: "Occasionally",
        actWeekends: "Every weekend",
        actMostWeeks: "Most weeks",
        actFullTime: "Full-time hosting",
        propertyDetails: "Property details",
        propertyDetailsPh: "Share a website, Instagram, or a short description…",
        submit: "Join the Waitlist",
        submitting: "Submitting…",
        successTitle: "Welcome to the Founding Host Program.",
        successBody: "Your application has been received.",
        successBody2: "We'll review it and contact approved hosts before the public launch.",
        successTimeline: "Expected invitations: Late August 2026.",
        successThanks: "Thank you for helping build the future of Moroccan hospitality.",
        successDone: "Done",
        errCity: "Please select a city.",
        errPropertyType: "Please select a property type.",
        errStep2: "Please answer the property, experience, and activity questions.",
        errSubmit: "Could not submit right now. Please try again.",
        errGeneric: "Something went wrong.",
      },
      page: {
        whyTitle: "Why host with Nexa",
        why1: "Higher visibility",
        why2: "0% commission for 3 months",
        why3: "Morocco-first platform",
        why4: "Dedicated onboarding",
        howTitle: "How it works",
        how1: "Apply",
        how2: "Review",
        how3: "Get approved",
        how4: "List your property",
        how5: "Start receiving bookings",
        diffTitle: "Why Nexa?",
        diff1: "Built for Morocco",
        diff2: "Verified hosts",
        diff3: "Transparent pricing",
        diff4: "Quality-first marketplace",
        diff5: "Local support",
        faqTitle: "FAQ",
        faq1Q: "When does Nexa launch?",
        faq1A:
          "Public launch is planned for late 2026. Founding hosts receive invitations and onboarding before then — expected Late August 2026.",
        faq2Q: "Who can apply?",
        faq2A:
          "Anyone who owns or manages accommodation in Morocco — apartments, villas, riads, hotels, hostels, and more.",
        faq3Q: "How long is the 0% commission?",
        faq3A: "Founding hosts get 0% commission for their first three months after launch.",
        faq4Q: "Can I list multiple properties?",
        faq4A: "Yes. Tell us how many you'd like to list in the application.",
        faq5Q: "Do I need Airbnb experience?",
        faq5A: "No. New hosts and experienced hosts are both welcome.",
        faq6Q: "How will I know if I'm accepted?",
        faq6A: "We'll email approved hosts with next steps before public launch.",
      },
      footer: {
        tagline: "Building Morocco's most trusted accommodation marketplace",
        terms: "Terms",
        privacy: "Privacy",
        copyright: "© 2026 Nexa Stays. Verified Moroccan hospitality.",
      },
    },
    fr: {
      meta: {
        indexTitle: "Devenez l'un des 100 premiers hôtes | Nexa Stays",
        indexDesc:
          "Rejoignez le programme Hôtes fondateurs Nexa Stays. 0 % de commission pendant vos 3 premiers mois. Limité aux 100 premiers hôtes approuvés au Maroc.",
      },
      nav: {
        lang: "Langue",
      },
      apply: {
        scarcity: "Programme Hôtes fondateurs · Limité aux 100 premiers hôtes approuvés",
        heroTitle: "Devenez l'un des 100 premiers hôtes sur Nexa Stays",
        heroSub: "0 % de commission pendant vos 3 premiers mois.",
        tick1: "Programme Hôtes fondateurs",
        tick2: "Onboarding prioritaire",
        tick3: "Visibilité au lancement",
        urgency: "Les candidatures sont examinées dans l'ordre de réception.",
        trustTitle: "Programme Hôtes fondateurs",
        trust1: "Limité aux 100 premiers hôtes approuvés",
        trust2: "Aucun paiement requis",
        trust3: "Moins de 2 minutes",
        step1of2: "Étape 1 sur 2",
        step2of2: "Étape 2 sur 2",
        continue: "Continuer",
        backStep: "Retour",
        fullName: "Nom complet",
        fullNamePh: "Votre nom complet",
        phone: "Téléphone",
        email: "E-mail",
        emailPh: "vous@exemple.com",
        city: "Ville au Maroc",
        cityPlaceholder: "Choisir une ville",
        cityOther: "Autre",
        propertyType: "Type de bien",
        apartment: "Appartement",
        villa: "Villa",
        riad: "Riad",
        hotel: "Hôtel",
        hostel: "Auberge",
        propertyCountQ: "Combien de biens souhaitez-vous publier ?",
        hostExperienceQ: "Avez-vous déjà accueilli des voyageurs ?",
        expAirbnb: "Airbnb",
        expBooking: "Booking",
        expBoth: "Les deux",
        expNew: "Nouvel hôte",
        hostActivityQ: "À quel rythme comptez-vous accueillir ?",
        actOccasionally: "Occasionnellement",
        actWeekends: "Chaque week-end",
        actMostWeeks: "La plupart des semaines",
        actFullTime: "À temps plein",
        propertyDetails: "Détails du bien",
        propertyDetailsPh: "Partagez un site, Instagram ou une courte description…",
        submit: "Rejoindre la liste d'attente",
        submitting: "Envoi…",
        successTitle: "Bienvenue dans le programme Hôtes fondateurs.",
        successBody: "Votre candidature a bien été reçue.",
        successBody2:
          "Nous l'examinerons et contacterons les hôtes approuvés avant le lancement public.",
        successTimeline: "Invitations prévues : fin août 2026.",
        successThanks: "Merci de contribuer à l'avenir de l'hospitalité marocaine.",
        successDone: "Terminé",
        errCity: "Veuillez sélectionner une ville.",
        errPropertyType: "Veuillez sélectionner un type de bien.",
        errStep2: "Veuillez répondre aux questions sur vos biens, votre expérience et votre activité.",
        errSubmit: "Impossible d'envoyer pour le moment. Réessayez.",
        errGeneric: "Une erreur s'est produite.",
      },
      page: {
        whyTitle: "Pourquoi héberger avec Nexa",
        why1: "Plus de visibilité",
        why2: "0 % de commission pendant 3 mois",
        why3: "Plateforme pensée pour le Maroc",
        why4: "Onboarding dédié",
        howTitle: "Comment ça marche",
        how1: "Postuler",
        how2: "Examen",
        how3: "Être approuvé",
        how4: "Publier votre bien",
        how5: "Recevoir des réservations",
        diffTitle: "Pourquoi Nexa ?",
        diff1: "Conçu pour le Maroc",
        diff2: "Hôtes vérifiés",
        diff3: "Tarification transparente",
        diff4: "Marketplace axée sur la qualité",
        diff5: "Support local",
        faqTitle: "FAQ",
        faq1Q: "Quand Nexa lance-t-il ?",
        faq1A:
          "Le lancement public est prévu fin 2026. Les hôtes fondateurs reçoivent invitations et onboarding avant — prévu fin août 2026.",
        faq2Q: "Qui peut postuler ?",
        faq2A:
          "Toute personne qui possède ou gère un hébergement au Maroc — appartements, villas, riads, hôtels, auberges, etc.",
        faq3Q: "Combien de temps dure la commission à 0 % ?",
        faq3A:
          "Les hôtes fondateurs bénéficient de 0 % de commission pendant leurs trois premiers mois après le lancement.",
        faq4Q: "Puis-je publier plusieurs biens ?",
        faq4A: "Oui. Indiquez combien vous souhaitez publier dans la candidature.",
        faq5Q: "Faut-il une expérience Airbnb ?",
        faq5A: "Non. Les nouveaux hôtes et les hôtes expérimentés sont les bienvenus.",
        faq6Q: "Comment saurai-je si je suis accepté ?",
        faq6A: "Nous enverrons un e-mail aux hôtes approuvés avec la suite avant le lancement public.",
      },
      footer: {
        tagline: "Construire la marketplace d'hébergement la plus digne de confiance au Maroc",
        terms: "Conditions",
        privacy: "Confidentialité",
        copyright: "© 2026 Nexa Stays. Hospitalité marocaine vérifiée.",
      },
    },
    ar: {
      meta: {
        indexTitle: "كن أحد أول 100 مضيف | Nexa Stays",
        indexDesc:
          "انضم إلى برنامج المضيفين المؤسسين على Nexa Stays. بدون عمولة خلال أول 3 أشهر. محدود بأول 100 مضيف معتمد في المغرب.",
      },
      nav: {
        lang: "اللغة",
      },
      apply: {
        scarcity: "برنامج المضيفين المؤسسين · محدود بأول 100 مضيف معتمد",
        heroTitle: "كن أحد أول 100 مضيف على Nexa Stays",
        heroSub: "احصل على بدون عمولة خلال أول 3 أشهر.",
        tick1: "برنامج المضيفين المؤسسين",
        tick2: "أولوية في الانضمام",
        tick3: "ظهور عند الإطلاق",
        urgency: "تُراجع الطلبات حسب ترتيب استلامها.",
        trustTitle: "برنامج المضيفين المؤسسين",
        trust1: "محدود بأول 100 مضيف معتمد",
        trust2: "لا يلزم دفع أي مبلغ",
        trust3: "يستغرق أقل من دقيقتين",
        step1of2: "الخطوة 1 من 2",
        step2of2: "الخطوة 2 من 2",
        continue: "متابعة",
        backStep: "رجوع",
        fullName: "الاسم الكامل",
        fullNamePh: "اسمك الكامل",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        emailPh: "you@example.com",
        city: "المدينة في المغرب",
        cityPlaceholder: "اختر مدينة",
        cityOther: "أخرى",
        propertyType: "نوع العقار",
        apartment: "شقة",
        villa: "فيلا",
        riad: "رياض",
        hotel: "فندق",
        hostel: "نزل",
        propertyCountQ: "كم عقاراً ترغب في إدراجه؟",
        hostExperienceQ: "هل استضفت من قبل؟",
        expAirbnb: "Airbnb",
        expBooking: "Booking",
        expBoth: "كلاهما",
        expNew: "مضيف جديد",
        hostActivityQ: "ما مستوى النشاط المتوقع؟",
        actOccasionally: "أحياناً",
        actWeekends: "كل عطلة نهاية أسبوع",
        actMostWeeks: "معظم الأسابيع",
        actFullTime: "استضافة بدوام كامل",
        propertyDetails: "تفاصيل العقار",
        propertyDetailsPh: "شارك موقعاً أو إنستغرام أو وصفاً قصيراً…",
        submit: "انضم إلى قائمة الانتظار",
        submitting: "جارٍ الإرسال…",
        successTitle: "مرحباً بك في برنامج المضيفين المؤسسين.",
        successBody: "تم استلام طلبك.",
        successBody2: "سنراجعه ونتواصل مع المضيفين المعتمدين قبل الإطلاق العام.",
        successTimeline: "الدعوات المتوقعة: أواخر أغسطس 2026.",
        successThanks: "شكراً لمساعدتك في بناء مستقبل الضيافة المغربية.",
        successDone: "تم",
        errCity: "يرجى اختيار مدينة.",
        errPropertyType: "يرجى اختيار نوع العقار.",
        errStep2: "يرجى الإجابة عن أسئلة العقارات والخبرة والنشاط.",
        errSubmit: "تعذّر الإرسال الآن. حاول مرة أخرى.",
        errGeneric: "حدث خطأ ما.",
      },
      page: {
        whyTitle: "لماذا تستضيف مع Nexa",
        why1: "ظهور أعلى",
        why2: "بدون عمولة لمدة 3 أشهر",
        why3: "منصة للمغرب أولاً",
        why4: "انضمام مخصص",
        howTitle: "كيف يعمل",
        how1: "قدّم طلباً",
        how2: "مراجعة",
        how3: "احصل على الموافقة",
        how4: "أدرج عقارك",
        how5: "ابدأ باستقبال الحجوزات",
        diffTitle: "لماذا Nexa؟",
        diff1: "مصمّم للمغرب",
        diff2: "مضيفون موثّقون",
        diff3: "تسعير شفاف",
        diff4: "سوق يضع الجودة أولاً",
        diff5: "دعم محلي",
        faqTitle: "الأسئلة الشائعة",
        faq1Q: "متى يُطلق Nexa؟",
        faq1A:
          "الإطلاق العام مخطط لأواخر 2026. يحصل المضيفون المؤسسون على الدعوات والانضمام قبل ذلك — المتوقع أواخر أغسطس 2026.",
        faq2Q: "من يمكنه التقديم؟",
        faq2A: "أي شخص يملك أو يدير إقامة في المغرب — شقق، فيلات، رياض، فنادق، نزل، وغيرها.",
        faq3Q: "كم تدوم بدون عمولة؟",
        faq3A: "يحصل المضيفون المؤسسون على بدون عمولة خلال أول ثلاثة أشهر بعد الإطلاق.",
        faq4Q: "هل يمكنني إدراج عدة عقارات؟",
        faq4A: "نعم. أخبرنا بعدد العقارات في الطلب.",
        faq5Q: "هل أحتاج خبرة Airbnb؟",
        faq5A: "لا. المضيفون الجدد وذوو الخبرة مرحّب بهم.",
        faq6Q: "كيف أعرف إن قُبلت؟",
        faq6A: "سنرسل بريداً للمضيفين المعتمدين بالخطوات التالية قبل الإطلاق العام.",
      },
      footer: {
        tagline: "نبني أكثر سوق إقامة موثوقية في المغرب",
        terms: "الشروط",
        privacy: "الخصوصية",
        copyright: "© 2026 Nexa Stays. ضيافة مغربية موثّقة.",
      },
    },
  };

  function normalize(lang) {
    if (!lang) return null;
    const base = String(lang).toLowerCase().split("-")[0];
    return SUPPORTED.includes(base) ? base : null;
  }

  function detect() {
    const stored = normalize(localStorage.getItem(STORAGE_KEY));
    if (stored) return stored;
    const nav = normalize(navigator.language) || normalize((navigator.languages || [])[0]);
    return nav || "en";
  }

  let current = detect();

  function get(path) {
    const parts = path.split(".");
    let node = dict[current];
    for (const p of parts) {
      if (node == null) return path;
      node = node[p];
    }
    return typeof node === "string" ? node : path;
  }

  function legalBase() {
    return `https://www.nexastays.ma/${current}`;
  }

  function applyDocument() {
    const html = document.documentElement;
    html.lang = current;
    html.dir = current === "ar" ? "rtl" : "ltr";
    html.dataset.lang = current;

    const titleKey = document.body?.dataset.i18nTitle;
    if (titleKey) document.title = get(titleKey);

    const descKey = document.body?.dataset.i18nDesc;
    if (descKey) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", get(descKey));
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = get(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = get(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      el.setAttribute("placeholder", get(key));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", get(key));
    });

    document.querySelectorAll('a[data-legal="terms"]').forEach((a) => {
      a.href = `${legalBase()}/terms`;
    });
    document.querySelectorAll('a[data-legal="privacy"]').forEach((a) => {
      a.href = `${legalBase()}/privacy`;
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const lang = btn.getAttribute("data-lang");
      const active = lang === current;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("is-active", active);
    });

    window.dispatchEvent(new CustomEvent("nexa:langchange", { detail: { lang: current } }));
  }

  function setLang(lang) {
    const next = normalize(lang);
    if (!next || next === current) {
      applyDocument();
      return;
    }
    current = next;
    try {
      localStorage.setItem(STORAGE_KEY, current);
    } catch {
      /* ignore */
    }
    applyDocument();
  }

  function bindSwitchers() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  }

  window.NexaI18n = {
    t: get,
    getLang: () => current,
    setLang,
    apply: applyDocument,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      bindSwitchers();
      applyDocument();
    });
  } else {
    bindSwitchers();
    applyDocument();
  }
})();
