import i18next from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      team: 'Team',
      contact: 'Contact',
      signin: 'Sign In',

      technology_it_solutions: 'TECHNOLOGY & IT SOLUTIONS',
      services_around_the_world: 'Services Around the World',
      digital: 'Digital',
      technology: 'Technology',
      it_solutions: 'It Solutions',
      get_started: 'Get Started',
      _label: 'We are a leading company proving technology solutions all over the world for over 2 years.',

      feature_title: 'What\'s so Special About RIVA STUDIO',
      feature_sub_text: 'OUR SPECIALYITY',
      feature_desc: 'We are always with you for a technology-integrated business structure. At the end of the day, going forward, a new normal that has evolved',
      analystics: 'Analystics',
      development: 'Development',
      solutions: 'Solutions',
      feature1: 'Experts Problem Solvers',
      feature2: 'Regular Updates & Bug fixes',
      feature3: 'Creative Product Analitic',
      feature4: 'High-Rated Quick Support',

      feat1: 'Happy Clients',
      feat2: 'Projects Done',
      feat3: 'Have Companies',
      feat4: 'Team Members',
      service_subtitle: 'SERVICES',
      service_title: 'Our Featured Services',
      service1: 'IT Management',
      service2: 'Data Security',
      service3: 'IT Counsulting',
      service4: 'Graphic Design',
      service5: 'IT Design',
      service6: 'Business Consulting',
      service_desc: 'We denounce with righteous indignation & dislike men who are so beguiled to righteous demorlized.',
    },
  },
  tr: {
    translation: {
      home: 'Anasayfa',
      about: 'Hakkımızda',
      services: 'Çözümlerimiz',
      team: 'Ekibimiz',
      contact: 'İletişim',
      signin: 'Teklif Al',

      technology_it_solutions: 'TEKNOLOJİ & BT ÇÖZÜMLERİ',
      services_around_the_world: 'Hizmetleri dünyanın her yerinde',
      digital: 'Dijital',
      technology: 'TEKNOLOJİ',
      it_solutions: 'Bilişim Çözümleri',
      get_started: 'Teklif al',
      _label: '2 yılı aşkın bir süredir tüm dünyada teknoloji çözümleri üreten lider bir şirketiz.',

      feature_title: 'RIVA STUDIO Bu Kadar Özel Yapan Nedir?',
      feature_sub_text: 'Çözümlerimiz',
      feature_desc: 'Teknolojiyle Bütünleşik İş Yapısı İçin Her Zaman Yanınızdayız',
      analystics: 'Mantıksal Analiz',
      development: 'Geliştirme',
      solutions: 'Çözümler',
      feature1: 'Uzman Problem Çözücüler',
      feature2: 'Düzenli Güncellemeler ve Hata düzeltmeleri',
      feature3: 'Yaratıcı Ürün Analitiği',
      feature4: 'Yüksek Puanlı Hızlı Destek',

      feat1: 'Mutlu Müşteriler',
      feat2: 'Tamamlanan Projeler',
      feat3: 'Projeler',
      feat4: 'Takım üyeleri',
      service_subtitle: 'Beraber Çalıştığımızda Neler Yapabiliriz?',
      service_title: 'Dijital dünya günümüzün olmazsa olmazı. Peki kaliteli bir dijital dönüşüm firmanıza neler katabilir?',
      service1: 'Masaüstü uygulamaları',
      service2: 'Altyapı çözümleri',
      service3: 'Mobil uygulamaları',
      service4: 'Web Yazılım',
      service5: 'Veri güvenliği',
      service6: 'Seo Yönetimi',
      service_desc: 'Haklı bir öfkeyle kınıyoruz ve erdemlilerin demoralize edilmesine bu kadar ayartılmış erkeklerden hoşlanmıyoruz.',
    }
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "tr",
    lng: "tr",
    supportedLngs: ["en", "tr"],
    interpolation: {
      escapeValue: false,
    },
    react: {useSuspense: false}
  }).then(r => console.log(r));

export default i18next;
