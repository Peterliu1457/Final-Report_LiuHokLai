import HistoryList from "../components/HistoryList.jsx";
import {useTranslation} from "react-i18next";
import NavigationTrack from "../components/NavigationTrack.jsx";


function WatchHistory() {

    const {t} = useTranslation();
    return (
        <div className={'mt-5'}>
            <NavigationTrack />
            <h1 className={'text-3xl font-bold my-4'}>
                {t('watch_history')}
            </h1>
            <p className={'font-bold text-2xl mb-4'}>
                {t('today')}
            </p>
            <HistoryList />

            <p className={'font-bold text-2xl mb-4 mt-10'}>
                {t('yesterday')}
            </p>
            <HistoryList />
        </div>
    )
}

export default WatchHistory;