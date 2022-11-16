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
