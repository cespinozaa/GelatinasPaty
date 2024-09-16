import { useTranslation } from 'react-i18next';
import US from './pictures/USsmall.png';
import MX from './pictures/MXsmall.png';
import './LanguageSelector.css';




const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className="lang">
   
            <button onClick={() => changeLanguage('en')}>
                <img src={US} alt="EN" />
            </button>
            <button onClick={() => changeLanguage('es')}>
                <img src={MX} alt="ES" />
            </button>
                

        </div>

    ); 
};

export default LanguageSelector