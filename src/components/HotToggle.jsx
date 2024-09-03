import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

function HotToggle({onChange}) {
    const { t } = useTranslation();
    const [activeButton, setActiveButton] = useState('topic');
    let timer = null;
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    useEffect(() => {
        onChange(activeButton);

    }, [activeButton]);



    return (
        <div className="space-y-4">
            <button
                onClick={() => handleButtonClick('topic')}
                className={`p-2 border ${activeButton === 'topic' ? 'bg-[#3E5896] text-white' : 'bg-white text-black'} border-black w-full`}
            >
                {t('hot_topics')}
            </button>
            <button
                onClick={() => handleButtonClick('video')}
                className={`p-2 border ${activeButton === 'video' ? 'bg-[#3E5896] text-white' : 'bg-white text-black'} border-black w-full`}
            >
                {t('hot_videos')}
            </button>
        </div>
    );
}

export default HotToggle;
