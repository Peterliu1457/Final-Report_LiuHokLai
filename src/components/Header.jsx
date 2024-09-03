import { useTranslation } from "react-i18next";
import FontSettings from "./FontSettings.jsx";
import {useEffect, useState} from "react";
import Logo from '../assets/logo.png';
function Header() {
    const { t, i18n } = useTranslation();
    const [showFontSettings, setShowFontSettings] = useState(false);
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'zhhk');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
        localStorage.setItem('language', lng);
    };



    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className={'flex gap-10 items-center'}>
                <a href={'/'}>
                    <img src={Logo} className={'w-20'}/>
                </a>
                <div className="flex items-center space-x-2">
                    <select
                        value={language}
                        className="border border-black rounded p-2"
                        onChange={(e) => changeLanguage(e.target.value)}
                    >
                        <option value="zhhk">繁體</option>
                        <option value="zh">简体</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-700">
                    <a href="#" className="hover:text-blue-600">{t('browse_tools')}</a>
                    <a href="#" className="hover:text-blue-600">{t('set_as_homepage')}</a>
                    <a href="#" className="hover:text-blue-600">{t('bookmark_this_site')}</a>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <a href="/help-center" target={"_blank"} className="hover:text-blue-600 text-sm text-gray-700">{t('help_center')}</a>
                <a href="/watch-history" target={"_blank"} className="hover:text-blue-600 text-sm text-gray-700">{t('watch_history')}</a>
                <div
                    onMouseEnter={() => setShowFontSettings(true)}
                    onMouseLeave={() => setShowFontSettings(false)}
                    className="cursor-pointer relative hover:text-blue-600 text-sm text-gray-700">
                    {t('font_size')}
                    <div className={`absolute ${showFontSettings ? '' : 'hidden'} w-96 border border-gray-200 right bg-white`}>
                        <FontSettings />
                    </div>
                </div>
                <a href="#" className="hover:text-blue-600 text-blue-600 text-sm">Peter.Liu</a>

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgubqzveGfonqnt4XHQEuglmkeHwfzfSInQ&s"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </header>
    );
}

export default Header;
