(() => {
  const STORAGE_KEY = "nexa_waitlist_lang";
  const SUPPORTED = ["en", "fr", "ar"];

  const dict = {
    en: {
      meta: {
        indexTitle: "Become a Founding Host | Nexa Stays",
        indexDesc:
          "Applications are now open for the first 100 Nexa Stays founding hosts. Receive 0% commission for your first 3 months, priority onboarding, and exclusive launch benefits.",
        applyTitle: "Become one of the first 100 hosts | Nexa Stays",
        applyDesc:
          "Apply to become one of the first 100 Nexa Stays hosts in Morocco. Get 0% commission for your first 3 months.",
      },
      nav: {
        whyJoin: "Why Join",
        benefits: "Benefits",
        howItWorks: "How It Works",
        apply: "Apply",
        faq: "FAQ",
        becomeFoundingHost: "Become a Founding Host",
        becomeFoundingHostShort: "Apply",
        lang: "Language",
        back: "Back",
      },
      hero: {
        eyebrow: "Founding Host Program · Limited to 100 Properties",
        title: "Become One of Nexa Stays' First Founding Hosts",
        subtitle:
          "We're opening Nexa Stays with a carefully selected group of just 100 hosts across Morocco. Founding hosts receive <strong>0% commission for their first three months</strong>, priority onboarding, and exclusive launch benefits before public applications open.",
        ctaPrimary: "Become a Founding Host",
        ctaSecondary: "Learn More",
        badge1: "Limited to 100 Hosts",
        badge2: "0% Commission for 3 Months",
        badge3: "Verified Guests",
        badge4: "Moroccan Support Team",
      },
      whyJoin: {
        title: "Build the Future of Moroccan Hospitality",
        intro:
          "Nexa Stays isn't launching with thousands of listings. We're partnering with a carefully selected group of founding hosts to build Morocco's most trusted accommodation marketplace together.",
        card1Title: "Grow with us from day one",
        card1Body:
          "Become part of the platform before public launch and benefit from exclusive founding-host advantages that won't be available later.",
        card2Title: "Keep more of every booking",
        card2Body:
          "Founding hosts enjoy 0% commission for the first three months, helping you maximize revenue while growing with the platform.",
        card3Title: "Host verified guests",
        card3Body:
          "Every booking goes through identity verification, giving hosts greater confidence about who's staying in their property.",
        card4Title: "Built specifically for Morocco",
        card4Body:
          "Designed around Moroccan hospitality, local regulations, local payments, and the expectations of travelers visiting Morocco.",
        card5Title: "Dedicated local support",
        card5Body:
          "Our team works directly with founding hosts to improve listings, solve issues quickly, and shape future platform features.",
        card6Title: "Influence future features",
        card6Body:
          "Your feedback matters. As a founding host, you'll influence new features, tools, and improvements before everyone else.",
      },
      benefits: {
        title: "Reserved for Founding Hosts",
        item1: "0% commission for your first 3 months",
        item2: "Priority application review",
        item3: "Early listing approval",
        item4: "Featured visibility after launch",
        item5: "Dedicated onboarding support",
        item6: "Early access to new features",
        item7: "Direct communication with the Nexa Stays team",
        item8: "Founding Host recognition",
      },
      who: {
        title: "Who Can Apply?",
        intro:
          "Whether you manage a single apartment or an entire collection of properties, we're looking for hosts who deliver exceptional guest experiences.",
        chip1: "Apartment",
        chip2: "Villa",
        chip3: "Riad",
        chip4: "Guest House",
        chip5: "Boutique Hotel",
        chip6: "Surf House",
        chip7: "Mountain Lodge",
        chip8: "Unique Stay",
      },
      how: {
        title: "How It Works",
        step1Title: "Apply",
        step1Body: "Complete a short application about yourself and your property.",
        step2Title: "Verify",
        step2Body: "Our team reviews your application and verifies your identity and listing.",
        step3Title: "Launch",
        step3Body:
          "We'll help prepare your property so you're ready to welcome guests when Nexa Stays officially launches.",
      },
      why100: {
        title: "Why Only 100 Founding Hosts?",
        p1: "We believe great marketplaces start with great hosts—not the biggest inventory.",
        p2: "By welcoming only 100 founding hosts, we can personally onboard every property, maintain high quality standards, and work closely with our community before opening to the public.",
        p3: "Together, we'll build the trusted travel platform Morocco deserves.",
      },
      finalCta: {
        title: "Applications Are Limited",
        body: "Once the first 100 founding hosts have been accepted, the introductory benefits—including 0% commission for three months—will no longer be available.",
        button: "Become a Founding Host",
      },
      faq: {
        title: "FAQ",
        q1: "Who can apply?",
        a1: "Anyone who owns or manages accommodation in Morocco, including apartments, villas, riads, guest houses, boutique hotels, and unique stays.",
        q2: "Is there a cost to join?",
        a2: "No. Applying is completely free.",
        q3: 'What does "0% commission for 3 months" mean?',
        a3: "If you're accepted as one of our first 100 founding hosts, Nexa Stays won't charge any commission on eligible bookings during your first three months after launch.",
        q4: "When will I hear back?",
        a4: "Most applications are reviewed within 48 hours.",
        q5: "Is Nexa Stays available across Morocco?",
        a5: "Yes. We're welcoming quality properties from every region of Morocco.",
        q6: "Why is Nexa Stays limiting applications?",
        a6: "To ensure every founding host receives personal onboarding and to maintain a high-quality marketplace before opening publicly.",
      },
      footer: {
        tagline: "Building Morocco's Most Trusted Accommodation Marketplace",
        subtext: "Join the founding hosts helping shape the future of travel in Morocco.",
        hosts: "Hosts",
        support: "Support",
        legal: "Legal",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        copyright: "© 2026 Nexa Stays. Verified Moroccan hospitality.",
      },
      apply: {
        scarcity: "Founding Host Program · Limited to the first 100 approved hosts",
        heroTitle: "Become one of the first 100 hosts on Nexa Stays",
        heroSub: "Get 0% commission for your first 3 months.",
        tick1: "Early access",
        tick2: "Dedicated onboarding",
        tick3: "Launch visibility",
        tick4: "0% commission for 3 months",
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
        propertyDetails: "Notes",
        propertyDetailsPh: "Share a website, Instagram, or a short description…",
        submit: "Submit application",
        submitting: "Submitting…",
        belowWhyTitle: "Why join Nexa",
        belowWhy1: "0% commission for your first 3 months as a founding host.",
        belowWhy2: "Verified guests and a Moroccan support team.",
        belowWhy3: "Priority onboarding before public launch.",
        belowHowTitle: "How it works",
        belowHow1: "Submit your application (2 minutes).",
        belowHow2: "We review and contact approved hosts.",
        belowHow3: "Onboarding before public launch — expected invitations Late August 2026.",
        belowFaqTitle: "FAQ",
        faq1Q: "Is the 0% commission limited?",
        faq1A: "Yes — founding hosts only, for the first three months after launch.",
        faq2Q: "Do I need an existing listing?",
        faq2A: "No. New hosts and experienced hosts are both welcome.",
        footerBefore: "We'll only use this to review your host application. See our",
        footerAnd: "and",
        footerAfter: ".",
        footerHelp: "Need help?",
        privacy: "Privacy Policy",
        terms: "Terms",
        successTitle: "You're on the waitlist",
        successBody: "We'll review your application.",
        successBody2: "Approved hosts will receive onboarding before public launch.",
        successTimeline: "Expected invitations: Late August 2026",
        successDone: "Done",
        errCity: "Please select a city.",
        errPropertyType: "Please select a property type.",
        errStep2: "Please answer the property and hosting questions.",
        errSubmit: "Could not submit right now. Please try again.",
        errGeneric: "Something went wrong.",
      },
    },
    fr: {
      meta: {
        indexTitle: "Devenez hôte fondateur | Nexa Stays",
        indexDesc:
          "Les candidatures sont ouvertes pour les 100 premiers hôtes fondateurs Nexa Stays. 0 % de commission pendant vos 3 premiers mois, onboarding prioritaire et avantages exclusifs de lancement.",
        applyTitle: "Devenez l'un des 100 premiers hôtes | Nexa Stays",
        applyDesc:
          "Postulez pour devenir l'un des 100 premiers hôtes Nexa Stays au Maroc. 0 % de commission pendant vos 3 premiers mois.",
      },
      nav: {
        whyJoin: "Pourquoi nous rejoindre",
        benefits: "Avantages",
        howItWorks: "Comment ça marche",
        apply: "Postuler",
        faq: "FAQ",
        becomeFoundingHost: "Devenir hôte fondateur",
        becomeFoundingHostShort: "Postuler",
        lang: "Langue",
        back: "Retour",
      },
      hero: {
        eyebrow: "Programme Hôtes fondateurs · Limité à 100 biens",
        title: "Devenez l'un des premiers hôtes fondateurs Nexa Stays",
        subtitle:
          "Nous ouvrons Nexa Stays avec un groupe soigneusement sélectionné de seulement 100 hôtes à travers le Maroc. Les hôtes fondateurs bénéficient de <strong>0 % de commission pendant leurs trois premiers mois</strong>, d'un onboarding prioritaire et d'avantages exclusifs de lancement avant l'ouverture au public.",
        ctaPrimary: "Devenir hôte fondateur",
        ctaSecondary: "En savoir plus",
        badge1: "Limité à 100 hôtes",
        badge2: "0 % de commission pendant 3 mois",
        badge3: "Voyageurs vérifiés",
        badge4: "Équipe de support marocaine",
      },
      whyJoin: {
        title: "Construisez l'avenir de l'hospitalité marocaine",
        intro:
          "Nexa Stays ne lance pas avec des milliers d'annonces. Nous nous associons à un groupe soigneusement sélectionné d'hôtes fondateurs pour bâtir ensemble la marketplace d'hébergement la plus digne de confiance au Maroc.",
        card1Title: "Grandissez avec nous dès le premier jour",
        card1Body:
          "Faites partie de la plateforme avant le lancement public et bénéficiez d'avantages exclusifs réservés aux hôtes fondateurs.",
        card2Title: "Gardez plus de chaque réservation",
        card2Body:
          "Les hôtes fondateurs bénéficient de 0 % de commission pendant les trois premiers mois pour maximiser leurs revenus tout en grandissant avec la plateforme.",
        card3Title: "Accueillez des voyageurs vérifiés",
        card3Body:
          "Chaque réservation passe par une vérification d'identité, pour plus de confiance sur qui séjourne chez vous.",
        card4Title: "Conçu spécifiquement pour le Maroc",
        card4Body:
          "Pensé pour l'hospitalité marocaine, les règles locales, les paiements locaux et les attentes des voyageurs au Maroc.",
        card5Title: "Support local dédié",
        card5Body:
          "Notre équipe travaille directement avec les hôtes fondateurs pour améliorer les annonces, résoudre les problèmes rapidement et façonner les prochaines fonctionnalités.",
        card6Title: "Influencez les prochaines fonctionnalités",
        card6Body:
          "Votre avis compte. En tant qu'hôte fondateur, vous influencez les nouvelles fonctionnalités, outils et améliorations avant tout le monde.",
      },
      benefits: {
        title: "Réservé aux hôtes fondateurs",
        item1: "0 % de commission pendant vos 3 premiers mois",
        item2: "Examen prioritaire de votre candidature",
        item3: "Approbation anticipée de l'annonce",
        item4: "Visibilité mise en avant après le lancement",
        item5: "Accompagnement d'onboarding dédié",
        item6: "Accès anticipé aux nouvelles fonctionnalités",
        item7: "Communication directe avec l'équipe Nexa Stays",
        item8: "Reconnaissance Hôte fondateur",
      },
      who: {
        title: "Qui peut postuler ?",
        intro:
          "Que vous gériez un seul appartement ou tout un portefeuille de biens, nous recherchons des hôtes qui offrent des expériences exceptionnelles.",
        chip1: "Appartement",
        chip2: "Villa",
        chip3: "Riad",
        chip4: "Maison d'hôtes",
        chip5: "Hôtel boutique",
        chip6: "Maison de surf",
        chip7: "Lodge de montagne",
        chip8: "Séjour unique",
      },
      how: {
        title: "Comment ça marche",
        step1Title: "Postuler",
        step1Body: "Complétez une courte candidature sur vous et votre bien.",
        step2Title: "Vérifier",
        step2Body: "Notre équipe examine votre candidature et vérifie votre identité et votre annonce.",
        step3Title: "Lancer",
        step3Body:
          "Nous vous aidons à préparer votre bien pour accueillir des voyageurs dès le lancement officiel de Nexa Stays.",
      },
      why100: {
        title: "Pourquoi seulement 100 hôtes fondateurs ?",
        p1: "Nous croyons qu'une grande marketplace commence par de grands hôtes—pas par le plus grand inventaire.",
        p2: "En accueillant seulement 100 hôtes fondateurs, nous pouvons onboarder chaque bien personnellement, maintenir un haut niveau de qualité et travailler étroitement avec notre communauté avant l'ouverture au public.",
        p3: "Ensemble, nous construirons la plateforme de voyage digne de confiance que le Maroc mérite.",
      },
      finalCta: {
        title: "Les candidatures sont limitées",
        body: "Une fois les 100 premiers hôtes fondateurs acceptés, les avantages d'introduction—dont 0 % de commission pendant trois mois—ne seront plus disponibles.",
        button: "Devenir hôte fondateur",
      },
      faq: {
        title: "FAQ",
        q1: "Qui peut postuler ?",
        a1: "Toute personne qui possède ou gère un hébergement au Maroc : appartements, villas, riads, maisons d'hôtes, hôtels boutique et séjours uniques.",
        q2: "Y a-t-il un coût pour rejoindre ?",
        a2: "Non. Postuler est entièrement gratuit.",
        q3: "Que signifie « 0 % de commission pendant 3 mois » ?",
        a3: "Si vous êtes accepté parmi nos 100 premiers hôtes fondateurs, Nexa Stays ne prendra aucune commission sur les réservations éligibles pendant vos trois premiers mois après le lancement.",
        q4: "Quand aurai-je une réponse ?",
        a4: "La plupart des candidatures sont examinées sous 48 heures.",
        q5: "Nexa Stays est-il disponible partout au Maroc ?",
        a5: "Oui. Nous accueillons des biens de qualité dans toutes les régions du Maroc.",
        q6: "Pourquoi Nexa Stays limite-t-il les candidatures ?",
        a6: "Pour garantir un onboarding personnel à chaque hôte fondateur et maintenir une marketplace de haute qualité avant l'ouverture au public.",
      },
      footer: {
        tagline: "Construire la marketplace d'hébergement la plus digne de confiance au Maroc",
        subtext: "Rejoignez les hôtes fondateurs qui façonnent l'avenir du voyage au Maroc.",
        hosts: "Hôtes",
        support: "Support",
        legal: "Mentions légales",
        terms: "Conditions d'utilisation",
        privacy: "Politique de confidentialité",
        copyright: "© 2026 Nexa Stays. Hospitalité marocaine vérifiée.",
      },
      apply: {
        scarcity: "Programme Hôtes fondateurs · Limité aux 100 premiers hôtes approuvés",
        heroTitle: "Devenez l'un des 100 premiers hôtes sur Nexa Stays",
        heroSub: "0 % de commission pendant vos 3 premiers mois.",
        tick1: "Accès anticipé",
        tick2: "Onboarding dédié",
        tick3: "Visibilité au lancement",
        tick4: "0 % de commission pendant 3 mois",
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
        propertyDetails: "Notes",
        propertyDetailsPh: "Partagez un site, Instagram ou une courte description…",
        submit: "Envoyer la candidature",
        submitting: "Envoi…",
        belowWhyTitle: "Pourquoi rejoindre Nexa",
        belowWhy1: "0 % de commission pendant vos 3 premiers mois en tant qu'hôte fondateur.",
        belowWhy2: "Voyageurs vérifiés et équipe de support marocaine.",
        belowWhy3: "Onboarding prioritaire avant le lancement public.",
        belowHowTitle: "Comment ça marche",
        belowHow1: "Envoyez votre candidature (2 minutes).",
        belowHow2: "Nous examinons et contactons les hôtes approuvés.",
        belowHow3: "Onboarding avant le lancement public — invitations prévues fin août 2026.",
        belowFaqTitle: "FAQ",
        faq1Q: "La commission à 0 % est-elle limitée ?",
        faq1A: "Oui — réservée aux hôtes fondateurs, pendant les trois premiers mois après le lancement.",
        faq2Q: "Faut-il déjà avoir une annonce ?",
        faq2A: "Non. Les nouveaux hôtes et les hôtes expérimentés sont les bienvenus.",
        footerBefore: "Nous utilisons ces informations uniquement pour examiner votre candidature. Consultez notre",
        footerAnd: "et nos",
        footerAfter: ".",
        footerHelp: "Besoin d'aide ?",
        privacy: "Politique de confidentialité",
        terms: "Conditions",
        successTitle: "Vous êtes sur la liste d'attente",
        successBody: "Nous allons examiner votre candidature.",
        successBody2: "Les hôtes approuvés recevront l'onboarding avant le lancement public.",
        successTimeline: "Invitations prévues : fin août 2026",
        successDone: "Terminé",
        errCity: "Veuillez sélectionner une ville.",
        errPropertyType: "Veuillez sélectionner un type de bien.",
        errStep2: "Veuillez répondre aux questions sur vos biens et votre expérience.",
        errSubmit: "Impossible d'envoyer pour le moment. Réessayez.",
        errGeneric: "Une erreur s'est produite.",
      },
    },
    ar: {
      meta: {
        indexTitle: "كن مضيفاً مؤسساً | Nexa Stays",
        indexDesc:
          "الطلبات مفتوحة لأول 100 مضيف مؤسس على Nexa Stays. احصل على بدون عمولة خلال أول 3 أشهر، وأولوية في الانضمام، ومزايا إطلاق حصرية.",
        applyTitle: "كن أحد أول 100 مضيف | Nexa Stays",
        applyDesc:
          "قدّم طلباً لتصبح أحد أول 100 مضيف على Nexa Stays في المغرب. بدون عمولة خلال أول 3 أشهر.",
      },
      nav: {
        whyJoin: "لماذا تنضم",
        benefits: "المزايا",
        howItWorks: "كيف يعمل",
        apply: "قدّم طلباً",
        faq: "الأسئلة الشائعة",
        becomeFoundingHost: "كن مضيفاً مؤسساً",
        becomeFoundingHostShort: "قدّم طلباً",
        lang: "اللغة",
        back: "رجوع",
      },
      hero: {
        eyebrow: "برنامج المضيفين المؤسسين · محدود بـ 100 عقار",
        title: "كن أحد أوائل المضيفين المؤسسين على Nexa Stays",
        subtitle:
          "نفتتح Nexa Stays مع مجموعة مختارة بعناية من 100 مضيف فقط في أنحاء المغرب. يحصل المضيفون المؤسسون على <strong>بدون عمولة خلال أول ثلاثة أشهر</strong>، وأولوية في الانضمام، ومزايا إطلاق حصرية قبل فتح الطلبات للعموم.",
        ctaPrimary: "كن مضيفاً مؤسساً",
        ctaSecondary: "اعرف المزيد",
        badge1: "محدود بـ 100 مضيف",
        badge2: "بدون عمولة لمدة 3 أشهر",
        badge3: "ضيوف موثّقون",
        badge4: "فريق دعم مغربي",
      },
      whyJoin: {
        title: "ابنِ مستقبل الضيافة المغربية",
        intro:
          "لا تطلق Nexa Stays بآلاف الإعلانات. نتشارك مع مجموعة مختارة بعناية من المضيفين المؤسسين لنبني معاً أكثر سوق إقامة موثوقية في المغرب.",
        card1Title: "انمُ معنا من اليوم الأول",
        card1Body:
          "كن جزءاً من المنصة قبل الإطلاق العام واستفد من مزايا حصرية للمضيفين المؤسسين لن تكون متاحة لاحقاً.",
        card2Title: "احتفظ بالمزيد من كل حجز",
        card2Body:
          "يستمتع المضيفون المؤسسون ببدون عمولة خلال الأشهر الثلاثة الأولى لتعظيم الإيرادات أثناء النمو مع المنصة.",
        card3Title: "استضف ضيوفاً موثّقين",
        card3Body:
          "يمر كل حجز بتحقق من الهوية، مما يمنح المضيفين ثقة أكبر بمن يقيم في عقارهم.",
        card4Title: "مصمّم خصيصاً للمغرب",
        card4Body:
          "مبني حول الضيافة المغربية والأنظمة المحلية والمدفوعات المحلية وتوقعات المسافرين إلى المغرب.",
        card5Title: "دعم محلي مخصص",
        card5Body:
          "يعمل فريقنا مباشرة مع المضيفين المؤسسين لتحسين الإعلانات وحل المشكلات بسرعة وتشكيل ميزات المنصة المستقبلية.",
        card6Title: "أثّر في الميزات المستقبلية",
        card6Body:
          "رأيك مهم. كمضيف مؤسس ستؤثر في الميزات والأدوات والتحسينات الجديدة قبل الجميع.",
      },
      benefits: {
        title: "محفوظ للمضيفين المؤسسين",
        item1: "بدون عمولة خلال أول 3 أشهر",
        item2: "مراجعة أولوية للطلب",
        item3: "موافقة مبكرة على الإعلان",
        item4: "ظهور مميز بعد الإطلاق",
        item5: "دعم انضمام مخصص",
        item6: "وصول مبكر للميزات الجديدة",
        item7: "تواصل مباشر مع فريق Nexa Stays",
        item8: "اعتراف بمضيف مؤسس",
      },
      who: {
        title: "من يمكنه التقديم؟",
        intro:
          "سواء أدّرت شقة واحدة أو مجموعة كاملة من العقارات، نبحث عن مضيفين يقدّمون تجارب ضيافة استثنائية.",
        chip1: "شقة",
        chip2: "فيلا",
        chip3: "رياض",
        chip4: "دار ضيافة",
        chip5: "فندق بوتيك",
        chip6: "بيت ركوب الأمواج",
        chip7: "نزل جبلي",
        chip8: "إقامة فريدة",
      },
      how: {
        title: "كيف يعمل",
        step1Title: "قدّم طلباً",
        step1Body: "أكمل طلباً قصيراً عنك وعن عقارك.",
        step2Title: "تحقق",
        step2Body: "يراجع فريقنا طلبك ويتحقق من هويتك وإعلانك.",
        step3Title: "أطلق",
        step3Body:
          "نساعدك على تجهيز عقارك لتكون جاهزاً لاستقبال الضيوف عند الإطلاق الرسمي لـ Nexa Stays.",
      },
      why100: {
        title: "لماذا 100 مضيف مؤسس فقط؟",
        p1: "نؤمن بأن الأسواق العظيمة تبدأ بمضيفين عظماء—وليس بأكبر مخزون.",
        p2: "باستقبال 100 مضيف مؤسس فقط، يمكننا ضم كل عقار شخصياً، والحفاظ على معايير جودة عالية، والعمل عن قرب مع مجتمعنا قبل الفتح للعموم.",
        p3: "معاً سنبني منصة السفر الموثوقة التي يستحقها المغرب.",
      },
      finalCta: {
        title: "الطلبات محدودة",
        body: "بمجرد قبول أول 100 مضيف مؤسس، لن تعود المزايا التمهيدية—بما فيها بدون عمولة لمدة ثلاثة أشهر—متاحة.",
        button: "كن مضيفاً مؤسساً",
      },
      faq: {
        title: "الأسئلة الشائعة",
        q1: "من يمكنه التقديم؟",
        a1: "أي شخص يملك أو يدير إقامة في المغرب، بما في ذلك الشقق والفيلات والرياض ودور الضيافة والفنادق البوتيك والإقامات الفريدة.",
        q2: "هل هناك تكلفة للانضمام؟",
        a2: "لا. التقديم مجاني تماماً.",
        q3: "ماذا يعني «بدون عمولة لمدة 3 أشهر»؟",
        a3: "إذا قُبلت كأحد أول 100 مضيف مؤسس، فلن تفرض Nexa Stays أي عمولة على الحجوزات المؤهلة خلال أول ثلاثة أشهر بعد الإطلاق.",
        q4: "متى سأتلقى رداً؟",
        a4: "تُراجع معظم الطلبات خلال 48 ساعة.",
        q5: "هل Nexa Stays متاحة في كل المغرب؟",
        a5: "نعم. نرحّب بعقارات عالية الجودة من كل مناطق المغرب.",
        q6: "لماذا تحدّ Nexa Stays من الطلبات؟",
        a6: "لضمان حصول كل مضيف مؤسس على انضمام شخصي والحفاظ على سوق عالي الجودة قبل الفتح للعموم.",
      },
      footer: {
        tagline: "نبني أكثر سوق إقامة موثوقية في المغرب",
        subtext: "انضم إلى المضيفين المؤسسين الذين يشكلون مستقبل السفر في المغرب.",
        hosts: "المضيفون",
        support: "الدعم",
        legal: "قانوني",
        terms: "شروط الخدمة",
        privacy: "سياسة الخصوصية",
        copyright: "© 2026 Nexa Stays. ضيافة مغربية موثّقة.",
      },
      apply: {
        scarcity: "برنامج المضيفين المؤسسين · محدود بأول 100 مضيف معتمد",
        heroTitle: "كن أحد أول 100 مضيف على Nexa Stays",
        heroSub: "احصل على بدون عمولة خلال أول 3 أشهر.",
        tick1: "وصول مبكر",
        tick2: "انضمام مخصص",
        tick3: "ظهور عند الإطلاق",
        tick4: "بدون عمولة لمدة 3 أشهر",
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
        propertyDetails: "ملاحظات",
        propertyDetailsPh: "شارك موقعاً أو إنستغرام أو وصفاً قصيراً…",
        submit: "إرسال الطلب",
        submitting: "جارٍ الإرسال…",
        belowWhyTitle: "لماذا تنضم إلى Nexa",
        belowWhy1: "بدون عمولة خلال أول 3 أشهر كمضيف مؤسس.",
        belowWhy2: "ضيوف موثّقون وفريق دعم مغربي.",
        belowWhy3: "أولوية في الانضمام قبل الإطلاق العام.",
        belowHowTitle: "كيف يعمل",
        belowHow1: "أرسل طلبك (دقيقتان).",
        belowHow2: "نراجع ونتواصل مع المضيفين المعتمدين.",
        belowHow3: "الانضمام قبل الإطلاق العام — الدعوات المتوقعة أواخر أغسطس 2026.",
        belowFaqTitle: "الأسئلة الشائعة",
        faq1Q: "هل بدون عمولة محدودة؟",
        faq1A: "نعم — للمضيفين المؤسسين فقط، خلال أول ثلاثة أشهر بعد الإطلاق.",
        faq2Q: "هل أحتاج إعلاناً موجوداً؟",
        faq2A: "لا. المضيفون الجدد وذوو الخبرة مرحّب بهم.",
        footerBefore: "نستخدم هذه المعلومات فقط لمراجعة طلبك. اطّلع على",
        footerAnd: "و",
        footerAfter: ".",
        footerHelp: "تحتاج مساعدة؟",
        privacy: "سياسة الخصوصية",
        terms: "الشروط",
        successTitle: "أنت على قائمة الانتظار",
        successBody: "سنراجع طلبك.",
        successBody2: "سيحصل المضيفون المعتمدون على الانضمام قبل الإطلاق العام.",
        successTimeline: "الدعوات المتوقعة: أواخر أغسطس 2026",
        successDone: "تم",
        errCity: "يرجى اختيار مدينة.",
        errPropertyType: "يرجى اختيار نوع العقار.",
        errStep2: "يرجى الإجابة عن أسئلة العقارات والاستضافة.",
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
