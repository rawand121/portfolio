import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactInfo({ contactInfoData }) {
  const { t } = useTranslation();
  return (
    <div className="contact-info">
      {contactInfoData.map((item, index) => {
        let titleKey = '';
        if (item.title === 'Write an e-mail') titleKey = 'contact.contactInfo.writeEmail';
        else if (item.title === 'Call me') titleKey = 'contact.contactInfo.callMe';
        
        return (
          <div
            className="contact-info-in"
            key={index}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={index * 100}
          >
            <label>{titleKey ? t(titleKey) : item.title}</label>
            {item.email && <a href={`mailto:${item.email}`}>{item.email}</a>}
            {item.tel && <a href={`tel:${item.tel}`}>{item.tel}</a>}
          </div>
        );
      })}
    </div>
  );
}
