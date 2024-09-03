import React from 'react';
import { useTranslation } from 'react-i18next';

function ForumIndex() {
    const { t } = useTranslation();

    return (
        <div className="bg-[#3E5896] p-4 text-white">
            <h2 className="text-lg mb-4 pb-2 border-b border-white">{t('forum_index')}</h2>
            <div className="space-y-6">
                <div className="flex justify-around my-2">
                    <a href={`/category/${t('family')}`} target="_blank" className="hover:underline">
                        {t('family')}
                    </a>
                    <a href={`/category/${t('work_family')}`} target="_blank" className="hover:underline">
                        {t('work_family')}
                    </a>
                    <a href={`/category/${t('sanko')}`} target="_blank" className="hover:underline">
                        {t('sanko')}
                    </a>
                    <a href={`/category/${t('attack_on_titan')}`} target="_blank" className="hover:underline">
                        {t('attack_on_titan')}
                    </a>
                    <a href={`/category/${t('detective_conan')}`} target="_blank" className="hover:underline">
                        {t('detective_conan')}
                    </a>
                    <a href={`/category/${t('vampire')}`} target="_blank" className="hover:underline">
                        {t('vampire')}
                    </a>
                    <a href={`/category/${t('pc_game')}`} target="_blank" className="hover:underline">
                        {t('pc_game')}
                    </a>
                </div>
                <div className="flex justify-around pb-4 border-b border-white my-2">
                    <a href={`/category/${t('yoshida_yoshio')}`} target="_blank" className="hover:underline">
                        {t('yoshida_yoshio')}
                    </a>
                    <a href={`/category/${t('akira')}`} target="_blank" className="hover:underline">
                        {t('akira')}
                    </a>
                    <a href={`/category/${t('love_songs')}`} target="_blank" className="hover:underline">
                        {t('love_songs')}
                    </a>
                    <a href={`/category/${t('gilgamesh')}`} target="_blank" className="hover:underline">
                        {t('gilgamesh')}
                    </a>
                    <a href={`/category/${t('aldn321')}`} target="_blank" className="hover:underline">
                        {t('aldn321')}
                    </a>
                    <a href={`/category/${t('star_city')}`} target="_blank" className="hover:underline">
                        {t('star_city')}
                    </a>
                    <a href={`/category/${t('chicken_rice')}`} target="_blank" className="hover:underline">
                        {t('chicken_rice')}
                    </a>
                </div>
                <div className="flex justify-around my-2">
                    <a href={`/category/${t('music_world')}`} target="_blank" className="hover:underline">
                        {t('music_world')}
                    </a>
                    <a href={`/category/${t('video_entertainment')}`} target="_blank" className="hover:underline">
                        {t('video_entertainment')}
                    </a>
                    <a href={`/category/${t('women_channel')}`} target="_blank" className="hover:underline">
                        {t('women_channel')}
                    </a>
                    <a href={`/category/${t('trending_news')}`} target="_blank" className="hover:underline">
                        {t('trending_news')}
                    </a>
                    <a href={`/category/${t('bt_download')}`} target="_blank" className="hover:underline">
                        {t('bt_download')}
                    </a>
                    <a href={`/category/${t('download_share')}`} target="_blank" className="hover:underline">
                        {t('download_share')}
                    </a>
                    <a href={`/category/${t('short_videos')}`} target="_blank" className="hover:underline">
                        {t('short_videos')}
                    </a>
                </div>
                <div className="flex justify-around my-2">
                    <a href={`/category/${t('computer_information')}`} target="_blank" className="hover:underline">
                        {t('computer_information')}
                    </a>
                    <a href={`/category/${t('digital_products')}`} target="_blank" className="hover:underline">
                        {t('digital_products')}
                    </a>
                    <a href={`/category/${t('mobile_communication')}`} target="_blank" className="hover:underline">
                        {t('mobile_communication')}
                    </a>
                    <a href={`/category/${t('trading_advertising')}`} target="_blank" className="hover:underline">
                        {t('trading_advertising')}
                    </a>
                    <a href={`/category/${t('website_affairs')}`} target="_blank" className="hover:underline">
                        {t('website_affairs')}
                    </a>
                    <a href={`/category/${t('long_novels')}`} target="_blank" className="hover:underline">
                        {t('long_novels')}
                    </a>
                    <a href={`/category/${t('sports')}`} target="_blank" className="hover:underline">
                        {t('sports')}
                    </a>
                </div>
                <div className="flex justify-around my-2">
                    <a href={`/category/${t('hotline')}`} target="_blank" className="hover:underline">
                        {t('hotline')}
                    </a>
                    <a href={`/category/${t('video_entertainment')}`} target="_blank" className="hover:underline">
                        {t('video_entertainment')}
                    </a>
                    <a href={`/category/${t('women_channel')}`} target="_blank" className="hover:underline">
                        {t('women_channel')}
                    </a>
                    <a href={`/category/${t('family_circle')}`} target="_blank" className="hover:underline">
                        {t('family_circle')}
                    </a>
                    <a href={`/category/${t('animation_communication')}`} target="_blank" className="hover:underline">
                        {t('animation_communication')}
                    </a>
                    <a href={`/category/${t('sticker_sharing')}`} target="_blank" className="hover:underline">
                        {t('sticker_sharing')}
                    </a>
                    <a href={`/category/${t('bl_gl')}`} target="_blank" className="hover:underline">
                        {t('bl_gl')}
                    </a>
                </div>


            </div>
        </div>
    );
}

export default ForumIndex;
