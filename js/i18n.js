(() => {
  const STORAGE_KEY = "nexa_waitlist_lang";
  const SUPPORTED = ["en", "fr", "ar"];

  const dict = {
    en: {
      meta: {
        indexTitle: "Nexa Stays — Become a Founding Host",
        indexDesc:
          "Join Morocco's verified short-stay marketplace. Become a founding host with 0% commission for your first 3 months.",
        applyTitle: "Host Application | Nexa Stays",
        applyDesc:
          "Apply to become a founding Nexa Stays host in Morocco. 0% commission for the first 3 months.",
      },
      nav: {
        whyHost: "Why Host",
        howItWorks: "How It Works",
        apply: "Apply",
        becomeHost: "Become a Host",
        becomeHostShort: "Apply",
        lang: "Language",
        back: "Back",
      },
      hero: {
        eyebrow: "Founding hosts · 0% commission for 3 months",
        title: "Turn your property into a trusted travel experience",
        subtitle:
          "Join Morocco’s verified short-stay marketplace — safety, transparency, and hospitality built for hosts and guests.",
        ctaPrimary: "Become a Nexa Host",
        ctaSecondary: "See how it works",
      },
      why: {
        title: "Why host with Nexa",
        subtitle: "Built for Moroccan properties that want clearer trust signals and cleaner guest journeys.",
        card1Title: "Host with confidence",
        card1Body: "Guests go through identity verification so you know who’s staying in your home.",
        card2Title: "Transparent earnings",
        card2Body:
          "Clear pricing, on-time payouts, and straightforward fees — founding hosts get 0% commission for 3 months.",
        card3Title: "Local support",
        card3Body: "A Moroccan team that understands riads, apartments, and guest expectations on the ground.",
      },
      how: {
        title: "How it works",
        subtitle: "From application to live listing — designed around verification, not guesswork.",
        step1Title: "Apply",
        step1Body: "Tell us about you and your property. We review founding applications within 48 hours.",
        step2Title: "Verify",
        step2Body: "Complete host identity checks and listing standards so guests can book with confidence.",
        step3Title: "Go live",
        step3Body: "Publish your stay, welcome verified guests, and enjoy founding-host commission terms.",
      },
      cta: {
        title: "Ready to join the founding hosts?",
        body: "Limited to the first 100 hosts. Apply now — we’ll reach out to start verification.",
        button: "Start your application",
      },
      footer: {
        tagline: "Verified stays in Morocco with more safety, transparency, and comfort.",
        hosts: "Hosts",
        support: "Support",
        legal: "Legal",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        copyright: "© 2026 Nexa Stays. Verified Moroccan hospitality.",
        badge: "Built for verified hosts & guests",
      },
      apply: {
        mobileEyebrow: "Founding hosts · first 100",
        mobilePromoBefore: "Enjoy",
        mobilePromoHighlight: "0% commission",
        mobilePromoAfter: "for your first 3 months.",
        mobileBenefit1: "Priority verification within 48 hours",
        mobileBenefit2: "Featured launch placement",
        mobileBenefit3: "Dedicated listing support",
        deskTitle: "Become a Founding Host",
        deskIntroBefore: "Join the first 100 hosts and enjoy",
        deskIntroHighlight: "0% commission",
        deskIntroAfter: "for your first 3 months.",
        benefit1Title: "Priority verification",
        benefit1Body: "Reviewed by our team within 48 hours.",
        benefit2Title: "Featured launch placement",
        benefit2Body: "Founding hosts get early visibility on Nexa Stays.",
        benefit3Title: "Dedicated support",
        benefit3Body: "Help with listing quality, photos, and go-live.",
        deskFooter: "Limited founding cohort · first 100 hosts",
        formTitle: "Host application",
        formSubtitle:
          "Tell us about your property. We’ll review and contact you within 48 hours to begin verification.",
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
        propertyCount: "Number of properties",
        propertyDetails: "Property details",
        propertyDetailsPh: "Share a website, Instagram, or a short description of your property…",
        submit: "Submit application",
        submitting: "Submitting…",
        footerBefore: "We’ll only use this to review your host application. See our",
        footerAnd: "and",
        footerAfter: ".",
        footerHelp: "Need help?",
        privacy: "Privacy Policy",
        terms: "Terms",
        successTitle: "Application received",
        successBody:
          "Thank you. Our hospitality team will review your application and reach out within 48 hours.",
        successDone: "Done",
        errCity: "Please select a city.",
        errSubmit: "Could not submit right now. Please try again.",
        errGeneric: "Something went wrong.",
      },
    },
    fr: {
      meta: {
        indexTitle: "Nexa Stays — Devenez hôte fondateur",
        indexDesc:
          "Rejoignez la marketplace marocaine de séjours vérifiés. Devenez hôte fondateur avec 0 % de commission pendant vos 3 premiers mois.",
        applyTitle: "Candidature hôte | Nexa Stays",
        applyDesc:
          "Postulez pour devenir hôte fondateur Nexa Stays au Maroc. 0 % de commission pendant les 3 premiers mois.",
      },
      nav: {
        whyHost: "Pourquoi héberger",
        howItWorks: "Comment ça marche",
        apply: "Postuler",
        becomeHost: "Devenir hôte",
        becomeHostShort: "Postuler",
        lang: "Langue",
        back: "Retour",
      },
      hero: {
        eyebrow: "Hôtes fondateurs · 0 % de commission pendant 3 mois",
        title: "Transformez votre bien en une expérience de voyage de confiance",
        subtitle:
          "Rejoignez la marketplace marocaine de séjours vérifiés — sécurité, transparence et hospitalité pour hôtes et voyageurs.",
        ctaPrimary: "Devenir hôte Nexa",
        ctaSecondary: "Voir comment ça marche",
      },
      why: {
        title: "Pourquoi héberger avec Nexa",
        subtitle:
          "Conçu pour les biens marocains qui veulent plus de confiance et un parcours voyageur plus clair.",
        card1Title: "Hébergez en toute confiance",
        card1Body:
          "Les voyageurs passent par une vérification d’identité pour que vous sachiez qui séjourne chez vous.",
        card2Title: "Revenus transparents",
        card2Body:
          "Tarifs clairs, paiements à temps et frais simples — les hôtes fondateurs bénéficient de 0 % de commission pendant 3 mois.",
        card3Title: "Support local",
        card3Body:
          "Une équipe marocaine qui comprend les riads, les appartements et les attentes des voyageurs sur le terrain.",
      },
      how: {
        title: "Comment ça marche",
        subtitle: "De la candidature à l’annonce en ligne — conçu autour de la vérification, pas de l’approximation.",
        step1Title: "Postuler",
        step1Body:
          "Parlez-nous de vous et de votre bien. Nous examinons les candidatures fondatrices sous 48 heures.",
        step2Title: "Vérifier",
        step2Body:
          "Complétez les contrôles d’identité hôte et les standards d’annonce pour que les voyageurs réservent en confiance.",
        step3Title: "Mettre en ligne",
        step3Body:
          "Publiez votre séjour, accueillez des voyageurs vérifiés et profitez des conditions commission des hôtes fondateurs.",
      },
      cta: {
        title: "Prêt à rejoindre les hôtes fondateurs ?",
        body: "Limité aux 100 premiers hôtes. Postulez maintenant — nous vous contacterons pour démarrer la vérification.",
        button: "Commencer votre candidature",
      },
      footer: {
        tagline: "Séjours vérifiés au Maroc avec plus de sécurité, de transparence et de confort.",
        hosts: "Hôtes",
        support: "Support",
        legal: "Mentions légales",
        terms: "Conditions d’utilisation",
        privacy: "Politique de confidentialité",
        copyright: "© 2026 Nexa Stays. Hospitalité marocaine vérifiée.",
        badge: "Conçu pour hôtes et voyageurs vérifiés",
      },
      apply: {
        mobileEyebrow: "Hôtes fondateurs · 100 premiers",
        mobilePromoBefore: "Profitez de",
        mobilePromoHighlight: "0 % de commission",
        mobilePromoAfter: "pendant vos 3 premiers mois.",
        mobileBenefit1: "Vérification prioritaire sous 48 heures",
        mobileBenefit2: "Mise en avant au lancement",
        mobileBenefit3: "Accompagnement dédié pour votre annonce",
        deskTitle: "Devenez hôte fondateur",
        deskIntroBefore: "Rejoignez les 100 premiers hôtes et profitez de",
        deskIntroHighlight: "0 % de commission",
        deskIntroAfter: "pendant vos 3 premiers mois.",
        benefit1Title: "Vérification prioritaire",
        benefit1Body: "Examinée par notre équipe sous 48 heures.",
        benefit2Title: "Mise en avant au lancement",
        benefit2Body: "Les hôtes fondateurs bénéficient d’une visibilité précoce sur Nexa Stays.",
        benefit3Title: "Support dédié",
        benefit3Body: "Aide sur la qualité de l’annonce, les photos et la mise en ligne.",
        deskFooter: "Cohorte fondatrice limitée · 100 premiers hôtes",
        formTitle: "Candidature hôte",
        formSubtitle:
          "Parlez-nous de votre bien. Nous examinons et vous contactons sous 48 heures pour démarrer la vérification.",
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
        propertyCount: "Nombre de biens",
        propertyDetails: "Détails du bien",
        propertyDetailsPh: "Partagez un site, Instagram ou une courte description de votre bien…",
        submit: "Envoyer la candidature",
        submitting: "Envoi…",
        footerBefore: "Nous utilisons ces informations uniquement pour examiner votre candidature. Consultez notre",
        footerAnd: "et nos",
        footerAfter: ".",
        footerHelp: "Besoin d’aide ?",
        privacy: "Politique de confidentialité",
        terms: "Conditions",
        successTitle: "Candidature reçue",
        successBody:
          "Merci. Notre équipe hospitalité examinera votre candidature et vous contactera sous 48 heures.",
        successDone: "Terminé",
        errCity: "Veuillez sélectionner une ville.",
        errSubmit: "Impossible d’envoyer pour le moment. Réessayez.",
        errGeneric: "Une erreur s’est produite.",
      },
    },
    ar: {
      meta: {
        indexTitle: "Nexa Stays — كن مضيفاً مؤسساً",
        indexDesc:
          "انضم إلى سوق الإقامات القصيرة الموثّقة في المغرب. كن مضيفاً مؤسساً بدون عمولة خلال أول 3 أشهر.",
        applyTitle: "طلب انضمام المضيف | Nexa Stays",
        applyDesc:
          "قدّم طلباً لتصبح مضيفاً مؤسساً على Nexa Stays في المغرب. بدون عمولة خلال أول 3 أشهر.",
      },
      nav: {
        whyHost: "لماذا الاستضافة",
        howItWorks: "كيف يعمل",
        apply: "قدّم طلباً",
        becomeHost: "كن مضيفاً",
        becomeHostShort: "قدّم طلباً",
        lang: "اللغة",
        back: "رجوع",
      },
      hero: {
        eyebrow: "المضيفون المؤسسون · بدون عمولة لمدة 3 أشهر",
        title: "حوّل عقارك إلى تجربة سفر موثوقة",
        subtitle:
          "انضم إلى سوق الإقامات القصيرة الموثّقة في المغرب — أمان وشفافية وضيافة للمضيفين والضيوف.",
        ctaPrimary: "كن مضيفاً على Nexa",
        ctaSecondary: "اطّلع على كيفية العمل",
      },
      why: {
        title: "لماذا تستضيف مع Nexa",
        subtitle: "مصمّم للعقارات المغربية التي تريد إشارات ثقة أوضح ومسار ضيف أنظف.",
        card1Title: "استضف بثقة",
        card1Body: "يمر الضيوف بتحقق من الهوية حتى تعرف من يقيم في منزلك.",
        card2Title: "أرباح شفافة",
        card2Body:
          "أسعار واضحة ومدفوعات في الوقت المناسب ورسوم بسيطة — يحصل المضيفون المؤسسون على 0٪ عمولة لمدة 3 أشهر.",
        card3Title: "دعم محلي",
        card3Body: "فريق مغربي يفهم الرياض والشقق وتوقعات الضيوف على أرض الواقع.",
      },
      how: {
        title: "كيف يعمل",
        subtitle: "من الطلب إلى الإدراج المباشر — مصمّم حول التحقق وليس التخمين.",
        step1Title: "قدّم طلباً",
        step1Body: "أخبرنا عنك وعن عقارك. نراجع طلبات المضيفين المؤسسين خلال 48 ساعة.",
        step2Title: "تحقق",
        step2Body: "أكمل فحوصات هوية المضيف ومعايير الإدراج حتى يحجز الضيوف بثقة.",
        step3Title: "انشر",
        step3Body: "انشر إقامتك، واستقبل ضيوفاً موثّقين، واستفد من شروط عمولة المضيفين المؤسسين.",
      },
      cta: {
        title: "هل أنت مستعد للانضمام إلى المضيفين المؤسسين؟",
        body: "محدود بأول 100 مضيف. قدّم طلبك الآن — سنتواصل معك لبدء التحقق.",
        button: "ابدأ طلبك",
      },
      footer: {
        tagline: "إقامات موثّقة في المغرب بمزيد من الأمان والشفافية والراحة.",
        hosts: "المضيفون",
        support: "الدعم",
        legal: "قانوني",
        terms: "شروط الخدمة",
        privacy: "سياسة الخصوصية",
        copyright: "© 2026 Nexa Stays. ضيافة مغربية موثّقة.",
        badge: "مصمّم للمضيفين والضيوف الموثّقين",
      },
      apply: {
        mobileEyebrow: "المضيفون المؤسسون · أول 100",
        mobilePromoBefore: "استمتع بـ",
        mobilePromoHighlight: "بدون عمولة",
        mobilePromoAfter: "خلال أول 3 أشهر.",
        mobileBenefit1: "تحقق ذو أولوية خلال 48 ساعة",
        mobileBenefit2: "ظهور مميز عند الإطلاق",
        mobileBenefit3: "دعم مخصص للإدراج",
        deskTitle: "كن مضيفاً مؤسساً",
        deskIntroBefore: "انضم إلى أول 100 مضيف واستمتع بـ",
        deskIntroHighlight: "بدون عمولة",
        deskIntroAfter: "خلال أول 3 أشهر.",
        benefit1Title: "تحقق ذو أولوية",
        benefit1Body: "يراجعه فريقنا خلال 48 ساعة.",
        benefit2Title: "ظهور مميز عند الإطلاق",
        benefit2Body: "يحصل المضيفون المؤسسون على ظهور مبكر على Nexa Stays.",
        benefit3Title: "دعم مخصص",
        benefit3Body: "مساعدة في جودة الإدراج والصور والإطلاق.",
        deskFooter: "مجموعة مؤسسة محدودة · أول 100 مضيف",
        formTitle: "طلب انضمام المضيف",
        formSubtitle: "أخبرنا عن عقارك. سنراجع ونتواصل معك خلال 48 ساعة لبدء التحقق.",
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
        propertyCount: "عدد العقارات",
        propertyDetails: "تفاصيل العقار",
        propertyDetailsPh: "شارك موقعاً أو إنستغرام أو وصفاً قصيراً لعقارك…",
        submit: "إرسال الطلب",
        submitting: "جارٍ الإرسال…",
        footerBefore: "نستخدم هذه المعلومات فقط لمراجعة طلب المضيف. اطّلع على",
        footerAnd: "و",
        footerAfter: ".",
        footerHelp: "تحتاج مساعدة؟",
        privacy: "سياسة الخصوصية",
        terms: "الشروط",
        successTitle: "تم استلام الطلب",
        successBody: "شكراً لك. سيراجع فريق الضيافة طلبك ويتواصل معك خلال 48 ساعة.",
        successDone: "تم",
        errCity: "يرجى اختيار مدينة.",
        errSubmit: "تعذّر الإرسال الآن. حاول مرة أخرى.",
        errGeneric: "حدث خطأ ما.",
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
