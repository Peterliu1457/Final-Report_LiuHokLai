
import { useTranslation } from "react-i18next";
import {useLocation, useParams} from "react-router-dom";

const NavigationTrack = () => {
    const {t} = useTranslation();
    const {category} = useParams();
    const location = useLocation();
    let subNav = '';
    let isCategory = false;
    if (category) {
        isCategory = true;
        subNav = decodeURIComponent(category);
    }
    if (location.pathname.includes('watch-history')) {
        subNav = t('watch_history');
    }

    return (
        <div className={'d-flex items-center gap-2 my-6'}>
            <i className="bi bi-house me-2"></i>
            <a href={'/'}>{t('forum_home')}</a>
            {subNav && isCategory && (
                <>
                    <i className="bi bi-chevron-right me-2"></i>
                    <a href={'/category/' + encodeURIComponent(subNav)}>{subNav}</a>
                </>

            )}
            {subNav && !isCategory && (
                <>
                    <i className="bi bi-chevron-right me-2"></i>
                    <a href={'/watch-history'}>{subNav}</a>
                </>


            )}
        </div>
    )
}

export default NavigationTrack;