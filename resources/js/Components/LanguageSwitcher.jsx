import React from "react";
import { useTranslation } from "react-i18next";
import { router } from "@inertiajs/react";

const languages = [
    { code: 'ps', label: 'پښتو', dir: 'rtl' },
    { code: 'dr', label: 'دری', dir: 'rtl' },
    { code: 'en', label: 'English', dir: 'ltr' },
];

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        const selectedLangObj = languages.find(lang => lang.code === selectedLanguage);

        // Change the language using i18next
        i18n.changeLanguage(selectedLanguage);

        // Dynamically update the <html> tag's lang and dir attributes
        document.documentElement.lang = selectedLanguage;
        document.documentElement.dir = selectedLangObj?.dir || 'rtl';

        // Reload the page if necessary
        router.reload();
    };

    return (
        <div>
            <label className="ml-2">{t('Language')}</label>
            <select className="btn btn-dash btn-success rounded-full" onChange={handleLanguageChange} value={i18n.language} title="Languages">
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label}
                    </option>
                ))}
            </select>
        </div>
    );
}