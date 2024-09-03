import React from 'react';
import { useTranslation } from 'react-i18next';
import AdImage from "../assets/images/ad/ad1.png";

function ForumPost() {
    const { t } = useTranslation();

    return (
        <div className="border border-black p-4 flex justify-between items-start">
            <div>
                <p>{t('forum_name')}</p>
                <p>{t('forum_topic')}:9065</p>
                <p>{t('forum_moderator')}: Jeanne015</p>
                <p>{t('forum_notice')}</p>
            </div>
            <a className={'w-40'} href={'https://www.google.com'} target={"_blank"}>
                <img src={AdImage} className={'w-full'}/>
            </a>
            <div>
                <p>{t('forum_favorite')}</p>
            </div>
        </div>
    );
}

export default ForumPost;
