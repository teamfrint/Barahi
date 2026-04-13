import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('en')} 
        className={i18n.language.startsWith('en') ? 'active' : ''}
      >
        EN
      </button>
      <span className="divider">|</span>
      <button 
        onClick={() => changeLanguage('fi')} 
        className={i18n.language.startsWith('fi') ? 'active' : ''}
      >
        FI
      </button>
    </div>
  );
}

export default LanguageSwitcher;
