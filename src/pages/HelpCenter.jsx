import React from 'react';
import { useTranslation } from 'react-i18next';

function HelpCenter() {
    const { t } = useTranslation();

    const sections = [
        {
            title: t('forum_rules'),
            items: [
                t('terms_conditions'),
                t('no_multiple_accounts'),
                t('no_spam'),
                t('no_fake_news'),
                t('no_adult_content'),
                t('sub_forum_rules')
            ]
        },
        {
            title: t('forum_features'),
            items: [
                t('how_to_register'),
                t('member_privileges'),
                t('about_membership'),
                t('post_restrictions'),
                t('why_posts_hidden')
            ]
        },
        {
            title: t('privacy_security'),
            items: [
                t('account_security'),
                t('protect_personal_data'),
                t('change_nickname'),
                t('change_login_email'),
                t('verify_new_email'),
                t('delete_own_posts')
            ]
        }
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8">{t('help_center')}</h1>
            {sections.map((section, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                    <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="text-gray-700">
                                {item}
                            </li>
                        ))}
                    </ul>
                    {index < sections.length - 1 && <hr className="my-8" />}
                </div>
            ))}
        </div>
    );
}

export default HelpCenter;
