import React from "react";
import { useTranslation } from "react-i18next";
import { router } from "@inertiajs/react";
const languages = [
    { code: 'en', label: 'English' },
    { code: 'ps', label: 'Pashto' },
    { code: 'dr', label: 'Dari' }
];


export default function LanguageSwitcher() {
    const {i18n, t} = useTranslation();

    return (
        <div>
            <label>{t('language')}</label>
            <select>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
            </select>
        </div>
    )
}