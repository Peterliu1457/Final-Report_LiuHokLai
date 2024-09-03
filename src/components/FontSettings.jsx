import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const FontSettings = () => {
    const { t } = useTranslation();
    const [fontSize, setFontSize] = useState(() => Number(localStorage.getItem('fontSize')) || 18);


    const handleFontSizeChange = (event) => {
        setFontSize(Number(event.target.value));
    };

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize);

        document.documentElement.classList.remove('text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl');
        if (fontSize === 12) {
            document.documentElement.classList.add('text-xs');
        } else if (fontSize === 15) {
            document.documentElement.classList.add('text-sm');
        } else if (fontSize === 18) {
            document.documentElement.classList.add('text-base');
        } else if (fontSize === 21) {
            document.documentElement.classList.add('text-lg');
        } else if (fontSize === 24) {
            document.documentElement.classList.add('text-xl');
        }
    }, [fontSize]);

    return (
        <div className="border p-4 flex items-center">
            <div className="mr-4 text-gray-800">{t('fontSize')}</div>
            <div className="flex-grow">
                <div className="flex justify-between items-center text-gray-800 mb-2">
                    <span>{t('smallest')}</span>
                    <span>{t('small')}</span>
                    <span>{t('medium')}</span>
                    <span>{t('large')}</span>
                    <span>{t('largest')}</span>
                </div>
                <input
                    type="range"
                    min="12"
                    max="24"
                    step="3"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default FontSettings;
