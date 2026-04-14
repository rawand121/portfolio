import { Route, Routes } from "react-router-dom";
import EngineeringPortfolio from "./pages/EngineeringPortfolio";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  // Handle RTL direction for Arabic and Kurdish
  useEffect(() => {
    const rtlLanguages = ['ar', 'ku'];
    const isRTL = rtlLanguages.includes(i18n.language);
    
    // Set direction on document and html element
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // Also update body for consistency
    document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <Routes>
      <Route path="/" element={<EngineeringPortfolio />} />
    </Routes>
  );
}

export default App;
