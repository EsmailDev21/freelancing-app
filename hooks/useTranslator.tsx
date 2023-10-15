// useTranslator.js
import { useSelector } from 'react-redux';
import { selectLanguage } from '../redux/LanguageSlice';

const useTranslator = (textObj) => {
  const language = useSelector(selectLanguage);

  const translate = () => {
    switch (language) {
      case 'ar':
        return textObj.ar;
      case 'fr':
        return textObj.fr;
      case 'en':
        return textObj.en;
      default:
        return textObj.en; // Default to English if language is not found
    }
  };

  return translate();
};

export default useTranslator;
