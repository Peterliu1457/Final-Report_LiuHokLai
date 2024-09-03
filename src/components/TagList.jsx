import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function TagList() {
    const { i18n } = useTranslation();
    const [activeTag, setActiveTag] = useState('全部');

    const tags = [
        { zh: '全部', en: 'All', zhhk: '全部' },
        { zh: '公告', en: 'Announcement', zhhk: '公告' },
        { zh: '綜合討論', en: 'General Discussion', zhhk: '綜合討論' },
        { zh: '分享', en: 'Share', zhhk: '分享' },
        { zh: '求助', en: 'Help', zhhk: '求助' },
        { zh: '其他', en: 'Others', zhhk: '其他' },
    ];

    const handleTagClick = (tag) => {
        setActiveTag(tag.zh);
    };

    const getTagName = (tag) => {
        switch (i18n.language) {
            case 'en':
                return tag.en;
            case 'zhhk':
                return tag.zhhk;
            default:
                return tag.zh;
        }
    };

    return (
        <div className="flex space-x-2">
            {tags.map((tag) => (
                <button
                    key={tag.zh}
                    onClick={() => handleTagClick(tag)}
                    className={`border px-4 py-2 ${
                        activeTag === tag.zh ? 'bg-[#3E5896] text-white' : 'bg-white text-black'
                    }`}
                >
                    {getTagName(tag)}
                </button>
            ))}
        </div>
    );
}

export default TagList;
