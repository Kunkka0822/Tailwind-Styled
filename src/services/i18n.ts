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
      _label: 'We are a leading company proving technology solutions all over the world for over 2 years.'
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
      _label: '2 yılı aşkın bir süredir tüm dünyada teknoloji çözümleri üreten lider bir şirketiz.'
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
