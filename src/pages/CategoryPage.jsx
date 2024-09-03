import HeaderBar from "../components/HeaderBar.jsx";
import NavBar from "../components/NavBar.jsx";
import NavigationTrack from "../components/NavigationTrack.jsx";
import CategoryItemList from "../components/CategoryItemList.jsx";
import ForumPost from "../components/ForumPost.jsx";
import Pagination from "../components/Pagination.jsx";
import {useTranslation} from "react-i18next";
import TagList from "../components/TagList.jsx";
import FilterBar from "../components/FilterBar.jsx";
import PostList from "../components/PostList.jsx";
import AdImage from '../assets/images/ad/ad1.png';

function CategoryPage() {
    const {t} = useTranslation();
    return (
        <div className={'w-full'}>
            <HeaderBar/>
            <NavBar/>
            <NavigationTrack />
            <div className={'mb-3 mt-3 relative'}>
                <CategoryItemList />
                <a className={'absolute left-full ms-2 top-0 block w-72'} href={'https://www.google.com'} target={"_blank"}>
                    <img src={AdImage} className={'w-full'}/>
                </a>
            </div>
            <ForumPost />
            <div className={'mt-5 flex justify-between items-center'}>
                <div>
                    <select className={'p-3 border w-52'}>
                        <option>{t('send_post')}</option>
                    </select>
                </div>
                <div>
                    <Pagination totalPages={10}/>
                </div>
            </div>
            <div className={'my-3'}>
                <TagList />
            </div>
            <div>
                <FilterBar />
            </div>
            <div>
                <PostList />
            </div>
        </div>
    )
}

export default CategoryPage;