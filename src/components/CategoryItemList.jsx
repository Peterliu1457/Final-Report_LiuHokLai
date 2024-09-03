import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

function CategoryItemList() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);


    useEffect(() => {
        setLanguage(i18n.language)
    }, [i18n.language]);

    const games = [
        {
            zh: "绝地求生 PUBG",
            en: "PUBG",
            zhhk: "絕地求生 PUBG",
        },
        {
            zh: "暴雪英霸",
            en: "Heroes of the Storm",
            zhhk: "暴雪英霸",
        },
        {
            zh: "看门狗 Watch Dogs",
            en: "Watch Dogs",
            zhhk: "看門狗 Watch Dogs",
        },
        {
            zh: "汤姆克兰西：全境封锁",
            en: "Tom Clancy's The Division",
            zhhk: "湯姆克蘭西：全境封鎖",
        },
        {
            zh: "上古卷轴 系列",
            en: "The Elder Scrolls Series",
            zhhk: "上古卷軸 系列",
        },
        {
            zh: "东方project",
            en: "Touhou Project",
            zhhk: "東方project",
        },
        {
            zh: "Don't Starve",
            en: "Don't Starve",
            zhhk: "Don't Starve",
        },
        {
            zh: "黑色沙漠 BLACK DESERT",
            en: "BLACK DESERT",
            zhhk: "黑色沙漠 BLACK DESERT",
        },
        {
            zh: "战舰世界",
            en: "World of Warships",
            zhhk: "戰艦世界",
        },
        {
            zh: "大富翁游戏系列",
            en: "Monopoly Series",
            zhhk: "大富翁遊戲系列",
        },
        {
            zh: "边缘世界",
            en: "RimWorld",
            zhhk: "邊緣世界",
        },
        {
            zh: "魔兽世界",
            en: "World of Warcraft",
            zhhk: "魔獸世界",
        },
        {
            zh: "荣耀战魂",
            en: "For Honor",
            zhhk: "榮耀戰魂",
        },
        {
            zh: "运动/竞速游戏",
            en: "Sports/Racing Games",
            zhhk: "運動/競速遊戲",
        },
        {
            zh: "艾尔之光",
            en: "Elsword",
            zhhk: "艾爾之光",
        },
        {
            zh: "NEKOPARA",
            en: "NEKOPARA",
            zhhk: "NEKOPARA",
        },
    ];

    const renderGameName = (game) => {
        switch (language) {
            case 'zh':
                return game.zh;
            case 'en':
                return game.en;
            case 'zhhk':
                return game.zhhk;
            default:
                return game.zh;
        }
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            {games.map((game, index) => (
                <div key={index} className="bg-[#3E5896] text-white p-4 text-center">
                    {renderGameName(game)}
                </div>
            ))}
        </div>
    );
}

export default CategoryItemList;
