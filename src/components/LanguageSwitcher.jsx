import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ku', name: 'Kurdî', flag: '🇮🇶' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];
  const rtlLanguages = ['ar', 'ku'];
  const isRTL = rtlLanguages.includes(i18n.language);

  return (
    <div className="language-switcher" ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: '#fff',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}
      >
        <Icon icon="mdi:translate" style={{ fontSize: '20px' }} />
        <span style={{ fontSize: '18px' }}>{currentLang.flag}</span>
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            [isRTL ? 'left' : 'right']: 0,
            marginTop: '8px',
            minWidth: '150px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => changeLanguage(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px',
                border: 'none',
                background: i18n.language === lang.code ? '#f0f0f0' : 'transparent',
                width: '100%',
                textAlign: isRTL ? 'right' : 'left',
                cursor: 'pointer',
                color: '#333',
                transition: 'background 0.2s',
                flexDirection: rtlLanguages.includes(lang.code) ? 'row-reverse' : 'row',
              }}
              onMouseEnter={(e) => {
                if (i18n.language !== lang.code) {
                  e.target.style.background = '#f8f8f8';
                }
              }}
              onMouseLeave={(e) => {
                if (i18n.language !== lang.code) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
