import React from 'react';
import { useTranslation } from "react-i18next";

function NavBar() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="bg-[#3E5896] p-4 flex items-center justify-between mt-5">
            <div className="flex space-x-6 text-white">
                <a href="#" className="hover:underline">{t('forum')}</a>
                <a href="#" className="hover:underline">{t('groups')}</a>
                <a href="#" className="hover:underline">{t('space')}</a>
                <a href="#" className="hover:underline">{t('videos')}</a>
                <a href="#" className="hover:underline">{t('ads')}</a>
                <a href="#" className="hover:underline">{t('ranking')}</a>
                <a href="#" className="hover:underline">{t('search')}</a>
                <a href="#" className="hover:underline">{t('self_upgrade')}</a>
                <a href="#" className="hover:underline">{t('vip')}</a>
            </div>

            <div className="flex space-x-2 items-center">
                <div className="relative">
                    <input
                        type="text"
                        placeholder={t('search_placeholder')}
                        className="p-2 border border-white rounded-l bg-transparent text-white"
                    />
                    <select className="p-2 border-t border-r border-b border-white bg-[#3E5896] text-white rounded-r">
                        <option>{t('posts')}</option>
                        <option>{t('authors')}</option>
                        <option>{t('topics')}</option>
                    </select>
                </div>
                <div className="relative">
                    <select className="p-2 border border-white bg-[#3E5896] text-white rounded-r w-40">
                        <option>{t('quick_nav')}</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
