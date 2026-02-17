export const clinic = {
  name: "Andrea Alonso fisioterapia",
  logo: "/images/logo.png",
  tagline: "Fisioterapia de confianza en Cantabria",
  description: "Andrea Alonso fisioterapia es una clínica ambulatoria en Cantabria con 5 estrellas en Google y 45 reseñas. Especializada en fisioterapia manual, lesiones deportivas, rehabilitación de hombro y tratamiento personalizado. Andrea ofrece atención técnica y cercana con resultados visibles desde las primeras sesiones, adaptándose a las necesidades de cada paciente.",
  colors: {
    primary: "#04b499",
    secondary: "#583526",
    accent: "#583526",
    neutral: "#ebf9f7"
  },
  phone: "685 62 74 43",
  whatsapp: "+34685627443",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Calle Jesús de Monasterio, 24, entresuelo derecha, 39010 Santander, Cantabria, España",
    city: "Cantabria",
    province: "Álava",
    postalCode: "39010",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=3881032088167569663&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Andrea%20Alonso%20fisioterapia%20%4043.4619%2C-3.81377&z=16&output=embed",
  coordinates: {
    lat: 43.4619,
    lng: -3.81377
  },
  schedule: [
    {
      days: "Lunes - Viernes",
      hours: "09:00 - 20:00"
    },
    {
      days: "Sábado",
      hours: "Consultar"
    },
    {
      days: "Domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 45,
    url: "https://maps.google.com/?cid=3881032088167569663&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "FitLab",
        rating: 5,
        text: "Andea es una gran profesional. Llevé a mi hija pequeña por un problema en el brazo y el trato ha sido de diez, con resultados desde la primera sesión. Ya la conocía por redes sociales y es un placer ver que la profesionalidad y conocimiento que transmite en sus vídeos se traduce en una atención real, técnica y cercana en consulta. Totalmente recomendable!",
        date: "Hace 2 semanas"
      },
      {
        author: "Adrián Aldridge",
        rating: 5,
        text: "Excelente profesional. Andrea me ha ayudado muchísimo con una rotura del labrum del hombro, aliviando el dolor y mejorando mi movilidad desde las primeras sesiones. Es mi fisioterapeuta de confianza para cualquier molestia o lesión. Trato cercano, gran conocimiento y resultados visibles. Totalmente recomendable.",
        date: "Hace 3 meses"
      },
      {
        author: "ainara gomez",
        rating: 5,
        text: "El trato es genial, fui recomendada por mi pareja y sin duda Andrea ha conseguido superar mis expectativas como fisioterapeuta. Te hace sentir cómoda desde el primer día, un trato personalizado y con movilidad ante las citas.",
        date: "Hace 10 meses"
      },
      {
        author: "Regina",
        rating: 5,
        text: "Una fisio genial ,yo soy muy desconfiada con los fisioterapeutas y me recomendaron a Andrea y la verdad que estoy encantada me ayuda mucho y me encuentro mucho mejor desde que voy.  Lo recomiendo 100%",
        date: "Hace 4 meses"
      },
      {
        author: "Reyes Depaz",
        rating: 5,
        text: "Muy buena profesional, desde hace siete años más o menos que me atiende cuando necesito ayuda de fisioterapia. Además como persona un 10.",
        date: "Hace 4 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas para aliviar el dolor y mejorar la movilidad articular. Tratamiento personalizado adaptado a las necesidades específicas de cada paciente. Resultados visibles desde las primeras sesiones con un enfoque técnico y profesional.",
      benefits: [
        "Alivio inmediato del dolor",
        "Mejora de la movilidad articular",
        "Tratamiento 100% personalizado"
      ],
      icon: "Hand"
    },
    {
      id: "lesiones-hombro",
      name: "Lesiones de Hombro",
      description: "Especialización en tratamiento de lesiones de hombro, incluyendo roturas de labrum y problemas de movilidad. Técnicas avanzadas para aliviar el dolor y recuperar la funcionalidad completa. Acompañamiento continuo durante todo el proceso de rehabilitación.",
      benefits: [
        "Reducción efectiva del dolor",
        "Recuperación de movilidad completa",
        "Seguimiento personalizado"
      ],
      icon: "Target"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación y prevención de lesiones deportivas con técnicas avanzadas. Tratamiento específico para deportistas que buscan volver a su actividad lo antes posible. Enfoque integral que combina terapia manual con ejercicios de rehabilitación.",
      benefits: [
        "Recuperación acelerada",
        "Prevención de recaídas",
        "Vuelta segura al deporte"
      ],
      icon: "Dumbbell"
    },
    {
      id: "fisioterapia-pediatrica",
      name: "Fisioterapia Pediátrica",
      description: "Tratamiento especializado para niños con problemas musculoesqueléticos y lesiones. Atención cercana y adaptada a los más pequeños con resultados desde la primera sesión. Ambiente cómodo y seguro donde los niños se sienten tranquilos durante el tratamiento.",
      benefits: [
        "Trato especializado para niños",
        "Resultados rápidos y efectivos",
        "Ambiente confiable y cercano"
      ],
      icon: "Heart"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación",
      description: "Programas de rehabilitación personalizados para recuperar la funcionalidad después de lesiones o cirugías. Seguimiento continuo y adaptación del tratamiento según la evolución del paciente. Combinación de terapia manual con ejercicios específicos de recuperación.",
      benefits: [
        "Programas adaptados a tu evolución",
        "Seguimiento continuo",
        "Recuperación funcional completa"
      ],
      icon: "Activity"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Tratamiento de puntos gatillo miofasciales para eliminar contracturas y dolor crónico. Técnica efectiva para dolores musculares persistentes que no responden a otros tratamientos. Aplicación precisa y profesional para máximos resultados.",
      benefits: [
        "Eliminación de contracturas profundas",
        "Alivio del dolor crónico",
        "Resultados duraderos"
      ],
      icon: "Target"
    },
    {
      id: "tratamiento-dolor-cronico",
      name: "Tratamiento de Dolor Crónico",
      description: "Abordaje integral del dolor crónico con técnicas manuales avanzadas y terapias complementarias. Tratamiento personalizado que identifica y trata la causa raíz del dolor. Seguimiento continuo para mejorar tu calidad de vida de forma sostenible.",
      benefits: [
        "Reducción significativa del dolor",
        "Mejora de la calidad de vida",
        "Soluciones a largo plazo"
      ],
      icon: "Zap"
    },
    {
      id: "valoracion-personalizada",
      name: "Valoración Personalizada",
      description: "Evaluación completa de tu estado físico para diseñar un plan de tratamiento específico. Análisis detallado de tu lesión o molestia con explicación clara del proceso de recuperación. Primera sesión donde establecemos objetivos realistas y tiempos de tratamiento.",
      benefits: [
        "Diagnóstico preciso",
        "Plan de tratamiento personalizado",
        "Objetivos claros desde el inicio"
      ],
      icon: "Activity"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta",
      description: "Solicita tu cita por teléfono al 685 62 74 43 o WhatsApp. Flexibilidad horaria y movilidad ante las citas para adaptarnos a tu agenda. Respuesta rápida y atención personalizada desde el primer contacto."
    },
    {
      step: 2,
      title: "Valoración Inicial",
      description: "Evaluación completa de tu lesión o molestia con análisis detallado de tu estado físico. Diseñamos un plan de tratamiento personalizado explicando cada paso del proceso. Establecemos objetivos claros y tiempos de recuperación realistas."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Aplicamos técnicas manuales especializadas adaptadas a tus necesidades específicas. Tratamiento técnico y cercano donde te sentirás cómodo desde el primer día. Resultados visibles desde las primeras sesiones con alivio del dolor y mejora de movilidad."
    },
    {
      step: 4,
      title: "Seguimiento Continuo",
      description: "Acompañamiento durante todo el proceso de recuperación con seguimiento personalizado. Adaptamos el tratamiento según tu evolución para optimizar resultados. Apoyo continuo hasta tu completa recuperación y vuelta a tu actividad normal."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google",
      description: "Valoración de 5 estrellas basada en 45 reseñas reales de pacientes satisfechos. Nuestros pacientes destacan el trato cercano, la profesionalidad y los resultados visibles desde las primeras sesiones. Tu confianza es nuestra mejor carta de presentación.",
      icon: "Award"
    },
    {
      title: "Más de 7 Años de Experiencia",
      description: "Andrea cuenta con más de 7 años de experiencia tratando todo tipo de lesiones y dolencias. Profesional de confianza que combina conocimiento técnico avanzado con un trato humano y cercano. Experiencia demostrada en fisioterapia manual, lesiones deportivas y rehabilitación.",
      icon: "CheckCircle"
    },
    {
      title: "Resultados desde la Primera Sesión",
      description: "La mayoría de nuestros pacientes experimentan alivio del dolor y mejora de movilidad desde la primera sesión. Aplicamos técnicas manuales especializadas con enfoque personalizado para cada caso. Tratamiento efectivo que marca la diferencia desde el primer día.",
      icon: "Target"
    },
    {
      title: "Atención Personalizada y Flexible",
      description: "Cada tratamiento se diseña específicamente para tus necesidades con seguimiento continuo. Ofrecemos flexibilidad horaria y movilidad ante las citas para adaptarnos a tu agenda. Te hacemos sentir cómodo desde el primer día con un trato cercano y profesional.",
      icon: "Users"
    }
  ],
  team: [
    {
      name: "Andrea Alonso",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Andrea Alonso fisioterapia nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Andrea Alonso fisioterapia - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Andrea Alonso fisioterapia - Imagen 2"
    }
  ],
  faq: [
    {
      question: "¿Qué tipo de lesiones trata Andrea Alonso fisioterapia?",
      answer: "En Andrea Alonso fisioterapia tratamos lesiones musculoesqueléticas, problemas de hombro como roturas de labrum, lesiones deportivas, dolor crónico, contracturas y molestias en niños. Nos especializamos en fisioterapia manual con técnicas avanzadas para todo tipo de pacientes. Cada tratamiento es personalizado según las necesidades específicas de cada persona."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "El número de sesiones depende del tipo y gravedad de tu lesión, pero muchos pacientes experimentan alivio y mejora desde la primera sesión. Durante la valoración inicial establecemos un plan de tratamiento con objetivos y tiempos realistas. Realizamos seguimiento continuo y adaptamos el tratamiento según tu evolución para optimizar tu recuperación."
    },
    {
      question: "¿Cómo puedo solicitar una cita?",
      answer: "Puedes solicitar tu cita llamando al 685 62 74 43 o enviando un mensaje por WhatsApp. Ofrecemos flexibilidad horaria y movilidad ante las citas para adaptarnos a tu agenda. Respuesta rápida y atención personalizada desde el primer contacto para que puedas comenzar tu tratamiento cuanto antes."
    },
    {
      question: "¿Andrea trata a niños?",
      answer: "Sí, en Andrea Alonso fisioterapia ofrecemos tratamiento especializado para niños con un trato cercano y adaptado a los más pequeños. Tenemos experiencia en problemas de brazo, lesiones y otras molestias infantiles con resultados desde la primera sesión. Creamos un ambiente cómodo y seguro donde los niños se sienten tranquilos durante el tratamiento."
    },
    {
      question: "¿Qué opinan los pacientes sobre el servicio?",
      answer: "Andrea Alonso fisioterapia cuenta con una valoración de 5 estrellas en Google basada en 45 reseñas de pacientes reales. Los pacientes destacan el trato cercano, la profesionalidad, los resultados visibles desde las primeras sesiones y la atención personalizada. Muchos mencionan que es su fisioterapeuta de confianza y recomiendan el servicio al 100%."
    },
    {
      question: "¿Qué hace diferente a Andrea Alonso fisioterapia?",
      answer: "La combinación de profesionalidad técnica con un trato cercano y personalizado nos diferencia. Andrea transmite el mismo conocimiento y cercanía que muestra en redes sociales en cada consulta presencial. Con más de 7 años de experiencia, ofrecemos flexibilidad en las citas, seguimiento continuo y resultados visibles desde las primeras sesiones."
    },
    {
      question: "¿Tratáis lesiones deportivas y de hombro?",
      answer: "Sí, las lesiones deportivas y problemas de hombro son una de nuestras especialidades en Andrea Alonso fisioterapia. Tenemos amplia experiencia en roturas de labrum, problemas de movilidad del hombro y lesiones deportivas diversas. Aplicamos técnicas manuales avanzadas que alivian el dolor y mejoran la movilidad desde las primeras sesiones, con seguimiento hasta la recuperación completa."
    },
    {
      question: "¿Dónde está ubicada la clínica?",
      answer: "Andrea Alonso fisioterapia está ubicada en Cantabria, Álava. Somos una clínica ambulatoria especializada en fisioterapia y tratamiento manual. Para conocer la dirección exacta y solicitar tu cita, puedes contactarnos al 685 62 74 43 por teléfono o WhatsApp."
    }
  ],
  seo: {
    titleTemplate: "%s | Andrea Alonso fisioterapia",
    defaultTitle: "Andrea Alonso Fisioterapia en Cantabria | 5★ Google",
    defaultDescription: "Fisioterapia manual especializada en Cantabria. Lesiones deportivas, hombro, dolor crónico y más. 5 estrellas en Google. Resultados desde la 1ª sesión. ☎️ 685 62 74 43",
    keywords: [
      "fisioterapia Cantabria",
      "Andrea Alonso fisioterapia",
      "fisioterapeuta Cantabria",
      "lesiones hombro Cantabria",
      "fisioterapia deportiva Cantabria",
      "fisioterapia manual Cantabria",
      "rehabilitación Cantabria",
      "fisioterapia pediátrica Cantabria",
      "dolor crónico Cantabria",
      "punción seca Cantabria",
      "clínica fisioterapia Álava",
      "fisioterapeuta Álava"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Andrea Alonso fisioterapia",
    cif: "",
    registeredAddress: "Calle Jesús de Monasterio, 24, entresuelo derecha, 39010 Santander, Cantabria, España, Cantabria, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Cantabria"
  ],
  heroDescription: "Clínica de fisioterapia especializada en tratamiento manual y lesiones deportivas. Con más de 7 años de experiencia, ofrecemos atención personalizada y resultados desde la primera sesión. Valoración de 5 estrellas en Google con 45 reseñas de pacientes satisfechos.",
  specialty: "Fisioterapia Manual Especializada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Preparado para recuperar tu movilidad y bienestar?",
  ctaDescription: "Solicita tu cita de valoración y comienza tu recuperación con un tratamiento personalizado. Trato cercano, técnica avanzada y resultados visibles desde las primeras sesiones.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
