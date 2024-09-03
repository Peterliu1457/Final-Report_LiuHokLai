import React from 'react';
import { useTranslation } from 'react-i18next';

function FilterBar() {
    const { t } = useTranslation();

    return (
        <div className="flex items-center">
            <span className={'me-5'}>{t('all')}</span>

            <select className="border border-gray-400 p-2 me-5">
                <option>{t('all_topics')}</option>
            </select>

            <select className="border border-gray-400 p-2 me-5">
                <option>{t('all_time')}</option>
            </select>

            <select className="border border-gray-400 p-2 me-5">
                <option>{t('last_post')}</option>
            </select>

            <span className={'ms-10 me-3'}>{t('featured')}</span>
            <span className={'me-3'}>{t('recommended')}</span>
            <span className={'me-3'}>{t('posting_time')}</span>
            <span className={'me-auto'}>{t('default_order')}</span>

            <label className="inline-flex items-center me-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">{t('new_window')}</span>
            </label>

            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">{t('image_mode')}</span>
            </label>
        </div>
    );
}

export default FilterBar;
